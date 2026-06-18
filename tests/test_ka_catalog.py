import csv
import json
import unittest
from pathlib import Path

JSON_PATH = Path("data/ka-catalog/pwr-ka-catalog.json")
CSV_PATH = Path("data/ka-catalog/pwr-ka-catalog.csv")


class KACatalogTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
        with CSV_PATH.open(encoding="utf-8") as fh:
            cls.rows = list(csv.DictReader(fh))

    def test_nonempty(self):
        self.assertGreater(len(self.data), 5000)
        self.assertGreaterEqual(len(self.rows), len(self.data))

    def test_categories_present(self):
        cats = {v["category"] for v in self.data.values()}
        self.assertTrue({"system", "ape", "epe", "generic"} <= cats)

    def test_known_generic(self):
        e = self.data["G2.1.1"]
        self.assertEqual(e["category"], "generic")
        self.assertIn("CONDUCT OF OPERATIONS", e["statement"])
        self.assertAlmostEqual(float(e["ro_imp"]), 3.8)
        self.assertAlmostEqual(float(e["sro_imp"]), 4.2)

    def test_known_system(self):
        e = self.data["003 A1.01"]
        self.assertEqual(e["category"], "system")
        self.assertIn("RCP vibration", e["statement"])

    def test_csv_columns(self):
        self.assertEqual(
            list(self.rows[0].keys()),
            ["ka_full", "category", "system_number", "system_name",
             "ka_no", "statement", "ro_imp", "sro_imp", "status"],
        )


if __name__ == "__main__":
    unittest.main()
