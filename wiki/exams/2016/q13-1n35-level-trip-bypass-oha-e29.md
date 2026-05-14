---
title: "2016 Q13 — OHA E-29 Annunciation During 1N35 IRNI Removal"
category: exams
status: verified
aliases:
  - 2016 Q13
  - 2016-Q13
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q13 — OHA E-29 Annunciation During 1N35 IRNI Removal</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000033 A1.02 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 1 is operating at 100% power when Intermediate Range Nuclear Instrument 1N35 fails high.<br>
- Operators are responding IAW S1.OP-AB.NIS-0001, Nuclear Instrumentation System Malfunction, and are removing the channel from service IAW S1.OP-SO.RPS-0001, Nuclear Instrumentation Channel Trip / Restoration.<br>
- With the PO in the rack area, OHA E-29, SR &amp; IR TRIP BYP, annunciates.<br><br>
Which of the following identifies the cause of this alarm?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1N35 Control Power fuses have been removed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1N35 Instrument Power fuses have been removed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 1N35 LEVEL TRIP switch has been placed in the bypass position.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> POWER MISMATCH BYPASS switch has been placed in BYPASS 1N35.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(7) C is correct because when placing the level trip bypass switch in the BYPASS position, the IR FLUX HI reactor trip and IR HI FLUX ROD WDRWL STOP are blocked, and OHA E-29 annunciates.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect but plausible since control power fuses are removed when removing a PR NI from service using the same procedure.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect but plausible as it is the next action to be performed after placing the Level Trip Bypass switch in Bypass.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because the IR does not have a power mismatch bypass switch, but the PRNI detectors do.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Nuclear Instrumentation Channel Trip / Restoration (S1.OP-SO.RPS-0001, p11, Rev 5) | LO: ABNIS1E001 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam: [[2016 NRC Written Exam]]
