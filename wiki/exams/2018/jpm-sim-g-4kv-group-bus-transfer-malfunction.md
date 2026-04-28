---
title: "2018 JPM Sim-g — Transfer 4KV Group Buses SPT to APT"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Transfer 4KV Group Buses SPT to APT</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 062 A2.04 (3.1/3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- 18% power, 160 MWe, SOL.<br>
- The Main Generator was synchronized 10 minutes ago.<br>
- Steam Dumps are in MS Pressure Mode-Auto set at 970 psig.<br>
- Rod Control is in Manual (D-147) until Group Buses are transferred.<br>
- Group Buses are currently powered from the Station Power Transformers (SPT).<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Plant Operator.<br>
- The CRS directs you to TRANSFER all 4KV Group Buses from their respective Station Power Transformers (SPT) to the Aux Power Transformers (APT) IAW S2.OP-SO.4KV-0008, 4KV Group Buses Power Supply Transfer in the following order:<br>
&nbsp;&nbsp;1. 2F IAW section 5.2<br>
&nbsp;&nbsp;2. 2G IAW section 5.3<br>
&nbsp;&nbsp;3. 2H IAW section 5.4<br>
&nbsp;&nbsp;4. 2E IAW section 5.1<br>
- All pre-requisites are completed SAT.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Transfers 2F 4KV Group bus from SPT to APT.<br>2. Trips Reactor IAW ARP following de-energizing of 2G 4KV Group Bus.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">P&L</td>
<td style="padding:6px;color:#c8cdd5;">Review Precautions and Limitations</td>
<td style="padding:6px;color:#9ca3af;">Reviews P&Ls. Notes P&L 3.3: OHA J-39, GROUP BUS XFER FAIL, will illuminate then clear on bus transfer (expected response). OHA J-39 annunciator response is applicable when the alarm does NOT clear following bus transfer.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE all OHA for 2 APT are clear</td>
<td style="padding:6px;color:#9ca3af;">Checks OHA windows; determines all OHA for 2 APT are clear.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A APT voltage is 4.22 - 4.36KV</td>
<td style="padding:6px;color:#9ca3af;">Checks 2A APT reading on 2CC3; ensures voltage is 4.22 - 4.36KV.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS Mimic Bus 2F GROUP BUS INFEED 2BFGD BREAKER pushbutton</td>
<td style="padding:6px;color:#9ca3af;">Depresses Mimic Bus 2F GROUP BUS INFEED 2BFGD BREAKER pushbutton; verifies console bezel 2BFGD MIMIC BUS INTLK CLOSE SELECTION is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS 2BFGD CLOSE pushbutton and verify transfer</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2BFGD CLOSE pushbutton. Verifies: A. 22FSD is OPEN. B. 2BFGD is CLOSED. C. 2F 4KV Group Bus voltage is 4.22 - 4.36KV. D. Console bezel 2BFGD MIMIC BUS INTLK CLOSE SELECTION is extinguished.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE all OHA for 2 APT are clear</td>
<td style="padding:6px;color:#9ca3af;">Checks OHA windows; determines all OHA for 2 APT are clear.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.2</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A APT voltage is 4.22 - 4.36KV</td>
<td style="padding:6px;color:#9ca3af;">Checks 2A APT reading on 2CC3; ensures voltage is 4.22 - 4.36KV.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS Mimic Bus 2G GROUP BUS INFEED 2BGGD BREAKER pushbutton</td>
<td style="padding:6px;color:#9ca3af;">Depresses Mimic Bus 2G GROUP BUS INFEED 2BGGD BREAKER pushbutton; verifies console bezel 2BGGD MIMIC BUS INTLK CLOSE SELECTION is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PRESS 2BGGD CLOSE pushbutton — 2G 4KV Group Bus fails to transfer</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator determines 2G 4KV Group Bus did not transfer. Multiple OHAs annunciate: J-8 (2G 4KV GRP BUS DIFF/OVRLD), J-38 (4KV GRP BUS UNDRVOLT), J-39 (4KV GRP BUS XFER FAIL), D-31 (24 RCP BKR OPEN/FLO LO). 24 RCP trips due to loss of 2G bus.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">ARP *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Respond to OHA ARPs — Trip the Reactor</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies from OHA J-39 ARP: GO TO OHA J-38 response. From J-38 (4KV GRP BUS UNDRVOLT) Step 3.5: IF ANY RCP Trips, THEN TRIP Reactor, GO TO EOP-TRIP-1. Alternatively from D-31 (24 RCP BKR OPEN/FLO LO): IF ANY RCP Trips, THEN TRIP Reactor, GO TO EOP-TRIP-1. Operator manually TRIPs the Reactor.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.3.5 is the alternate path / discriminating step. The 2F Group Bus transfers successfully, but when attempting to transfer the 2G Group Bus from SPT to APT, the bus fails to transfer and de-energizes. This causes the loss of 24 RCP (powered from 2G bus). Multiple OHA alarms annunciate simultaneously. The applicant must recognize the significance of losing an RCP and use the Alarm Response Procedures (J-39 directs to J-38; J-38 Step 3.5 and D-31 both direct: IF ANY RCP Trips, THEN TRIP Reactor and GO TO EOP-TRIP-1) to determine that a manual reactor trip is required. Key P&L knowledge: P&L 3.3 warned that J-39 alarm illuminating then clearing is the expected response during transfer. If OHA J-39 does NOT clear following bus transfer, the ARP response applies. The applicant must recognize the difference between the expected transient alarm and the actual failure.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.4KV-0008 (R13), S2.OP-AR.ZZ-0009 (R27) | Task: N0620110101 | K/A: 062 A2.04 — Ability to (a) predict the impacts of AC distribution bus failure on the AC Electrical Distribution and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences | Source: Bank | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[4KV]]
- Related procedures: [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]], [[S2.OP-AR.ZZ-0009 — Overhead Annunciators Window J]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2018 NRC Operating Exam]]
