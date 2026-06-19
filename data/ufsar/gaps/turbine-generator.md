# Gaps — turbine-generator (catalog 045)

UFSAR §10.2 is a short system writeup (10.2-1 through 10.2-10). It gives turbine/generator
ratings, the EHC architecture, the full turbine-trip list (incl. mechanical overspeed ~108%
of rated speed and EHC overspeed setpoint 108% or 110%), automatic load runback logic, the
hydrogen supply, and the Turbine Auxiliaries Cooling loads. Many catalog-045 K/A topics are
operating/electrical-distribution detail not carried in §10.2 and were not sourced elsewhere
during this pass:

- 045 K2.02 — Electrical power supplies to the MT/G lube oil pumps (ac aux pump bus, dc emergency pump bus) — checked UFSAR §10.2.2.2 (describes ac/dc pumps but not their power supply buses), TS, existing callouts; no sourced bus assignment found.
- 045 K2.03 — Power supply to the generator excitation (field) breaker — checked UFSAR §10.2.2.1/§10.2.2.4, existing callouts; the exciter field breaker is named (2012 Q52) but its power source is not sourced.
- 045 A1.07 / A1.10 — Specific MT/G lights, alarms, and turbine valve indicators (throttle/governor/control/stop/intercept) panel layout — checked UFSAR §10.2.2.5 (lists supervisory parameters, not the CR indicator/alarm set); OHA points appear only in exam callouts.
- 045 K4.13 — Overspeed protection numeric trip setpoints in rpm — UFSAR §10.2.2.4 gives % of rated speed (mechanical ~108%; EHC 108% or 110%) but the detailed setpoints were relocated to SGS-TRM TR3/4.3.4 (UFSAR §10.2.2.6), which is not in the ingested sources.
- 045 K4.19 / K5.11 — Turbine turning-gear low-speed rotation to prevent shaft "set" and turning-gear purpose — checked UFSAR §10.2.2.2 (mentions turning gear in lube-oil context only); no dedicated turning-gear description found.
- 045 K4.20 / K4.45 / A4.04 — Exhaust-hood spray quench setpoint and low-pressure steam dump to prevent overspeed — checked UFSAR §10.2.2 and §10.4.4; hood spray appears only in the 2015 Q93 callout (manually placed below 15% power), no sourced auto setpoint.
- 045 K4.31 / K5.07 / K5.22 — Autosynchronous system operation and synchroscope theory — checked UFSAR §10.2; sync detail appears only in the 2018 JPM Sim-e callout, not in the UFSAR.
- 045 K5.01 / K6.05 — Hydrogen explosive-mixture limits and hydrogen purity analyzer — checked UFSAR §10.2.6 (describes CO2 intermediate-gas changeover but no purity setpoint/analyzer detail); no sourced purity limit found.
- 045 K4.09 — Generator capability curve numeric power-factor / VAR / hydrogen-pressure limits — checked UFSAR §10.2.1 (cites A-5-500-EEE-1686 and 1232 MWe limit) and 2015 Q20 callout; the curve values themselves live in A-5-500-EEE-1686, not ingested.
</content>
