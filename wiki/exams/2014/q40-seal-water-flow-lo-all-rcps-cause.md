---
title: "2014 Q40 — SEAL WATER FLOW LO All 4 RCPs Cause"
category: exams
status: draft
aliases:
  - 2014 Q40
  - 2014-Q40
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q40 — SEAL WATER FLOW LO All 4 RCPs Cause</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">011000K6.06 (RO 2.5 / SRO 2.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- Console alarms SEAL WATER FLOW LO annunciate for ALL 4 RCPs.<br><br>
Which of the following failures has led to these alarms?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2CV71, CHG HDR PCV has failed shut.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> PZR level program setpoint has failed high.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2CV115, Seal Return Relief valve has lifted and failed to reseat.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Charging System Master Flow Controller demand has failed to 20%.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The Master flow controller demand is normally ~40%, so 20% demand would give ~1/2 normal charging flow. Normal charging flow is ~90 gpm. This matches the intent of the KA, as there is no indication of CV55 flow control valve position (which controls charging flow when a centrifugal charging pump is in service) other than open/shut/ or indeterminate. The Master Flow controller controls the PDP charging pump speed, and hence its flow, when its in service, and controls the charging FCV CV-55 when centrifugal pump in service.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The 2CV71 PCV is located on the charging line upstream of the tap to go to seal injection. Its closure would cause full pressure/flow to go to the RCP seals.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> PZR level program signal failing high would cause charging flow to remain the same (program is clipped at ~100% programmed level) or go up slightly, and also seal injection flow.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The CV115 lifting on the return line should have no effect, or if any, it would cause seal inj flow to rise if it lowered seal return header pressure enough.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-SO.CVC-0002 (Rev 40), Charging pump operation | LO: PZRP&amp;LE008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer Level & Press Control]], [[RCPs]]
- Related procedures: [[S2.OP-SO.CVC-0002 — Charging Pump Operation]]
- Related exam: [[2014 NRC Written Exam]]
