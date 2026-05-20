import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WIKI = ROOT / "wiki" / "tech-specs"
INDEX = ROOT / "site" / "src" / "pages" / "index.astro"
PDF_DIR = ROOT / "site" / "public" / "ts-pdfs"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def test_tech_spec_style_guide_exists_for_future_audits():
    guide = read(WIKI / "TECH_SPEC_STYLE_GUIDE.md")
    for term in [
        "Required article structure",
        "Source authority",
        "Setpoint direction rules",
        "Review checklist",
        "LCO, Applicability, Actions, and Basis",
    ]:
        assert term in guide


def test_homepage_links_split_ts_3_7_7_through_3_7_13_pdfs():
    index = read(INDEX)

    expected_labels = {
        "ts-3-4-7-7": "TS 3/4.7.7 Auxiliary Building Ventilation",
        "ts-3-4-7-8": "TS 3/4.7.8 Sealed Source Contamination",
        "ts-3-4-7-9": "TS 3/4.7.9 Snubbers",
        "ts-3-4-7-10": "TS 3/4.7.10 Chilled Water",
        "ts-3-4-7-11": "TS 3/4.7.11 Fuel Storage Pool Boron",
        "ts-3-4-7-12": "TS 3/4.7.12",
        "ts-3-4-7-13": "TS 3/4.7.13",
    }

    for slug, label in expected_labels.items():
        assert f"'{slug}'" in index
        assert label in index
        assert (PDF_DIR / f"{slug}.pdf").exists(), f"missing split PDF {slug}.pdf"

    assert "'ts-3-4-7-7': 'TS 3/4.7.7 Snubbers'" not in index


def test_ts_3_3_high_trip_directions_are_not_reversed():
    text = read(WIKI / "ts-3-4-3-instrumentation.md")

    assert not re.search(r"Pressurizer Water Level\s*[—-]\s*High\s*\|\s*≤", text)
    assert not re.search(r"Pressurizer Water Level\s*[—-]\s*High\s*\|\s*&lt;=", text)
    assert re.search(r"Pressurizer Water Level\s*[—-]\s*High.*(≥|&gt;=|>=).*92%", text)
    assert "trip occurs at or above 92%" in text.lower()

    assert not re.search(r"Containment Pressure\s*[—-]\s*High-High\s*\|\s*≤", text)
    assert re.search(r"Containment Pressure\s*[—-]\s*High-High.*(≥|&gt;=|>=).*15\.0 psig", text)


def test_ts_3_1_2_6_has_expanded_63f_figure_basis():
    text = read(WIKI / "ts-3-4-1-2-boration-systems.md")
    section_match = re.search(r"## .*3\.1\.2\.6.*?(?=\n---\n|\n## |\Z)", text, re.S)
    assert section_match, "missing dedicated LCO 3.1.2.6 section"
    section = section_match.group(0)

    required_terms = [
        "63°F",
        "Figure 3.1-2",
        "5°F margin",
        "precipitate",
        "RWST",
        "Specification 3.5.5",
        "Applicability",
        "Actions",
        "Basis",
    ]
    for term in required_terms:
        assert term in section, f"missing {term} in LCO 3.1.2.6 section"


def test_ts_3_7_article_covers_3_7_7_through_3_7_13_lco_actions_basis():
    text = read(WIKI / "ts-3-4-7-plant-systems.md")
    sections = {
        "3/4.7.7": "Auxiliary Building Ventilation",
        "3/4.7.8": "Sealed Source Contamination",
        "3/4.7.9": "Snubbers",
        "3/4.7.10": "Chilled Water",
        "3/4.7.11": "Fuel Storage Pool Boron",
        "3/4.7.12": None,
        "3/4.7.13": None,
    }
    for lco, title in sections.items():
        pattern = rf"## {re.escape(lco)}.*?(?=\n---\n|\n## 3/4\.7|\Z)"
        match = re.search(pattern, text, re.S)
        assert match, f"missing section {lco}"
        section = match.group(0)
        if title:
            assert title in section
        for term in ["LCO", "Applicability", "Actions", "Basis"]:
            assert term in section, f"missing {term} in {lco}"
