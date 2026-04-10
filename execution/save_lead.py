"""
execution/save_lead.py
----------------------
Salva um lead recebido via stdin (JSON) no arquivo .tmp/leads.jsonl.
Pode ser chamado standalone ou pelo servidor Express via subprocess.

Uso:
    echo '{"name": "John", "email": "j@company.com"}' | python execution/save_lead.py
    python execution/save_lead.py --data '{"name": "John", ...}'
"""

import sys
import json
import os
import argparse
from datetime import datetime, timezone
from pathlib import Path

# Caminho base do projeto (um nível acima de execution/)
BASE_DIR = Path(__file__).resolve().parent.parent
TMP_DIR = BASE_DIR / ".tmp"
LEADS_FILE = TMP_DIR / "leads.jsonl"

REQUIRED_FIELDS = ["name", "email", "company", "role", "interestType"]


def validate_lead(data: dict) -> list[str]:
    """Retorna lista de campos obrigatórios ausentes."""
    errors = []
    for field in REQUIRED_FIELDS:
        if not data.get(field, "").strip():
            errors.append(field)
    if data.get("email") and "@" not in data["email"]:
        errors.append("email (inválido)")
    return errors


def save_lead(data: dict) -> dict:
    """
    Valida e salva o lead em .tmp/leads.jsonl.
    Retorna dict com 'success' e 'message'.
    """
    # Validar campos
    errors = validate_lead(data)
    if errors:
        return {
            "success": False,
            "message": f"Campos inválidos ou ausentes: {', '.join(errors)}"
        }

    # Garantir que o diretório .tmp existe
    TMP_DIR.mkdir(parents=True, exist_ok=True)

    # Adicionar timestamp se não existir
    if "submittedAt" not in data:
        data["submittedAt"] = datetime.now(timezone.utc).isoformat()

    # Salvar em formato JSONL (append)
    with LEADS_FILE.open("a", encoding="utf-8") as f:
        f.write(json.dumps(data, ensure_ascii=False) + "\n")

    print(f"[save_lead] Lead salvo: {data['email']} | {data['submittedAt']}", file=sys.stderr)
    return {"success": True, "message": "Lead salvo com sucesso."}


def main():
    parser = argparse.ArgumentParser(description="Salva um lead no arquivo de leads.")
    parser.add_argument("--data", type=str, help="JSON string do lead")
    args = parser.parse_args()

    # Ler dados do argumento ou stdin
    if args.data:
        raw = args.data
    else:
        raw = sys.stdin.read().strip()

    if not raw:
        print(json.dumps({"success": False, "message": "Nenhum dado recebido."}))
        sys.exit(1)

    try:
        lead_data = json.loads(raw)
    except json.JSONDecodeError as e:
        print(json.dumps({"success": False, "message": f"JSON inválido: {e}"}))
        sys.exit(1)

    result = save_lead(lead_data)
    print(json.dumps(result))
    sys.exit(0 if result["success"] else 1)


if __name__ == "__main__":
    main()
