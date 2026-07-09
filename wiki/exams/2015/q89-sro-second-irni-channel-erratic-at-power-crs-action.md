---
title: "2015 Q89 — CRS Action for a Second IRNI Channel Failing Erratically at Power (SRO)"
category: exams
status: outdated
reference: no
aliases:
  - 2015 Q89
  - 2015-Q89
  - 2015 SRO 14
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q89 (SRO 14) — CRS Action for a Second IRNI Channel Failing Erratically at Power</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.1.7 (RO 4.4 / SRO 4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
&bull; Unit 2 is operating at 100% power.<br>
&bull; Intermediate Range Nuclear Instrument (IRNI) Channel I (2N35) failed yesterday.<br>
&bull; The CRS entered TSAS 3.3.1.1, action 3, and the crew removed the channel from service IAW S2.OP-SO.RPS-0001, Nuclear Instrumentation Channel Trip / Restoration.<br>
&bull; Subsequently, the RO reports IRNI Channel II (2N36) just started indicating erratically, oscillating between 1x10-11 amps and 1x10-5 amps.<br>
&bull; The reactor remains at power.<br><br>
The CRS shall...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Enter S2.OP-AB.NIS-0001, Nuclear Instrumentation Malfunction. Remove IRNI Channel 2N36 from service. Power operation may continue with no restrictions.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Enter S2.OP-AB.NIS-0001, Nuclear Instrumentation Malfunction. Remove IRNI Channel 2N36 from service. Initiate actions within one hour to place the unit in Hot Standby within the next 6 hours.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Direct the RO to trip the reactor based on an ATWT. BOTH Source Range Nuclear Instrument Channels must be manually energized in EOP-TRIP-2, Reactor Trip Response, if the Rx trip is successful, or 2-EOP-FRSM-1, Response to Nuclear Power Generation, if the reactor does not trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Direct the RO to trip the reactor based on an ATWT. ONLY Source Range Nuclear Instrumentation Channel II (2N32) will automatically energize. SRNI Channel I (2N31) must be manually energized in EOP-TRIP-2, Reactor Trip Response, if the Rx trip is successful, or 2-EOP-FRSM-1, Response to Nuclear Power Generation, if the reactor does not trip.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> <em>Explanation of Answers (verbatim from source):</em> 55.43.b(5) This question is SRO level based on having to asses the conditions given in stem and determine both what procedure will be entered and the action(s) required in that procedure, as well as the TSAS which is applicable and actions required. Loss of a single IRNI channel is specifically excluded from entry into LCO 3.0.3 even though the minimum operable channel requiremnt is 2. Loss of the second channel would require entry into TS 3.0.3, which requires actions initiated within one hour to place unit in Hot Standby in next 6 hours. Detailed system knowledge is required to know that with the one IRNI channel in the tripped condition, the other channel going below 7x10-11 Amps would automatically energize Source Range NI's if not for the fact that the P-10 interlock would prevent Source Range instruments from energizing &gt;10% power.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to evaluate plant performance and make operational judgments based on operating characteristics, reactor behavior, and instrument interpretation.<br><em>Note: the 2015 NRC worksheet provides a single "Explanation of Answers" (above); it does not contain separate per-distractor justifications, so none are fabricated here.</em></div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Nuclear Instrumentation Malfunction (S2.OP-AB.NIS-0001, Rev 7); Nuclear Instrumentation Lesson Plan (NOS05EXCORE-09, Rev 9); Salem Tech Specs (3.3.1.1) | LO: ABNIS1E003, EXCOREE007 | Source: New | Cognitive: Application | Exam Level: SRO</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]]
- Related tech specs: [[TS 3.3 — Instrumentation]]
- Related exam: [[2015 NRC Written Exam]]
