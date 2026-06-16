---
title: "2014 Q10 — PZR Pressure Channel Fails Low RCS Response"
category: exams
status: draft
aliases:
  - 2014 Q10
  - 2014-Q10
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q10 — PZR Pressure Channel Fails Low RCS Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">AK2.03 (RO 2.6 / SRO 2.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 60% power.<br>
- There is a power ascension in progress at a rate of 10%/hr.<br>
- PZR Pressure Channel III, PT-457 is selected for CONTROL.<br><br>
Which of the following describes RCS pressure response if PZR Pressure Channel III fails low with no operator action?<br><br>
RCS pressure will rise until...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> ONE FZR PORV opens.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> BOTH FZR PORV's open</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> the PZR Spray Valves open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> a FZR Code Safety Valve opens</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> The failure of the controlling PZR Pressure channel causes the Master Pressure Controller to sense a low pressure condition, and its output will go to zero. A 0% demand will cause all PZR heaters in auto to energize, and PZR Spray valves to shut. RCS pressure rises slowly but spray valves will not open because the MPC still sees a low pressure condition from the failed low PZR pressure channel. The PZR PORVs 2PR1 and 2PR2 are 2/2 coincidence required to open, from PZR pressure channels I/III and II/IV respectively. Since Channel III is failed low, 2PR1 will not open. 2PR2 will open when channels I and III sense 2335 psig — so only ONE PORV opens.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Both PORVs do not open — 2PR1 (2/2 from channels I/III) will not open because Channel III is failed low; only 2PR2 opens.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The PZR Spray valves will not open — the MPC still sees a low pressure condition from the failed-low channel, so spray demand stays at zero (spray valves shut).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> A PORV (2PR2) opens at 2335 psig and relieves pressure before a code safety valve setpoint is reached.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.PZR-0001 (Rev 18); RPS PZR Pressure and Level Control 221060 (Rev 7); PZR PORV Valves 231357 (Rev 15) | LO: ABPZR1E001 | Source: Facility Exam Bank — Editorially Modified (Q80493) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[RPS/SSPS]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related exam: [[2014 NRC Written Exam]]
