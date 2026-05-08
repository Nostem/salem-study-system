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


class BlockHtmlParser(HTMLParser):
    """Small, conservative HTML-to-block parser for existing quiz content.

    It intentionally extracts only text paragraphs and images for the first v2
    milestone. Other HTML is flattened to paragraph text until we add audited
    table/list support.
    """

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.blocks: list[dict[str, Any]] = []
        self._text_parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        attr_map = {name.lower(): value or "" for name, value in attrs}
        if tag == "img":
            self._flush_text()
            self.blocks.append(
                {
                    "type": "image",
                    "src": attr_map.get("src", ""),
                    "alt": attr_map.get("alt", ""),
                }
            )
        elif tag == "br":
            self._text_parts.append("\n")
        elif tag in {"p", "div", "li", "tr", "h1", "h2", "h3", "h4"}:
            self._text_parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() in {"p", "div", "li", "tr", "h1", "h2", "h3", "h4"}:
            self._text_parts.append("\n")

    def handle_data(self, data: str) -> None:
        self._text_parts.append(data)

    def close(self) -> None:
        super().close()
        self._flush_text()

    def _flush_text(self) -> None:
        text = _normalize_text("".join(self._text_parts))
        self._text_parts = []
        if text:
            self.blocks.append({"type": "paragraph", "text": text})


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
