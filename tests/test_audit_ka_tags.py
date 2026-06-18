import unittest
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location("audit_ka_tags", Path("scripts/audit_ka_tags.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class StripImportanceTest(unittest.TestCase):
    def t(self, body, name, imp):
        n, i = mod.strip_importance(body)
        self.assertEqual(n, name)
        self.assertEqual(i, imp)

    def test_pair(self):        self.t("076 K4.01 (3.7/3.7)", "076 K4.01", "3.7/3.7")
    def test_labeled_pair(self):self.t("000001A203 / AA2.03 (RO 4.5 / SRO 4.8)", "000001A203 / AA2.03", "RO 4.5 / SRO 4.8")
    def test_sro_only(self):    self.t("000003A201 (SRO 3.9)", "000003A201", "SRO 3.9")
    def test_single(self):      self.t("003 AA2.03 (3.6)", "003 AA2.03", "3.6")
    def test_trailing_dash(self):self.t("000003 2.4.9 (3.8/4.2) — SRO", "000003 2.4.9", "3.8/4.2")
    def test_trailing_label(self):self.t("076 A2.01 (3.7) SRO", "076 A2.01", "3.7")


class NormalizeKaTest(unittest.TestCase):
    def t(self, raw, key):
        self.assertEqual(mod.normalize_ka(raw), key)

    def test_six_digit_system(self):  self.t("076000 K4.01", "076 K4.01")
    def test_six_digit_ape(self):     self.t("000040 AK1.01", "040 AK1.01")
    def test_glued_number(self):      self.t("005000A2.02", "005 A2.02")
    def test_packed_ka(self):         self.t("000001A203", "001 A2.03")
    def test_dual_form(self):         self.t("000007K106 / EK1.06", "007 EK1.06")
    def test_dual_form_packed(self):  self.t("000001A203 / AA2.03", "001 AA2.03")
    def test_ape_prefix_glued(self):  self.t("APE15 AK2.08", "015 AK2.08")
    def test_epe_prefix_spaced(self): self.t("EPE 55 EA2.04", "055 EA2.04")
    def test_vendor(self):            self.t("00WE08 EA1.05", "WE08 EA1.05")
    def test_generic_plain(self):     self.t("G2.1.43", "G2.1.43")
    def test_generic_bare(self):      self.t("045 2.1.23", "G2.1.23")
    def test_generic_glued(self):     self.t("002000G2.1.20", "G2.1.20")
    def test_pad_decimal(self):       self.t("00WE11 EA2.1", "WE11 EA2.01")
    def test_tier_group_prefix(self): self.t("T2G2 017 K6.01", "017 K6.01")
    def test_embedded_system_name(self): self.t("012 RPS-A3.03", "012 A3.03")
    def test_glued_vendor(self):      self.t("00WE12EA2.1", "WE12 EA2.01")
    def test_dual_ape_colon_name(self): self.t("APE: 015/017 RCP Malfunctions-AK1.04", "015 AK1.04")
    def test_bare_ka_unparseable(self): self.assertIsNone(mod.normalize_ka("AK2.08"))
    def test_malformed_generic(self):   self.assertIsNone(mod.normalize_ka("G4.09"))


class CanonicalRatingTest(unittest.TestCase):
    def test_both_numeric(self):
        self.assertEqual(mod.canonical_rating({"ro_imp": "3.7", "sro_imp": "3.7"}), "(RO 3.7 / SRO 3.7)")
    def test_integer(self):
        self.assertEqual(mod.canonical_rating({"ro_imp": "4", "sro_imp": "4.2"}), "(RO 4 / SRO 4.2)")
    def test_sro_only(self):
        self.assertEqual(mod.canonical_rating({"ro_imp": "N/A", "sro_imp": "4.6"}), "(SRO 4.6)")
    def test_ro_only(self):
        self.assertEqual(mod.canonical_rating({"ro_imp": "3.1", "sro_imp": "N/A"}), "(RO 3.1)")


if __name__ == "__main__":
    unittest.main()
