"""Characterization tests for scripts/build_ka_catalog.py parsing functions.

These pin the current behavior of parse_number_name, derive_ka, vendor_codes,
and categorize (incl. the DELETED/MOVED vendor-recovery inputs: derive_ka's
no-parenthetical fallback plus vendor_codes on the merged name column).
"""
import importlib.util
import sys
import types
import unittest
from pathlib import Path

# The parsing functions under test don't touch openpyxl (only main() does);
# stub it so the module imports in environments without the xlsx dependency.
try:
    import openpyxl  # noqa: F401
except ImportError:
    sys.modules["openpyxl"] = types.ModuleType("openpyxl")

spec = importlib.util.spec_from_file_location("build_ka_catalog", Path("scripts/build_ka_catalog.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class ParseNumberNameTest(unittest.TestCase):
    def t(self, name, number, rest):
        self.assertEqual(mod.parse_number_name(name), (number, rest))

    def test_system_row(self):
        self.t("003 (SF4P RCP) REACTOR COOLANT PUMP SYSTEM",
               "003", "(SF4P RCP) REACTOR COOLANT PUMP SYSTEM")

    def test_six_digit_ape_normalized(self):
        self.t("000022 (APE 22) Loss of Reactor Coolant Pump",
               "022", "(APE 22) Loss of Reactor Coolant Pump")

    def test_vendor_only_name_has_no_number(self):
        self.t("(BW A01) Plant Runback", "", "(BW A01) Plant Runback")

    def test_generic_group(self):
        self.t("G2.1 CONDUCT OF OPERATIONS", "G2.1", "CONDUCT OF OPERATIONS")

    def test_none_and_empty(self):
        self.t(None, "", "")
        self.t("", "", "")

    def test_two_digit_number_not_matched(self):
        # The number must be 3-6 digits; shorter prefixes stay in the name.
        self.t("22 TOO-SHORT NUMBER", "", "22 TOO-SHORT NUMBER")

    def test_surrounding_whitespace_stripped(self):
        self.t("  045  Motor-Driven Pump  ", "045", "Motor-Driven Pump")


class DeriveKaTest(unittest.TestCase):
    def t(self, name_number, ka_no, statement, sys_num, ka_full):
        self.assertEqual(mod.derive_ka(name_number, ka_no, statement), (sys_num, ka_full))

    # -- statement parenthetical wins ------------------------------------------
    def test_ape_parenthetical(self):
        self.t("022", "AA1.04", "(022AA1.04) Ability to operate...", "022", "022 AA1.04")

    def test_vendor_parenthetical_recovers_missing_name_number(self):
        self.t("", "AA1.04", "(BA01AA1.04) Ability to operate...", "BA01", "BA01 AA1.04")

    def test_system_parenthetical(self):
        self.t("003", "K1.01", "(003K1.01) Knowledge...", "003", "003 K1.01")

    def test_epe_parenthetical(self):
        self.t("007", "EA1.02", "(007EA1.02) Ability...", "007", "007 EA1.02")

    def test_generic_parenthetical_returns_code(self):
        self.t("G2.1", "2.1.1", "(G2.1.1) Knowledge of conduct of operations.",
               "G2.1", "G2.1.1")

    def test_ka_tail_with_letter_suffix(self):
        self.t("076", "K4.01a", "(076K4.01a) statement with letter suffix",
               "076", "076 K4.01a")

    def test_parenthetical_without_ka_tail_falls_through(self):
        self.t("012", "A2.03", "(see note) no ka tail here", "012", "012 A2.03")

    # -- fallback for DELETED / MOVED / blank statements ------------------------
    def test_deleted_falls_back_to_name_number(self):
        self.t("022", "AK1.01", "DELETED", "022", "022 AK1.01")

    def test_deleted_without_name_number_keys_by_bare_ka(self):
        self.t("", "EA2.02", "DELETED", "", "EA2.02")

    def test_moved_falls_back_to_name_number(self):
        self.t("040", "EA2.01", "MOVED TO WE12", "040", "040 EA2.01")

    def test_generic_fallback_uses_bare_ka_no(self):
        self.t("G2.1", "2.1.99", "", "G2.1", "2.1.99")


class VendorCodesTest(unittest.TestCase):
    def t(self, name, codes):
        self.assertEqual(mod.vendor_codes(name), codes)

    def test_merged_bw_w(self):    self.t("(BW E08; W E03) LOCA Cooldown", ["BE08", "WE03"])
    def test_single_bw_ape(self):  self.t("(BW A01) Plant Runback", ["BA01"])
    def test_merged_ce_w(self):    self.t("(CE A11; W A05) Loss of something", ["CA11", "WA05"])
    def test_no_vendor_tag(self):  self.t("REACTOR COOLANT PUMP SYSTEM", [])
    def test_empty(self):          self.t("", [])
    def test_none(self):           self.t(None, [])


class CategorizeTest(unittest.TestCase):
    def t(self, ka_no, category):
        self.assertEqual(mod.categorize(ka_no), category)

    def test_epe_ea(self):      self.t("EA1.02", "epe")
    def test_epe_ek(self):      self.t("EK2.2", "epe")
    def test_ape_aa(self):      self.t("AA1.04", "ape")
    def test_ape_ak(self):      self.t("AK3.01", "ape")
    def test_generic(self):     self.t("G2.1.1", "generic")
    def test_system_k(self):    self.t("K4.01", "system")
    def test_system_a(self):    self.t("A2.03", "system")
    def test_bare_generic_is_other(self): self.t("2.1.1", "other")
    def test_case_insensitive(self):      self.t("k4.01", "system")
    def test_whitespace_stripped(self):   self.t(" ea1.02 ", "epe")
    def test_unknown_is_other(self):      self.t("X9.9", "other")


if __name__ == "__main__":
    unittest.main()
