#!/usr/bin/env python3
"""Split raw/ufsar/salem-ufsar.pdf into per-chapter PDFs using its top-level bookmarks.

Writes raw/ufsar/ch-<slug>.pdf (raw/ is gitignored) and the tracked index
data/ufsar/chapter-index.json. Page numbers are 0-indexed. Re-run only if the source
UFSAR PDF is replaced.

Run with the venv python (pypdf lives there): .venv/bin/python scripts/split_ufsar.py
"""
import json
import re
import sys
from pathlib import Path

SRC = Path("raw/ufsar/salem-ufsar.pdf")
OUT_DIR = Path("raw/ufsar")
INDEX = Path("data/ufsar/chapter-index.json")


def chapter_ranges(bookmarks, total_pages):
    """bookmarks: [(title, start_page), ...] in document order. Return
    [(title, start, end_exclusive)] where end is the next bookmark's start."""
    out = []
    for i, (title, start) in enumerate(bookmarks):
        end = bookmarks[i + 1][1] if i + 1 < len(bookmarks) else total_pages
        out.append((title, start, end))
    return out


def slug(title):
    return re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")


def main():
    import pypdf
    reader = pypdf.PdfReader(SRC)
    total = len(reader.pages)
    bookmarks = []
    # Assumes a flat top-level outline (chapters at the top level); nested bookmark groups are skipped.
    for item in reader.outline:
        if isinstance(item, list):
            continue
        bookmarks.append((item.title.strip(), reader.get_destination_page_number(item)))
    bookmarks.sort(key=lambda b: b[1])
    print(f"found {len(bookmarks)} top-level bookmarks")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    INDEX.parent.mkdir(parents=True, exist_ok=True)
    index = []
    for title, start, end in chapter_ranges(bookmarks, total):
        name = f"ch-{slug(title)}.pdf"
        writer = pypdf.PdfWriter()
        for p in range(start, end):
            writer.add_page(reader.pages[p])
        with (OUT_DIR / name).open("wb") as fh:
            writer.write(fh)
        index.append({"title": title, "start_page": start, "end_page": end, "pdf": name})
    INDEX.write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(index)} chapter PDFs + {INDEX}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
