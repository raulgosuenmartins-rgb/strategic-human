/**
 * server.ts — Camada 3: Execução
 * Servidor Express que expõe a API do portal Strategic Human.
 * Roda na porta 3001 (proxied pelo Vite em dev via /api/*)
 *
 * Endpoints:
 *   POST /api/leads  — captura lead do formulário de contato
 *   GET  /api/health — healthcheck
 */

import express, { Request, Response } from 'express';
import { appendFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);
const APP_URL = process.env.APP_URL || 'http://localhost:3000';

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());

// CORS restrito à URL do frontend
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', APP_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ── Diretório .tmp ────────────────────────────────────────────────────────────
const TMP_DIR = join(__dirname, '.tmp');
const LEADS_FILE = join(TMP_DIR, 'leads.jsonl');

if (!existsSync(TMP_DIR)) {
  mkdirSync(TMP_DIR, { recursive: true });
  console.log('[server] Diretório .tmp criado.');
}

// ── Tipos ─────────────────────────────────────────────────────────────────────
interface LeadPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  interestType: string;
  context?: string;
}

const REQUIRED_FIELDS: (keyof LeadPayload)[] = ['name', 'email', 'company', 'role', 'interestType'];

function validateLead(body: Partial<LeadPayload>): string[] {
  const errors: string[] = [];
  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || String(body[field]).trim() === '') {
      errors.push(field);
    }
  }
  if (body.email && !body.email.includes('@')) {
    errors.push('email (formato inválido)');
  }
  return errors;
}

// ── Routes ────────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Captura de lead
app.post('/api/leads', (req: Request, res: Response) => {
  const body: Partial<LeadPayload> = req.body;

  // Validação
  const errors = validateLead(body);
  if (errors.length > 0) {
    res.status(400).json({
      success: false,
      message: `Campos obrigatórios ausentes ou inválidos: ${errors.join(', ')}`,
    });
    return;
  }

  const lead = {
    ...body,
    email: body.email!.toLowerCase().trim(),
    submittedAt: new Date().toISOString(),
  };

  // Salvar em .tmp/leads.jsonl
  try {
    appendFileSync(LEADS_FILE, JSON.stringify(lead) + '\n', 'utf-8');
    console.log(`[server] Lead salvo: ${lead.email} | ${lead.submittedAt}`);
  } catch (err) {
    console.error('[server] Erro ao salvar lead:', err);
    res.status(500).json({ success: false, message: 'Erro interno ao salvar a aplicação.' });
    return;
  }

  // Disparar notificação por e-mail via script Python (não bloqueia a resposta)
  const pythonScript = join(__dirname, 'execution', 'send_notification.py');
  if (existsSync(pythonScript)) {
    try {
      spawnSync('python', [pythonScript, '--data', JSON.stringify(lead)], {
        encoding: 'utf-8',
        timeout: 10_000,
      });
    } catch (err) {
      // Falha na notificação não deve bloquear o fluxo
      console.warn('[server] Notificação por e-mail falhou:', err);
    }
  }

  res.status(201).json({
    success: true,
    message: 'Aplicação recebida. Um advisor entrará em contato em até 24 horas.',
  });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[server] API rodando em http://localhost:${PORT}`);
  console.log(`[server] Leads salvos em: ${LEADS_FILE}`);
});
