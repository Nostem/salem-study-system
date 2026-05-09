---
title: "2016 Q96 — Tech Spec Action Times Requiring Hot Standby by 1900"
category: exams
status: draft
aliases:
  - 2016 Q96
  - 2016-Q96
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q96 — Tech Spec Action Times Requiring Hot Standby by 1900</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001G2.2.22 2.2.22 (4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power, BOL.<br>
- 2A EDG is inoperable for maintenance and won't be available for 24 hours.<br>
- The current time is 1200.<br><br>
Which of the following would require the Unit to be in Hot Standby by 1900?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2B EDG is declared inoperable due to an oil leak and Maintenance reports 2 hours later that it will be at least 12 hours to repair.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> A slow nitrogen leak causes 21 ECCS Accumulator pressure to lower to 595 psig, and initial attempts to raise nitrogen pressure are unsuccessful.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The containment 100' elevation airlock air leakage test is UNSAT IAW S2.OP-ST.CAN-0004, CONTAINMENT AIR LOCK LOCAL LEAK RATE TEST.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The CRS is informed that a faulty test device was used during the recent refueling outage to test and adjust the lift setpoint of all PZR Code Safety Valves, and that actual lift pressure for ALL 3 valves is 2735 psig.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.43(2,5) Only one PZR Code safety can be inop in MODES 1-3, and this is 3.0.3. 2 EDGs inoperable in MODES 1-4 is 2 hours to restore, then 6 to HSB. Accumulator has 24 hours to restore. Airlock has 24 hour action time.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> 2 EDGs inoperable in MODES 1-4 is 2 hours to restore, then 6 to HSB.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Accumulator has 24 hours to restore.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Airlock has 24 hour action time.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Specs (3/4 8-1, 8-2, 3/4/4-6, 3/4/5-1, 3/4 6) | LO: TECHSPE015 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[ECCS]], [[Containment]], [[Pressurizer]]
- Related tech specs: [[TS 3/4.8 — Electrical]], [[TS 3/4.5 — ECCS]], [[TS 3/4.6 — Containment]], [[TS 3/4.4 — Reactor Coolant System]], [[TS 3/4.0 — Applicability]]
- Related procedures: [[S2.OP-ST.CAN-0004 — Containment Air Lock Local Leak Rate Test]]
- Related exam: [[2016 NRC Written Exam]]
