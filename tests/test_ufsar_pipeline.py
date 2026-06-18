import unittest
import importlib.util
from pathlib import Path

def _load(name, path):
    spec = importlib.util.spec_from_file_location(name, Path(path))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

split = _load("split_ufsar", "scripts/split_ufsar.py")


class ChapterRangesTest(unittest.TestCase):
    def test_ranges_use_next_start_as_end(self):
        bm = [("Chapter 1", 21), ("Chapter 2", 46), ("Chapter 3", 227)]
        self.assertEqual(
            split.chapter_ranges(bm, total_pages=300),
            [("Chapter 1", 21, 46), ("Chapter 2", 46, 227), ("Chapter 3", 227, 300)],
        )

    def test_single_bookmark_runs_to_end(self):
        self.assertEqual(split.chapter_ranges([("Chapter 9", 1585)], 1700),
                         [("Chapter 9", 1585, 1700)])

sysmap = _load("build_system_map", "scripts/build_system_map.py")


class MatchCatalogSystemTest(unittest.TestCase):
    CATALOG_NAMES = {
        "008": "(SF8 CCW) COMPONENT COOLING WATER SYSTEM",
        "076": "(SF4S SW) SERVICE WATER SYSTEM",
        "002": "(SF2; SF4P RCS) REACTOR COOLANT SYSTEM",
    }

    def m(self, title, aliases):
        return sysmap.match_catalog_system(title, aliases, self.CATALOG_NAMES)

    def test_matches_ccw(self):
        self.assertEqual(self.m("CCW", ["component cooling water"]), "008")

    def test_matches_service_water(self):
        self.assertEqual(self.m("Service Water", ["SW", "service water system"]), "076")

    def test_no_catalog_system_for_chill_water(self):
        self.assertIsNone(self.m("Chill Water", ["chilled water"]))


class FrontMatterTest(unittest.TestCase):
    def test_strips_title_and_aliases_excluding_dashes(self):
        text = (
            "---\n"
            'title: "Service Water"\n'
            "aliases:\n"
            "  - SW\n"
            "  - service water system\n"
            "---\n\n"
            "# Service Water\n"
        )
        title, aliases = sysmap.front_matter(text)
        self.assertEqual(title, "Service Water")
        self.assertEqual(aliases, ["SW", "service water system"])


kaidx = _load("build_ka_index", "scripts/build_ka_index.py")


class SystemTopicTest(unittest.TestCase):
    def t(self, stmt):
        return kaidx.system_topic(stmt)

    def test_topic_after_last_cfr_colon(self):
        self.assertEqual(
            self.t("(008K2.02) Knowledge of electrical power supplies to the following "
                   "(CFR: 41.7): (SF8 CCW) COMPONENT COOLING WATER SYSTEM CCW pumps"),
            "(SF8 CCW) COMPONENT COOLING WATER SYSTEM CCW pumps",
        )

    def test_topic_sentence_form(self):
        self.assertEqual(
            self.t("(008A3.01) Ability to monitor automatic features of the (SF8 CCW) "
                   "COMPONENT COOLING WATER SYSTEM, including (CFR: 41.7 / 45.5): "
                   "Setpoints for normal operations, warnings, and trips that are applicable to the CCWS"),
            "Setpoints for normal operations, warnings, and trips that are applicable to the CCWS",
        )

    def test_group_of_ka_no(self):
        self.assertEqual(kaidx.group_of("K2.02"), "K2")
        self.assertEqual(kaidx.group_of("A3.01"), "A3")
