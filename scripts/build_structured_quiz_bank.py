#!/usr/bin/env python3
"""Build structured quiz-bank v2 beside the production static quiz bank.

The v2 bank is an experimental migration artifact. It must not replace or
modify site/src/data/quiz-bank.json.
"""

from __future__ import annotations

import argparse
import json
import re
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from typing import Any

SCHEMA_VERSION = 1

# Tags that should insert a paragraph break in plain (non-structured) text flow.
_PARAGRAPH_BREAK_TAGS = {"p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote"}


class BlockHtmlParser(HTMLParser):
    """HTML-to-block parser for quiz content.

    Emits paragraph, image, table, list, and code blocks. Structural elements
    (``table``, ``ul``/``ol``, ``pre``) interrupt the paragraph stream and are
    emitted as their own blocks; surrounding text continues as paragraphs.

    The parser is intentionally conservative: nested structural elements
    (e.g. a list inside a table cell) collapse to text inside their parent —
    the corpus does not currently use them, and flattening keeps cells/items
    as the simple ``string``s the schema requires.
    """

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.blocks: list[dict[str, Any]] = []
        self._text_parts: list[str] = []

        # Mutually-exclusive structured contexts. None = inactive.
        self._table: dict[str, Any] | None = None
        self._list: dict[str, Any] | None = None
        self._code: dict[str, Any] | None = None

    # ----- public lifecycle --------------------------------------------------

    def close(self) -> None:
        super().close()
        # Defensive: emit any unterminated structured block so we don't lose data.
        if self._table is not None:
            self._emit_table()
        if self._list is not None:
            self._emit_list()
        if self._code is not None:
            self._emit_code()
        self._flush_text()

    # ----- HTMLParser hooks --------------------------------------------------

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        attr_map = {name.lower(): value or "" for name, value in attrs}

        if self._code is not None:
            # Inside <pre>: ignore inner tags; let text flow through.
            if tag == "br":
                self._code["parts"].append("\n")
            return

        if tag == "img":
            if self._in_structured():
                # Drop images inside cells/items — schema only allows text there.
                return
            self._flush_text()
            self.blocks.append(
                {
                    "type": "image",
                    "src": attr_map.get("src", ""),
                    "alt": attr_map.get("alt", ""),
                }
            )
            return

        if tag == "br":
            self._append_text("\n")
            return

        if self._table is not None:
            self._handle_table_starttag(tag)
            return

        if self._list is not None:
            self._handle_list_starttag(tag)
            return

        if tag == "table":
            self._flush_text()
            self._table = {
                "rows": [],
                "current_row": None,
                "cell_parts": None,
                "row_has_th": False,
                "header_row": None,
            }
            return

        if tag in {"ul", "ol"}:
            self._flush_text()
            self._list = {"items": [], "item_parts": None}
            return

        if tag == "pre":
            self._flush_text()
            self._code = {"parts": []}
            return

        if tag in _PARAGRAPH_BREAK_TAGS:
            self._append_text("\n")

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()

        if self._code is not None:
            if tag == "pre":
                self._emit_code()
            return

        if self._table is not None:
            self._handle_table_endtag(tag)
            return

        if self._list is not None:
            self._handle_list_endtag(tag)
            return

        if tag in _PARAGRAPH_BREAK_TAGS:
            self._append_text("\n")

    def handle_data(self, data: str) -> None:
        self._append_text(data)

    # ----- text routing ------------------------------------------------------

    def _append_text(self, data: str) -> None:
        if self._code is not None:
            self._code["parts"].append(data)
            return
        if self._table is not None:
            if self._table["cell_parts"] is not None:
                self._table["cell_parts"].append(data)
            return  # text outside cells (e.g. between </tr> and <tr>) is dropped
        if self._list is not None:
            if self._list["item_parts"] is not None:
                self._list["item_parts"].append(data)
            return  # text outside <li> is dropped
        self._text_parts.append(data)

    def _flush_text(self) -> None:
        text = _normalize_text("".join(self._text_parts))
        self._text_parts = []
        if text:
            self.blocks.append({"type": "paragraph", "text": text})

    def _in_structured(self) -> bool:
        return self._table is not None or self._list is not None or self._code is not None

    # ----- table -------------------------------------------------------------

    def _handle_table_starttag(self, tag: str) -> None:
        t = self._table
        assert t is not None
        if tag == "tr":
            t["current_row"] = []
            t["row_has_th"] = False
        elif tag in {"th", "td"}:
            if t["current_row"] is None:
                # Stray cell outside a row — open an implicit row.
                t["current_row"] = []
            t["cell_parts"] = []
            if tag == "th":
                t["row_has_th"] = True
        # Other tags (thead, tbody, colgroup, br, span, ...) are ignored;
        # their text still reaches handle_data via _append_text routing.

    def _handle_table_endtag(self, tag: str) -> None:
        t = self._table
        assert t is not None
        if tag == "table":
            self._emit_table()
            return
        if tag in {"th", "td"} and t["cell_parts"] is not None:
            cell = _normalize_text("".join(t["cell_parts"]))
            if t["current_row"] is None:
                t["current_row"] = []
            t["current_row"].append(cell)
            t["cell_parts"] = None
            return
        if tag == "tr" and t["current_row"] is not None:
            row = t["current_row"]
            if t["row_has_th"] and t["header_row"] is None:
                t["header_row"] = row
            else:
                t["rows"].append(row)
            t["current_row"] = None
            t["row_has_th"] = False
            return

    def _emit_table(self) -> None:
        t = self._table
        self._table = None
        if t is None:
            return
        # Flush any open cell/row defensively.
        if t["cell_parts"] is not None and t["current_row"] is not None:
            t["current_row"].append(_normalize_text("".join(t["cell_parts"])))
            t["cell_parts"] = None
        if t["current_row"] is not None:
            row = t["current_row"]
            if t["row_has_th"] and t["header_row"] is None:
                t["header_row"] = row
            else:
                t["rows"].append(row)
            t["current_row"] = None

        rows: list[list[str]] = t["rows"]
        header_row: list[str] | None = t["header_row"]

        if header_row is None:
            if not rows:
                return  # entirely empty table — drop
            header_row = rows[0]
            rows = rows[1:]

        width = max([len(header_row)] + [len(r) for r in rows] + [0])
        if width == 0:
            return

        headers = list(header_row) + [""] * (width - len(header_row))
        norm_rows = [list(r) + [""] * (width - len(r)) for r in rows]
        self.blocks.append({"type": "table", "headers": headers, "rows": norm_rows})

    # ----- list --------------------------------------------------------------

    def _handle_list_starttag(self, tag: str) -> None:
        l = self._list
        assert l is not None
        if tag == "li":
            l["item_parts"] = []
        # Nested ul/ol/table/pre inside an item are not opened as new contexts —
        # their tags pass through and their text flows into the current item.

    def _handle_list_endtag(self, tag: str) -> None:
        l = self._list
        assert l is not None
        if tag in {"ul", "ol"}:
            self._emit_list()
            return
        if tag == "li" and l["item_parts"] is not None:
            item = _normalize_text("".join(l["item_parts"]))
            if item:
                l["items"].append(item)
            l["item_parts"] = None

    def _emit_list(self) -> None:
        l = self._list
        self._list = None
        if l is None:
            return
        if l["item_parts"] is not None:
            item = _normalize_text("".join(l["item_parts"]))
            if item:
                l["items"].append(item)
        if l["items"]:
            self.blocks.append({"type": "list", "items": l["items"]})

    # ----- code --------------------------------------------------------------

    def _emit_code(self) -> None:
        c = self._code
        self._code = None
        if c is None:
            return
        text = "".join(c["parts"])
        # Preserve internal whitespace, trim only the outer newlines/spaces.
        text = text.strip("\n").rstrip()
        if text:
            self.blocks.append({"type": "code", "text": text})


def _normalize_text(text: str) -> str:
    text = unescape(text)
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r" *\n *", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def text_to_blocks(text: str | None) -> list[dict[str, Any]]:
    normalized = _normalize_text(text or "")
    if not normalized:
        return []
    return [{"type": "paragraph", "text": part.strip()} for part in re.split(r"\n\s*\n", normalized) if part.strip()]


def html_to_blocks(html: str | None, fallback_text: str | None = None) -> list[dict[str, Any]]:
    if not html:
        return text_to_blocks(fallback_text)
    parser = BlockHtmlParser()
    parser.feed(html)
    parser.close()
    return parser.blocks or text_to_blocks(fallback_text)


def _source_refs(question: dict[str, Any]) -> list[dict[str, Any]]:
    refs: list[dict[str, Any]] = []
    wiki_path = question.get("wikiPath")
    if wiki_path:
        refs.append({"kind": "wiki", "path": wiki_path, "slug": question.get("slug")})
    if question.get("questionSource"):
        refs.append({"kind": "source", "label": question["questionSource"]})
    if question.get("kaCode"):
        refs.append({"kind": "quiz-bank", "label": f"K/A {question['kaCode']}"})
    return refs


def convert_question(question: dict[str, Any]) -> dict[str, Any]:
    choices = []
    for choice in question.get("choices", []):
        choices.append(
            {
                "label": choice.get("label", ""),
                "blocks": html_to_blocks(choice.get("html"), choice.get("text")),
                "isCorrect": bool(choice.get("isCorrect", False)),
            }
        )

    return {
        "schemaVersion": SCHEMA_VERSION,
        "slug": question.get("slug", ""),
        "examYear": question.get("examYear"),
        "examType": question.get("examType", ""),
        "questionNumber": question.get("questionNumber"),
        "track": question.get("track"),
        "title": question.get("title", ""),
        "status": question.get("status", ""),
        "quizEligible": bool(question.get("quizEligible", False)),
        "requiresReference": bool(question.get("requiresReference", False)),
        "officialAnswerLabel": question.get("officialAnswerLabel", ""),
        "acceptedAnswerLabels": question.get("acceptedAnswerLabels", []),
        "stemBlocks": html_to_blocks(question.get("stemHtml"), question.get("stemText")),
        "choices": choices,
        "explanationBlocks": html_to_blocks(question.get("explanationHtml"), question.get("explanationText")),
        "topics": question.get("topics", []),
        "sourceRefs": _source_refs(question),
        "legacy": {
            key: question[key]
            for key in (
                "stemText",
                "stemHtml",
                "explanationText",
                "explanationHtml",
                "wikiPath",
                "kaCode",
                "kaImportance",
                "cognitiveLevel",
                "tierGroup",
                "questionSource",
                "auditStatus",
                "nonQuizReason",
                "isEdited",
                "isRedacted",
            )
            if key in question
        },
    }


def build_structured_quiz_bank(source_path: Path) -> dict[str, Any]:
    source = json.loads(source_path.read_text(encoding="utf-8"))
    return {
        "schemaVersion": SCHEMA_VERSION,
        "generatedFrom": str(source_path),
        "summary": source.get("summary", {}),
        "topics": source.get("topics", []),
        "questions": [convert_question(question) for question in source.get("questions", [])],
    }


def write_structured_quiz_bank(bank: dict[str, Any], out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(bank, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--in", dest="input_path", default="site/src/data/quiz-bank.json")
    parser.add_argument("--out", dest="output_path", default="site/src/data/quiz-bank-v2.json")
    args = parser.parse_args()

    bank = build_structured_quiz_bank(Path(args.input_path))
    write_structured_quiz_bank(bank, Path(args.output_path))


if __name__ == "__main__":
    main()
