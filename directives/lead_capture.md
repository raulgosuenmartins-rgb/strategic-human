# Diretiva: Captura e Processamento de Leads

## Objetivo
Capturar, salvar e notificar a equipe quando um novo lead submete o formulário de contato no portal Strategic Human.

## Entradas
- `name`: Nome completo do lead
- `email`: E-mail corporativo
- `company`: Empresa ou boutique de consultoria
- `role`: Cargo atual
- `interestType`: Tipo de interesse (`individual`, `consultancy`, `company`, `institution`, `partnership`)
- `context`: Texto livre com objetivos e contexto
- `submittedAt`: Timestamp ISO 8601 (gerado automaticamente)

## Ferramentas e Scripts
1. **API REST** (`POST /api/leads`) — recebe o payload do formulário React
2. `execution/save_lead.py` — salva o lead em `.tmp/leads.jsonl`
3. `execution/process_leads.py` — exporta leads para CSV ou Google Sheets
4. `execution/send_notification.py` — envia e-mail de notificação para a equipe

## Fluxo de Execução
1. Usuário preenche o formulário em `/contact` no frontend React
2. Frontend faz `POST /api/leads` com o payload JSON
3. Servidor Express (`server.ts`) valida os campos obrigatórios
4. Servidor escreve o lead em `.tmp/leads.jsonl` (append-only)
5. Servidor retorna `{ success: true }` para o frontend
6. Frontend exibe tela de confirmação ao usuário
7. (Opcional) `execution/send_notification.py` é chamado para alertar a equipe

## Saídas
- `.tmp/leads.jsonl` — arquivo de leads em formato JSONL (um objeto por linha)
- E-mail de notificação para o endereço configurado em `.env` (`NOTIFICATION_EMAIL`)

## Edge Cases
- **Campo obrigatório vazio:** API retorna `400 Bad Request` com mensagem de erro
- **E-mail inválido:** Validado no frontend e no backend antes de salvar
- **Arquivo leads.jsonl inexistente:** O script deve criá-lo automaticamente
- **Falha no envio de e-mail:** Loga o erro mas não bloqueia o salvamento do lead
- **Duplicatas:** Não bloqueadas. Filtrar no `process_leads.py` por e-mail se necessário

## Variáveis de Ambiente (.env)
```
NOTIFICATION_EMAIL=advisor@strategichuman.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
```
