# Gaps — excore-nis (catalog system 015)

K/A topics not answered by UFSAR §7.2.1.2 / §7.2.3 / §7.7, TS 3/4.3, system descriptions, or existing exam callouts. Recorded per the ingestion guide; never fabricated.

- 015 A3.05 — Recognition of audio output (SR audible count rate) expected for a given plant condition — checked UFSAR §7.2.1.2 (startup-rate/count-rate provided at control board) and §7.2.1.10; the qualitative audible-count-rate behavior is captured in the Control-Room Operation section and Exam — 2018 Q31, but no UFSAR-sourced audio-tone-vs-power table exists
- 015 K2.01 — Electrical power supplies to the individual NIS channels (which 115V Vital Instrument Bus feeds which SR/IR/PR channel) — UFSAR §7.2 gives only the four-protection-set / split-bus concept; the specific channel-to-VIB mapping is sourced only from exam callouts (2012 Q13: 1D VIB → PRNI CH IV; 2023 Q11) and AB.115 procedures, not the UFSAR
- 015 K4.04 — Slow response time of a self-powered nuclear detector — Salem excore NIS uses ion chambers/proportional counters, not self-powered detectors; no UFSAR value for self-powered-detector response time (topic appears non-applicable to the excore design)
- 015 K5.02 / K6.02 — Discriminator / compensation circuit operation and failure modes — UFSAR §7.2 does not describe SR pulse-discriminator or IR gamma-compensation circuit internals; covered qualitatively only in exam callouts (2012 Q43 over/under-compensated IR)
- 015 K5.20 — Maximum disagreement allowed between channels — no NIS channel-deviation alarm setpoint found in UFSAR §7.2/§7.7 or TS 3/4.3; the rod-deviation comparator (§7.7.2.2.2) is a separate function
- 015 K6.05 — Audio indication deaf spots in control room and containment (operating experience) — no UFSAR or TS source; not addressed in available documents
- 015 K6.06 — Scaler timers — no UFSAR or TS source for SR scaler-timer behavior
- 015 K6.10 — T-cold RTD effect on NIS — the RTD/Tavg control description is in UFSAR §7.2.3.2, but its specific interaction with the OT/OP ΔT nuclear-flux feedback as an NIS malfunction topic is not separately quantified
