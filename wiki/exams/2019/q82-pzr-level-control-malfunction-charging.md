---
title: "2019 Q82 — PZR Level Control Malfunction Charging"
category: exams
status: draft
type: SRO
aliases:
  - 2019 Q82
  - 2019-Q82
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q82 — PZR Level Control Malfunction Charging</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">028 PZR Level Control Malfunction - A2.03 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is at 100% Reactor Power<br>
&bull; 21 Charging Pump is in service<br>
&bull; 21 and 22 Group Backup PZR Heaters are in AUTOMATIC<br>
&bull; The RO notices the following parameters at 09:00 and 09:40:<br><br>
<table style="width:100%;border-collapse:collapse;font-size:12px;color:#c8cdd5;margin-bottom:10px;">
<tr style="border-bottom:1px solid #1a2035;"><th style="text-align:left;padding:4px;">Parameter</th><th style="text-align:center;padding:4px;">09:00</th><th style="text-align:center;padding:4px;">09:40</th></tr>
<tr style="border-bottom:1px solid #1a2035;"><td style="padding:4px;">Charging Master Flow Controller Flow Demand</td><td style="text-align:center;padding:4px;">36%</td><td style="text-align:center;padding:4px;">75%</td></tr>
<tr style="border-bottom:1px solid #1a2035;"><td style="padding:4px;">Charging Flow</td><td style="text-align:center;padding:4px;">88 GPM</td><td style="text-align:center;padding:4px;">99 GPM</td></tr>
<tr style="border-bottom:1px solid #1a2035;"><td style="padding:4px;">PZR Level</td><td style="text-align:center;padding:4px;">59.0%</td><td style="text-align:center;padding:4px;">64.3%</td></tr>
<tr style="border-bottom:1px solid #1a2035;"><td style="padding:4px;">PZR Pressure</td><td style="text-align:center;padding:4px;">2235 psig</td><td style="text-align:center;padding:4px;">2236 psig</td></tr>
<tr><td style="padding:4px;">21-24 RCP Seal Injection Flow</td><td style="text-align:center;padding:4px;">7.9 GPM</td><td style="text-align:center;padding:4px;">8.9 GPM</td></tr>
</table>
Which ONE of the following completes the statements below?<br><br>
At 09:40, 21 and 22 Group Backup PZR heaters are <span class="blank">_(1)_</span>.<br>
The crew will reduce charging flow in accordance with <span class="blank">_(2)_</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) ON (2) S2.OP-SO.CVC-0001 (CHARGING, LETDOWN AND SEAL INJECTION)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) ON (2) S2.OP-AB.CVC-0001 (LOSS OF CHARGING)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) OFF (2) S2.OP-SO.CVC-0001 (CHARGING, LETDOWN AND SEAL INJECTION)</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) OFF (2) S2.OP-AB.CVC-0001 (LOSS OF CHARGING)</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; A. Correct.</strong> For Part 1 and based on plant parameters at 09:40, 21 and 22 Group PZR Backup Heaters are ON (Actual PZR level is 5% or more greater than Program PZR level (64.3 - 59.0 = +5.3%)). For Part 2, with charging flow demand, charging flow and PZR level ALL rising, this is an indication of a failure of Charging Master Flow Controller. Additionally, at 09:40 the only control room alarms present in the control (associated with the failed Charging Master Flow Controller) are OHA E-20 (PZR HTR ON LVL HI) and Control Console Bezel 3-18 PZR LEVEL HI Alarm. In accordance with S2.OP-AR.ZZ-00005 OHA E-20 ARP, the crew will REDUCE charging IAW S2.OP-SO.CVC-0001 (CHARGING, LETDOWN AND SEAL INJECTION). Control Console Bezel 3-18 PZR LEVEL Alarm Response Procedure refers the crew to OHA E-20 ARP.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect but plausible. Part 1 is correct. For Part 2, S2.OP-AB.CVC-0001 (LOSS OF CHARGING) would correctly address a failure of Charging Master Flow Controller in which charging flow is REDUCED. Consequently, the candidate could incorrectly conclude that the crew will reduce charging flow in accordance with S2.OP-AB.CVC-0001 (LOSS OF CHARGING).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect but plausible. For Part 1, actual PZR Pressure is normal at 09:40. Consequently, the candidate could incorrectly conclude that the Backup heaters are OFF. Part 2 is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect but plausible. For Part 1, actual PZR Pressure is normal at 09:40. Consequently, the candidate could incorrectly conclude that the Backup heaters are OFF. For Part 2, S2.OP-AB.CVC-0001 (LOSS OF CHARGING) would correctly address a failure of Charging Master Flow Controller in which charging flow is REDUCED. Consequently, the candidate could incorrectly conclude that the crew will reduce charging flow in accordance with S2.OP-AB.CVC-0001 (LOSS OF CHARGING).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AR.ZZ-00005, S2.OP-AB.CVC-0001 (LOSS OF CHARGING) | LO: NOS05ABCVC1-04 — Given a set of initial plant conditions, determine the appropriate abnormal procedure | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer Level & Press Control]]
- Related procedures: [[S2.OP-SO.CVC-0001 — CVCS Normal Operations]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related abnormals: [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2019 NRC Written Exam]]
