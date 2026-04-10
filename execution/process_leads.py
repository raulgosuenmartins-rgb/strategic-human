"""
execution/process_leads.py
--------------------------
Lê o arquivo .tmp/leads.jsonl e exporta para CSV ou exibe um relatório.
Útil para análise de leads e preparação para CRM.

Uso:
    python execution/process_leads.py                    # Exibe relatório no terminal
    python execution/process_leads.py --export csv       # Exporta para .tmp/leads_export.csv
    python execution/process_leads.py --filter company   # Filtra leads do tipo 'company'
    python execution/process_leads.py --dedup            # Remove duplicatas por e-mail
"""

import json
import csv
import argparse
import sys
from datetime import datetime
from pathlib import Path
from collections import Counter

BASE_DIR = Path(__file__).resolve().parent.parent
TMP_DIR = BASE_DIR / ".tmp"
LEADS_FILE = TMP_DIR / "leads.jsonl"
EXPORT_FILE = TMP_DIR / "leads_export.csv"

CSV_FIELDS = ["name", "email", "company", "role", "interestType", "context", "submittedAt"]


def load_leads(dedup: bool = False, filter_type: str = None) -> list[dict]:
    """Carrega leads do arquivo JSONL com opções de filtro e deduplicação."""
    if not LEADS_FILE.exists():
        print(f"[process_leads] Arquivo não encontrado: {LEADS_FILE}", file=sys.stderr)
        return []

    leads = []
    seen_emails = set()

    with LEADS_FILE.open("r", encoding="utf-8") as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            try:
                lead = json.loads(line)
            except json.JSONDecodeError as e:
                print(f"[process_leads] Linha {line_num} inválida: {e}", file=sys.stderr)
                continue

            # Filtrar por tipo de interesse
            if filter_type and lead.get("interestType") != filter_type:
                continue

            # Deduplicar por e-mail (mantém o mais recente)
            email = lead.get("email", "").lower().strip()
            if dedup:
                if email in seen_emails:
                    continue
                seen_emails.add(email)

            leads.append(lead)

    return leads


def print_report(leads: list[dict]):
    """Exibe relatório resumido no terminal."""
    total = len(leads)
    if total == 0:
        print("Nenhum lead encontrado.")
        return

    print(f"\n{'='*60}")
    print(f"  RELATÓRIO DE LEADS — Strategic Human Portal")
    print(f"{'='*60}")
    print(f"  Total de leads: {total}")

    # Distribuição por tipo
    type_counts = Counter(l.get("interestType", "desconhecido") for l in leads)
    print(f"\n  Por tipo de interesse:")
    for interest_type, count in type_counts.most_common():
        pct = (count / total) * 100
        print(f"    {interest_type:<20} {count:>3} ({pct:.0f}%)")

    # Leads mais recentes
    sorted_leads = sorted(leads, key=lambda l: l.get("submittedAt", ""), reverse=True)
    print(f"\n  Últimos 5 leads:")
    for lead in sorted_leads[:5]:
        submitted = lead.get("submittedAt", "N/A")[:10]
        print(f"    [{submitted}] {lead.get('name', 'N/A'):<25} {lead.get('email', 'N/A')}")

    print(f"{'='*60}\n")


def export_csv(leads: list[dict]):
    """Exporta leads para CSV."""
    TMP_DIR.mkdir(parents=True, exist_ok=True)

    with EXPORT_FILE.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(leads)

    print(f"[process_leads] Exportado {len(leads)} leads para: {EXPORT_FILE}")


def main():
    parser = argparse.ArgumentParser(description="Processa e exporta leads do portal.")
    parser.add_argument("--export", choices=["csv"], help="Formato de exportação")
    parser.add_argument("--filter", dest="filter_type",
                        choices=["individual", "consultancy", "company", "institution", "partnership"],
                        help="Filtrar por tipo de interesse")
    parser.add_argument("--dedup", action="store_true", help="Remover duplicatas por e-mail")
    args = parser.parse_args()

    leads = load_leads(dedup=args.dedup, filter_type=args.filter_type)

    if args.export == "csv":
        export_csv(leads)
    else:
        print_report(leads)


if __name__ == "__main__":
    main()
