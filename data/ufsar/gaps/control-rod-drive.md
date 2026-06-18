# Gaps — control-rod-drive (catalog system 001)

UFSAR §4.2.3 (Reactivity Control System / CRDM) is a *mechanical-design* section. It covers the
RCCA, CRDM magnetic-jack mechanism, stepping sequence, trip/drop time, materials, and reactivity-
control component design — all now in the article. The large K/A-index set for system 001 is
dominated by rod-control *electronics*, reactor-physics, and instrumentation topics that live in
other UFSAR chapters (Ch 7.7 Rod Control electronics, Ch 4.3 Nuclear Design, NIS/RPS in Ch 7) and
in procedures/curve book, not in §4.2.3. The following topics were checked against §4.2.3, the TS
3/4.1.3 article, and the existing exam/JPM/scenario callouts; where no §4.2.3 source exists the
gap and its correct home chapter are noted.

## Rod-control electronics / logic (UFSAR §7.7, not §4.2.3)
- 001 A3.09 / 001 A4.16 — Rod speed and direction (commanded speeds AUTO 8–72 SPM, SB 64 SPM, CB 48 SPM) — §4.2.3 gives only the magnetic-jack mechanical ceiling (72 SPM / 45 in/min); the selector-switch speed program is Ch 7.7 / rod-control electronics; covered qualitatively in existing speed callouts (2018 Q30, 2019 Q29, 2012 Q28), not from §4.2.3
- 001 A3.10 / 001 K4.24 — Control bank sequence and overlap — Ch 7.7 rod control / Ch 4.3.2.6; not in §4.2.3
- 001 A3.11 / 001 K4.26 — Reactor cutback/setback — Ch 7.7 rod control electronics; not in §4.2.3
- 001 K2.01–K2.04, K2.09 — Electrical power supplies (M/G sets, reactor trip breakers, logic circuits, lift coil, CRDM fans) — §4.2.3 does not address power supplies; covered by existing exam callouts (2020 Q56, 2016 Q3, 2018 Sim-a); source is Ch 7.7 / Ch 8 electrical, not §4.2.3
- 001 K4.02 / K4.03 / K4.07 / K4.15 / K4.17 / K4.23 / K4.25 — Mode select, rod-control logic/circuitry, stops & permissives, latching controls, bottomed-rod override, rod motion inhibit, hold bus — Ch 7.7 rod control electronics; not in §4.2.3 (some covered by existing rod-stop/interlock callouts)
- 001 K4.06 / K4.11 / K6.03 — Reactor trip breakers, first-out panel, RTB reset — Ch 7 RPS/SSPS; not in §4.2.3
- 001 K4.04 / K4.01 / K6.13 / K1.12 — RPI/IRPI, LVDT vs reed switches, RPIS — §4.2.3 states only that the RPI uses 42 discrete coils; detailed RPI electronics (LVDT/reed-switch) are Ch 7.7; not resolvable from §4.2.3
- 001 K5.03 / K5.60 / K5.61 / K5.65 / K5.70 / K5.71 / K6.06 — M/G set operation, theory, paralleling, power mismatch, cross-tie breaker — §4.2.3 does not cover the rod-drive M/G sets; covered by existing JPM callouts (2019 IP-j, 2023 IP-j, 2020 Q56); source is Ch 7.7 / Ch 8, not §4.2.3
- 001 K6.08 / K6.11 — High-flux-at-shutdown alarm position switch; CRDS fault detection / trouble alarms / reset — Ch 7.7 / ARP; not in §4.2.3
- 001 K2.09 / K6.19 / A1.10 / A4.01 — CRDM cooling controls/indication and CRD vent fans — §4.2.3 states only the design basis (coils require forced-air cooling to maintain 392°F); the fan controls/indications are operating-procedure / Ch 9 HVAC scope; covered by existing CRD Vent Fan callouts

## Reactor-physics / nuclear-design topics (UFSAR §4.3, not §4.2.3)
- 001 A1.13–A1.22, A2.03–A2.25 (subset), K5.01–K5.110 (rod worth curves, insertion limits, AFD, QPTR, MTC/ITC, xenon/samarium, boron worth, 1/m, ECP, power defect) — these are core-physics topics in UFSAR §4.3 (Nuclear Design) and the curve book; partly covered by existing reactivity-management callouts (2014 Q28, 2015 Q9, 2018 Q41) and TS articles; out of scope for §4.2.3 mechanical design
- 001 A2.13 — ATWS — UFSAR §4.3.1.7 / Ch 15; not §4.2.3 (partly in 2015 Q9 callout)
- 001 K5.74 — Reactor may not go critical on shutdown-group withdrawal — §4.3 / startup procedure; not §4.2.3

## Sensors / interconnections not in §4.2.3
- 001 K1.05 / K3.04 / K6.16 / A1.18 / A2.22 — NIS — Ch 7.5/7.7; not §4.2.3
- 001 K1.10 / K3.05 / K6.18 / A2.23 — RPS — Ch 7.2; not §4.2.3
- 001 K1.02 / K3.01 — CVCS interconnection — Ch 9.3; not §4.2.3
- 001 K1.07 — PRT / quench tank — Ch 5; not §4.2.3
- 001 K5.101 — Sensors feeding the CRDS — Ch 7.7; not §4.2.3

## Genuinely not sourced
- 001 A2.05 / 001 K5.100 — Fractured split pins; control-rod configuration/construction material — §4.2.3 gives RCCA absorber material (Ag-In-Cd) and construction but not split-pin failure detail; split-pin (guide-tube support pin) cracking history is a Westinghouse service-bulletin / IE Notice topic, not in §4.2.3
- 001 K4.22 — Seismic considerations for the CRDM — §4.2.3.1.4 states a dynamic seismic analysis confirms ASME stress and trip capability (now in article); detailed seismic qualification numbers not in §4.2.3
