---
title: "2016 Q78 — ATWS at 4% Power Awaiting Mode 1 — CRS Response"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q78
  - 2016-Q78

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q78 — ATWS — EOP network applicability in Mode 2</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.2.44 (RO 4.2 / SRO 4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given the following conditions:</strong><br>
- Salem Unit 2 is operating at 4% power awaiting final approval to enter Mode 1.<br>
- Main steam dumps are in service maintaining Tavg at 548°F.<br>
- 21 SGFP is in service, 22 SGFP is latched and at idle speed.<br>
- All AFW pumps are secured and aligned for normal standby operation.<br>
<br>
Subsequently:<br>
- An automatic Rx trip signal is received, but the Rx does not trip.<br>
- All attempts to trip the Rx from the Control Room fail.<br>
<br>
Which of the following describes how the CRS should proceed?<br>
<br>
Initiate manual rod insertion……
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> then enter 2-EOP-FRSM-1, Response to Nuclear Power Generation, and start both MDAFW pumps.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> then enter 2-EOP-FRSM-1, Response to Nuclear Power Generation, verify feed flow >44E4 lbm/hr from SGFP's.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> then continue in 2-EOP-TRIP-1, Reactor Trip or Safety Injection, then TRIP-2, Reactor Trip Response, since FRPs are not in effect in MODE 2.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> then continue in 2-EOP-TRIP-1, Reactor Trip or Safety Injection, then TRIP-2, Reactor Trip Response, since reactor trip is confirmed with Rx power <5%.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.43.b(5) The EOP network (including FRPs) are in effect in Modes 1-3. Just because Rx power is initially <5% does not indicate a Rx trip confirmation, which also includes negative SUR and power lowering. FRSM doesn't check any feed flow, it specifically states AFW flow, so while Main Feed flow is still occurring, operators will still start both MDAFW pumps in FRSM-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> FRSM doesn't check any feed flow, it specifically states AFW flow, so while Main Feed flow is still occurring, operators will still start both MDAFW pumps in FRSM-1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The EOP network (including FRPs) are in effect in Modes 1-3.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Just because Rx power is initially <5% does not indicate a Rx trip confirmation, which also includes negative SUR and power lowering.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-TRIP-1 Reactor Trip or Safety Injection (rev 31), 2-EOP-FRSM-1 Response to Nuclear Power Generation (rev 30) | LO: FRSM00E001, TRP001E007 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[Feed & Condensate]], [[Excore NIs]], [[RPS/SSPS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam: [[2016 NRC Written Exam]]
