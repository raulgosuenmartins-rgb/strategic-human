"""
execution/send_notification.py
-------------------------------
Envia e-mail de notificação para a equipe quando um novo lead é capturado.
Requer configuração SMTP no arquivo .env.

Uso:
    echo '{"name": "John", "email": "j@co.com", "interestType": "individual"}' | python execution/send_notification.py
    python execution/send_notification.py --data '{"name": "John", ...}'
"""

import sys
import json
import os
import argparse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from datetime import datetime

# Carregar .env manualmente (sem dependência de python-dotenv)
def load_env():
    env_file = Path(__file__).resolve().parent.parent / ".env"
    if not env_file.exists():
        return
    with env_file.open() as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            os.environ.setdefault(key.strip(), value.strip())


load_env()

NOTIFICATION_EMAIL = os.getenv("NOTIFICATION_EMAIL", "")
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")


def build_email_body(lead: dict) -> str:
    """Constrói corpo do e-mail em HTML."""
    submitted_at = lead.get("submittedAt", datetime.now().isoformat())[:19].replace("T", " ")

    interest_labels = {
        "individual": "Consultor Individual",
        "consultancy": "Consultoria / Boutique",
        "company": "Empresa / Corporação",
        "institution": "Instituição Educacional",
        "partnership": "Parceria Estratégica"
    }
    interest_label = interest_labels.get(lead.get("interestType", ""), lead.get("interestType", "N/A"))

    return f"""
    <html>
    <body style="font-family: sans-serif; color: #0A192F; max-width: 600px; margin: 0 auto;">
      <div style="background: #0A192F; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h2 style="margin: 0; color: #FF6B6B;">Novo Lead — Strategic Human Portal</h2>
        <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">{submitted_at}</p>
      </div>
      <div style="border: 1px solid #e2e8f0; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">{lead.get('name', 'N/A')}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:{lead.get('email', '')}" style="color: #FF6B6B;">{lead.get('email', 'N/A')}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Empresa</td><td style="padding: 8px 0;">{lead.get('company', 'N/A')}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Cargo</td><td style="padding: 8px 0;">{lead.get('role', 'N/A')}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Perfil</td><td style="padding: 8px 0;"><span style="background: #FF6B6B; color: white; padding: 2px 10px; border-radius: 20px; font-size: 12px;">{interest_label}</span></td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #FF6B6B;">
          <p style="margin: 0; font-size: 13px; color: #64748b; font-style: italic;">"{lead.get('context', 'Sem contexto informado.')}"</p>
        </div>
      </div>
    </body>
    </html>
    """


def send_notification(lead: dict) -> dict:
    """Envia e-mail de notificação. Retorna dict com success e message."""
    if not all([NOTIFICATION_EMAIL, SMTP_USER, SMTP_PASS]):
        msg = "Configuração SMTP incompleta. Verifique NOTIFICATION_EMAIL, SMTP_USER, SMTP_PASS no .env."
        print(f"[send_notification] AVISO: {msg}", file=sys.stderr)
        return {"success": False, "message": msg}

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Novo Lead: {lead.get('name', 'N/A')} — {lead.get('company', 'N/A')}"
        msg["From"] = SMTP_USER
        msg["To"] = NOTIFICATION_EMAIL

        html_body = build_email_body(lead)
        msg.attach(MIMEText(html_body, "html"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, NOTIFICATION_EMAIL, msg.as_string())

        print(f"[send_notification] E-mail enviado para {NOTIFICATION_EMAIL}", file=sys.stderr)
        return {"success": True, "message": "Notificação enviada."}

    except smtplib.SMTPException as e:
        error_msg = f"Erro SMTP: {e}"
        print(f"[send_notification] ERRO: {error_msg}", file=sys.stderr)
        return {"success": False, "message": error_msg}


def main():
    parser = argparse.ArgumentParser(description="Envia notificação de novo lead por e-mail.")
    parser.add_argument("--data", type=str, help="JSON string do lead")
    args = parser.parse_args()

    raw = args.data if args.data else sys.stdin.read().strip()

    if not raw:
        print(json.dumps({"success": False, "message": "Nenhum dado recebido."}))
        sys.exit(1)

    try:
        lead_data = json.loads(raw)
    except json.JSONDecodeError as e:
        print(json.dumps({"success": False, "message": f"JSON inválido: {e}"}))
        sys.exit(1)

    result = send_notification(lead_data)
    print(json.dumps(result))
    sys.exit(0 if result["success"] else 1)


if __name__ == "__main__":
    main()
