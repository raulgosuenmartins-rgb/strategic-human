# Diretiva: Build e Deploy

## Objetivo
Construir o artefato de produção do portal Strategic Human e implantá-lo no ambiente de hospedagem.

## Pré-requisitos
- Node.js 20+
- Python 3.10+ (para scripts de execução)
- Arquivo `.env` configurado (use `.env.example` como base)
- Acesso ao ambiente de deploy (Google Cloud Run ou similar)

## Ferramentas
- `execution/build_and_deploy.py` — automatiza o pipeline completo
- `npm run build` — gera o bundle de produção em `dist/`
- `npm run server` — inicia o servidor Express da API

## Fluxo de Deploy

### 1. Verificar Ambiente
```bash
node --version       # >= 20
python --version     # >= 3.10
cp .env.example .env # Configurar variáveis
```

### 2. Instalar Dependências
```bash
npm install
pip install -r execution/requirements.txt  # Se houver dependências Python
```

### 3. Build de Produção
```bash
npm run build
# Artefato gerado em dist/
```

### 4. Iniciar Servidor API
```bash
npm run server
# Servidor Express roda na porta 3001
# Endpoints disponíveis: POST /api/leads
```

### 5. Servir Frontend
Em produção, sirva `dist/` via nginx, Caddy ou integrado ao servidor Express.

## Variáveis de Ambiente Obrigatórias
```
GEMINI_API_KEY=...         # Google Gemini AI
NOTIFICATION_EMAIL=...     # E-mail para notificações de leads
PORT=3001                  # Porta do servidor Express
APP_URL=https://...        # URL pública do portal
```

## Checklist de Deploy
- [ ] `.env` configurado com todas as variáveis
- [ ] `npm run lint` sem erros TypeScript
- [ ] `npm run build` gera `dist/` sem erros
- [ ] Servidor Express iniciado e respondendo em `/api/leads`
- [ ] Formulário de contato testado ponta a ponta
- [ ] Arquivo `.tmp/leads.jsonl` com permissão de escrita

## Edge Cases
- **Porta 3001 ocupada:** Altere `PORT` no `.env`
- **Erro de CORS:** Servidor Express inclui headers CORS apenas para `APP_URL`
- **`.tmp/` não existe:** O servidor cria automaticamente na inicialização
- **Build falha com TS errors:** Rode `npm run lint` para identificar o problema antes do build
