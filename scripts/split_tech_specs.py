#!/usr/bin/env python3
"""Split the complete Salem Unit 1 Tech Specs PDF (ML11175A207) into one PDF
per major LCO section (3.1 .. 3.11), for issue #81.

Outputs site/public/ts-pdfs/ts-3-<n>.pdf (tracked). The source PDF lives in
gitignored raw/tech-specs/ and must be present locally — this script cannot
run in environments without it.

Run with the venv python (pypdf lives there):

  1. See what the source looks like (page count + any bookmark outline):
       .venv/bin/python scripts/split_tech_specs.py --inspect

  2a. If the outline lists the 3/4.x sections, split straight from it:
       .venv/bin/python scripts/split_tech_specs.py --from-bookmarks

  2b. Otherwise, write the page-range template, fill in the 1-indexed
      first/last page of each section as shown in your PDF viewer, then split:
       .venv/bin/python scripts/split_tech_specs.py --write-ranges-template
       # edit scripts/ts_section_ranges.json
       .venv/bin/python scripts/split_tech_specs.py --from-ranges

  3. Verify each output PDF opens and covers the full section (including any
     subsection previously missing, e.g. 3.4.8), then commit the new files.

Only sections passed via --sections (default: the five that were fragmented:
3.1 3.4 3.6 3.7 3.8) are written, so the six sections migrated from existing
complete PDFs are not clobbered unless you ask for them.
"""
import argparse
import json
import re
import sys
from pathlib import Path

SRC_DEFAULT = Path("raw/tech-specs/ML11175A207.pdf")
OUT_DIR = Path("site/public/ts-pdfs")
RANGES_FILE = Path("scripts/ts_section_ranges.json")
ALL_SECTIONS = list(range(1, 12))
DEFAULT_SECTIONS = [1, 4, 6, 7, 8]

# Matches bookmark titles like "3/4.1", "SECTION 3/4.4", "3/4.10 SPECIAL TEST ..."
SECTION_TITLE_RE = re.compile(r"\b3/4\.(\d{1,2})\b")


def load_reader(src: Path):
    try:
        import pypdf
    except ImportError:
        sys.exit("pypdf is required — run with .venv/bin/python (see docstring).")
    if not src.exists():
        sys.exit(f"Source PDF not found: {src} (raw/ is gitignored; this must run where the file exists).")
    return pypdf.PdfReader(src)


def flat_outline(reader):
    """Yield (title, start_page) for every outline entry, depth-first."""
    entries = []

    def walk(items):
        for item in items:
            if isinstance(item, list):
                walk(item)
            else:
                try:
                    entries.append((item.title.strip(), reader.get_destination_page_number(item)))
                except Exception:
                    continue

    try:
        walk(reader.outline)
    except Exception:
        pass
    return sorted(entries, key=lambda e: e[1])


def inspect(reader):
    print(f"pages: {len(reader.pages)}")
    entries = flat_outline(reader)
    if not entries:
        print("outline: NONE — use --write-ranges-template / --from-ranges")
        return
    print(f"outline entries ({len(entries)}):")
    for title, page in entries:
        marker = " <-- section match" if SECTION_TITLE_RE.search(title) else ""
        print(f"  p{page + 1:>4}  {title}{marker}")


def ranges_from_bookmarks(reader):
    """First outline entry per section number wins; each section ends where the
    next distinct section (or the end of the document) begins."""
    entries = flat_outline(reader)
    starts = {}
    for title, page in entries:
        match = SECTION_TITLE_RE.search(title)
        if match:
            number = int(match.group(1))
            if number in ALL_SECTIONS and number not in starts:
                starts[number] = page
    missing = [n for n in ALL_SECTIONS if n not in starts]
    if missing:
        sys.exit(
            f"Bookmarks found sections {sorted(starts)} but not {missing} — "
            "fall back to --write-ranges-template / --from-ranges."
        )
    ordered = sorted(starts.items(), key=lambda item: item[1])
    ranges = {}
    for i, (number, start) in enumerate(ordered):
        end = ordered[i + 1][1] if i + 1 < len(ordered) else len(reader.pages)
        ranges[number] = (start, end)  # 0-indexed, end exclusive
    return ranges


def ranges_from_file(reader):
    if not RANGES_FILE.exists():
        sys.exit(f"{RANGES_FILE} not found — run --write-ranges-template first.")
    data = json.loads(RANGES_FILE.read_text(encoding="utf-8"))
    ranges = {}
    for number in ALL_SECTIONS:
        key = f"3.{number}"
        pair = data.get(key)
        if not pair or None in pair:
            continue
        first, last = int(pair[0]), int(pair[1])  # 1-indexed inclusive (as in a PDF viewer)
        if not (1 <= first <= last <= len(reader.pages)):
            sys.exit(f"{key}: pages {first}-{last} out of bounds (document has {len(reader.pages)} pages).")
        ranges[number] = (first - 1, last)  # convert to 0-indexed, end exclusive
    if not ranges:
        sys.exit(f"No filled-in ranges in {RANGES_FILE}.")
    return ranges


def write_template():
    template = {f"3.{n}": [None, None] for n in ALL_SECTIONS}
    RANGES_FILE.write_text(
        json.dumps(template, indent=2) + "\n", encoding="utf-8"
    )
    print(f"wrote {RANGES_FILE} — fill in [first_page, last_page] (1-indexed, inclusive) per section.")


def split(reader, ranges, sections):
    import pypdf
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    written = []
    for number in sections:
        if number not in ranges:
            print(f"skipping 3.{number}: no range available")
            continue
        start, end = ranges[number]
        writer = pypdf.PdfWriter()
        for page in range(start, end):
            writer.add_page(reader.pages[page])
        out = OUT_DIR / f"ts-3-{number}.pdf"
        with out.open("wb") as handle:
            writer.write(handle)
        written.append((out, end - start))
        print(f"wrote {out} ({end - start} pages, source pages {start + 1}-{end})")
    if not written:
        sys.exit("nothing written")
    print(f"done — {len(written)} section PDFs. Open each and verify coverage before committing.")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--src", type=Path, default=SRC_DEFAULT)
    parser.add_argument("--inspect", action="store_true", help="Print page count and outline; no writes")
    parser.add_argument("--from-bookmarks", action="store_true", help="Split using the PDF outline")
    parser.add_argument("--from-ranges", action="store_true", help=f"Split using {RANGES_FILE}")
    parser.add_argument("--write-ranges-template", action="store_true", help=f"Write an empty {RANGES_FILE}")
    parser.add_argument(
        "--sections", type=int, nargs="+", default=DEFAULT_SECTIONS,
        help=f"Section numbers to write (default: {DEFAULT_SECTIONS}; pass 1 2 3 4 5 6 7 8 9 10 11 for all)",
    )
    args = parser.parse_args()

    if args.write_ranges_template:
        write_template()
        return

    reader = load_reader(args.src)
    if args.inspect:
        inspect(reader)
        return
    if args.from_bookmarks:
        split(reader, ranges_from_bookmarks(reader), args.sections)
        return
    if args.from_ranges:
        split(reader, ranges_from_file(reader), args.sections)
        return
    parser.error("choose one of --inspect / --from-bookmarks / --from-ranges / --write-ranges-template")


if __name__ == "__main__":
    main()
