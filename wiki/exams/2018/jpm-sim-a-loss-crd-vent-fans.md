---
title: "2018 JPM Sim-a — Respond to Loss of CRD Vent Fans"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Respond to Loss of All Control Rod Drive Vent Fans</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 001A2.01 (3.1/3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> N/A<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 at 100% power<br>
- No equipment is out of service and no active Tech Specs are in effect<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator<br>
- Respond to all alarms and indications
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. STARTS Standby CRDM Vent Fan IAW ARP based on abnormal console indications.<br>
2. TRIPs the Reactor IAW ARP based on NO CRDM Vent Fans running.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Recognize 21 CRD Vent Fan AIR FLOW LO alarm and SEQUENCE COMPLETE bezel extinguished on 2CC1</td>
<td style="padding:6px;color:#9ca3af;">Operator reports receipt of unexpected console alarm on 21 CRD Vent Fan for AIR FLOW LO and SEQUENCE COMPLETE bezel extinguished. Refers to 2CC1 ARP S2.OP-AR.ZZ-0011</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Read CAUSE, AUTOMATIC ACTIONS, NOTE, and CAUTION from ARP page 13</td>
<td style="padding:6px;color:#9ca3af;">Cause: Fan discharge pressure < 2.0 INWC. No automatic actions. Note: Low flow alarm may result from erratic flow during fan start; SEQUENCE COMPLETE light indicates flow through fan outlet damper. Caution: Operating with less than two Rod Drive Vent Fans could degrade Rod Drive Coils — Operability Determination should be performed</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">IF Rod Drive Vent Fan has just been started AND SEQUENCE COMPLETE illuminated, THEN MONITOR Rod Drive Hdr Outlet temperatures</td>
<td style="padding:6px;color:#9ca3af;">Operator reads step and determines N/A — a fan has NOT just been started</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF SEQUENCE COMPLETE indication for affected fan is extinguished, THEN immediately SWAP to the standby Rod Drive Vent Fan</td>
<td style="padding:6px;color:#9ca3af;">Operator determines applicable based on extinguished SEQUENCE COMPLETE. Depresses STOP PB for 21 Fan, verifies STOP bezel illuminates green. Depresses START PB for standby vent fan, verifies START bezel illuminates red. Reports SEQUENCE COMPLETE bezel illuminated and AIR FLOW LO cleared</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ALTERNATE PATH: IF no Rod Drive Vent Fans are in operation, THEN TRIP the Reactor</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">After starting the standby fan, the two running vent fans trip shortly after. Operator initially marked 3.2.C (IF standby cannot start) as N/A because standby fan started. This step becomes applicable when both remaining fans trip — NO CRDM Vent Fans are running. Operator TRIPs the Reactor.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 3.2.D is the discriminating step (alternate path). The initial alarm on 21 CRD Vent Fan is straightforward — the ARP directs swapping to standby. The key test is what happens AFTER the standby fan starts: both remaining running fans (22 and 23) trip within seconds. The applicant must recognize that with NO CRDM Vent Fans running, the ARP (step 3.2.D) directs an immediate reactor trip. Operating with no vent fans would cause CRD mechanism coil overheating and potential damage. The applicant may have already marked step 3.2.C as N/A (standby fan started successfully), but must reassess when the additional fans trip. CRD Vent Fan Outlet Temperature alarms: 21 at T2602A/160F, 22 at T2603A/160F, 23 at T2604A/160F (P250 computer points). Performing EOP-TRIP-1 immediate actions is NOT required to complete this JPM.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AR.ZZ-0011 (Rev. 60), S2.OP-SO.CBV-0001 (Rev. 33) | Task: 0220040101 | K/A: 001A2.01 — Ability to predict the impacts of CRDS malfunctions on system components | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[CAV]]
- Related procedures: [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related exam: [[2018 NRC Operating Exam]]
