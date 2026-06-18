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
