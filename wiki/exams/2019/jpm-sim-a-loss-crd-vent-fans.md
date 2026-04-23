---
title: "2019 JPM Sim-a — Respond to Loss of All Control Rod Drive Vent Fans"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Respond to Loss of All Control Rod Drive Vent Fans</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 001 A2.01 (3.1/3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 at 100% power, BOL.<br>
- No equipment is out of service and no active Tech Specs are in effect.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator.<br>
Respond to all alarms and indications.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. STARTs Standby CRDM Vent Fan IAW ARP based on abnormal console indications.<br>2. TRIPs the Reactor IAW ARP based on no CRDM Vent Fans running.</span>
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
<td style="padding:6px;color:#c8cdd5;">—</td>
<td style="padding:6px;color:#c8cdd5;">Recognize abnormal console alarm</td>
<td style="padding:6px;color:#9ca3af;">Operator reports receipt of unexpected console alarm on 21 CRD Vent Fan: AIR FLOW LO and SEQUENCE COMPLETE bezel extinguished. Operator refers to 2CC1 ARP S2.OP-AR.ZZ-0011 page 13.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">Evaluate if Rod Drive Vent Fan has just been started</td>
<td style="padding:6px;color:#9ca3af;">Operator reads step 3.1 and determines that a Vent Fan has NOT been started. Marks step N/A and continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine SEQUENCE COMPLETE is extinguished and swap to standby fan</td>
<td style="padding:6px;color:#9ca3af;">Operator determines step is applicable based on SEQUENCE COMPLETE indication bezel being extinguished. Continues to perform applicable steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP affected Rod Drive Vent Fan</td>
<td style="padding:6px;color:#9ca3af;">Operator depresses STOP PB for 21 Fan and verifies STOP bezel illuminates Green.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">START standby Rod Drive Vent Fan</td>
<td style="padding:6px;color:#9ca3af;">Operator depresses START PB for standby vent fan and verifies START bezel illuminates RED. Operator reports SEQUENCE COMPLETE bezel is illuminated and AIR FLOW LO is extinguished as expected.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">—</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ALTERNATE PATH: Both remaining running vent fans trip</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Shortly after starting the standby fan, both the 23 CRD Fan (40 seconds) and 22 CRD Fan (50 seconds) trip. Operator receives AIR FLOW LO alarms for both fans. No CRDM Vent Fans are now running.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2.C</td>
<td style="padding:6px;color:#c8cdd5;">Evaluate if standby fan cannot be started</td>
<td style="padding:6px;color:#9ca3af;">Operator marks step as N/A based on standby fan having started (initially).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF no Rod Drive Vent Fans in operation THEN TRIP the Reactor</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">This step was initially marked N/A when the standby fan started. It becomes applicable when all running vent fans trip. Operator TRIPs the Reactor when NO Vent Fans are in operation. JPM terminates when the reactor is tripped.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an alternate path JPM. The initial response (swap to standby fan) succeeds, but then both remaining running fans trip within seconds. The applicant must recognize that step 3.2.D — which was initially marked N/A — now becomes applicable because NO CRD Vent Fans are in operation. The ARP directs an immediate reactor trip when no CRDM Vent Fans are running, because loss of cooling to the rod drive coils could degrade the CRDM holding capability and lead to uncontrolled rod motion. The operator must trip the reactor per step 3.2.D.1. Performing EOP-TRIP-1 immediate actions is NOT required to complete this JPM.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AR.ZZ-0011 (Rev 60), S2.OP-SO.CBV-0001 (Rev 34) | Task: 0220040101 | K/A: 001 A2.01 — Ability to predict the impacts of CRD mechanism malfunctions on plant conditions (RO 3.1 / SRO 3.7) | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2019 NRC Operating Exam]]
