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
    # Generic group notation: older exams abbreviate the four generic groups (2.1–2.4) as
    # G1.x–G4.x. Decode Gn.mm -> 2.n.mm (third component unpadded, matching the catalog).
    def test_generic_group_dot(self):    self.t("000009 G4.18", "G2.4.18")
    def test_generic_group_dot2(self):   self.t("012000G4.09", "G2.4.9")
    def test_generic_group_bareform(self): self.t("G4.09", "G2.4.9")
    def test_generic_group_glued(self):  self.t("194001G432", "G2.4.32")
    def test_generic_group_glued_pad(self): self.t("194001G404", "G2.4.4")
    def test_generic_group_glued_g1(self): self.t("194001G140", "G2.1.40")
    # Dual form whose left half carries the vendor code (00WE02K201 / EK2.1): keep the vendor
    # prefix from the left, the E-prefixed token from the right -> WE02 EK2.01.
    # Generic-knowledge tier (19xxxx) with a subject infix, e.g. '191001 CVS.K1.04' — keep the infix.
    def test_generic_knowledge_infix(self):  self.t("T2G1 191001 CVS.K1.04", "191001 CVS.K1.04")
    def test_generic_knowledge_infix2(self): self.t("T4 193009 TTL.K1.07", "193009 TTL.K1.07")
    def test_dual_form_vendor_left(self): self.t("00WE02K201 / EK2.1", "WE02 EK2.01")
    def test_dual_form_vendor_left2(self): self.t("00WE10A102 / EA1.2", "WE10 EA1.02")


class FirstTagTest(unittest.TestCase):
    def t(self, content, expected_ka):
        text = f'<span style="...;border-radius:3px;">{content}</span>'
        m, span_content, ka = mod.first_tag(text)
        self.assertIsNotNone(m)
        self.assertEqual(span_content, content)
        self.assertEqual(ka, expected_ka)

    def test_plain_written(self):   self.t("076000 K4.01 (3.7/3.7)", "076000 K4.01 (3.7/3.7)")
    def test_jpm_three_part(self):  self.t("Simulator | RO/SRO | 003 AA2.03 (3.6)", "003 AA2.03 (3.6)")
    def test_jpm_badge_alt_path(self): self.t("Admin | SRO | 2.1.25 (4.2) | Alternate Path", "2.1.25 (4.2)")
    def test_jpm_badge_time_crit(self): self.t("Admin | SRO | 2.4.44 (4.4) | Time-Critical", "2.4.44 (4.4)")
    def test_jpm_badge_generic_g(self): self.t("Admin | RO/SRO | G2.1.43 (4.1) | Alternate Path", "G2.1.43 (4.1)")


class ClassifyTest(unittest.TestCase):
    CAT = {
        "076 K4.01": {"statement": "(076K4.01) Knowledge...", "ro_imp": "2.5", "sro_imp": "2.9"},
        "045 K3.01": {"statement": "DELETED", "ro_imp": "0", "sro_imp": "0"},
        "039 A4.04": {"statement": "(039A4.04) some text", "ro_imp": "0", "sro_imp": "0"},
    }

    def c(self, body):
        return mod.classify(body, self.CAT)

    def test_active_uses_catalog_rating(self):
        self.assertEqual(self.c("076000 K4.01 (3.7/3.7)"),
                         ("RESOLVED", "076 K4.01", "076 K4.01 (RO 2.5 / SRO 2.9)"))

    def test_deleted_keeps_exam_importance(self):
        # DELETED catalog entry: canonicalize the number, keep the exam's own rating verbatim.
        self.assertEqual(self.c("APE 045 MTG-K3.01 (2.7/2.7)"),
                         ("DELETED_IN_REV3", "045 K3.01", "045 K3.01 (2.7/2.7)"))

    def test_zero_importance_treated_as_deleted(self):
        self.assertEqual(self.c("039 A4.04 (3.8)"),
                         ("DELETED_IN_REV3", "039 A4.04", "039 A4.04 (3.8)"))

    def test_absent_flagged(self):
        self.assertEqual(self.c("999 K9.99 (3.0)"), ("NUMBER_NOT_IN_CATALOG", "999 K9.99", None))

    def test_unparseable(self):
        self.assertEqual(self.c("Alternate Path"), ("UNPARSEABLE", None, None))


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
