---
title: "2015 JPM Sim-e — Transfer A 4 KV Group Bus To The Alternate Power Supply (SPT to APT)"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Transfer A 4 KV Group Bus To The Alternate Power Supply (SPT to APT)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 062 A4.01 (RO 3.5 / SRO 3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
19.2% power, BOL.<br>
The Main Turbine was synchronized 10 minutes ago.<br>
Steam Dumps are in MS Pressure Mode-Auto set at 970 psig.<br>
Rod Control is in Manual until Group Buses are transferred.<br>
Group Buses are powered from the Station Power Transformers.<br><br>
<strong>Initiating Cue:</strong><br>
The CRS directs you to transfer all 4KV Group buses from their respective Station Power Transformers to the Aux Power Transformers IAW S2.OP-SO.4KV-0008, 4KV Group Buses Power Supply Transfer. All pre-requisites are complete SAT. Perform Sections 5.1-5.4 in order.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Transfer 2E 4KV Group bus from SPT to APT.<br>2. Trip Rx upon ATWT while transferring 2F 4KV Group bus from SPT to APT.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:60px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE all Overhead Annunciators for 2 APT are clear.</td>
<td style="padding:6px;color:#9ca3af;">Checks OHA Windows and determines all Overhead Annunciators for 2 APT are clear.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2B APT voltage is 4.22 - 4.36KV.</td>
<td style="padding:6px;color:#9ca3af;">Checks 2B APT reading on 2CC3 and ensures 2B APT voltage is 4.22 - 4.36KV.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">IF Auxiliary Power Unit Isolation Transfer is tripped, THEN RESET Auxiliary Power Unit Isolation Transfer (UIT).</td>
<td style="padding:6px;color:#9ca3af;">Determines Auxiliary Power Unit Isolation Transfer is not tripped from control console indication.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS the Mimic Bus 2E GROUP BUS INFEED 2AEGD BREAKER pushbutton, AND ENSURE console bezel 2AEGD MIMIC BUS INTLK CLOSE SELECTION illuminates.</td>
<td style="padding:6px;color:#9ca3af;">Depresses Mimic Bus 2E GROUP BUS INFEED 2AEGD BREAKER pushbutton and checks console bezel 2AEGD MIMIC BUS INTLK CLOSE SELECTION illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS control console 2AEGD CLOSE pushbutton, AND ENSURE the following: A. 21 ESD is OPEN. B. 2AEGD is CLOSED. C. 2E 4KV Group Bus voltage is from 4.22 - 4.36KV. D. Console bezel 2AEGD MIMIC BUS INTLK CLOSE SELECTION is extinguished.</td>
<td style="padding:6px;color:#9ca3af;">Depresses control console 2AEGD CLOSE pushbutton, and checks the following: A. 21 ESD is OPEN. B. 2AEGD is CLOSED. C. 2E 4KV Group Bus voltage is from 4.22 - 4.36KV. D. Console bezel 2AEGD MIMIC BUS INTLK CLOSE SELECTION is extinguished.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE all Overhead Annunciators for 2 APT are clear.</td>
<td style="padding:6px;color:#9ca3af;">Checks OHA Windows and determines all Overhead Annunciators for 2 APT are clear.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A APT voltage is 4.22 - 4.36KV.</td>
<td style="padding:6px;color:#9ca3af;">Checks 2A APT reading on 2CC3 and ensures 2A APT voltage is 4.22 - 4.36KV.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.3</td>
<td style="padding:6px;color:#c8cdd5;">IF Auxiliary Power Unit Isolation Transfer is tripped, THEN RESET Auxiliary Power Unit Isolation Transfer (UIT).</td>
<td style="padding:6px;color:#9ca3af;">Determines Auxiliary Power Unit Isolation Transfer is not tripped from control console indication.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS Mimic Bus 2F GROUP BUS INFEED 2BFGD BREAKER pushbutton, AND ENSURE console bezel 2BFGD MIMIC BUS INTLK CLOSE SELECTION illuminates.</td>
<td style="padding:6px;color:#9ca3af;">Depresses Mimic Bus 2F GROUP BUS INFEED 2BFGD BREAKER pushbutton, AND checks console bezel 2BFGD MIMIC BUS INTLK CLOSE SELECTION illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PRESS control console 2BFGD CLOSE pushbutton, AND ENSURE the following: A. 21 FSD is OPEN. B. 2BFGD is CLOSED. C. 2F 4KV Group Bus voltage is 4.22 - 4.36KV. D. Console bezel 2BFGD MIMIC BUS INTLK CLOSE SELECTION is extinguished.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses control console 2BFGD CLOSE pushbutton. Determines 2F Group bus did not transfer and recognizes a Rx trip demand signal is present by First Out Annunciator F-10, RC LO FLO OR RCP BKR OPEN & P-7. Recognizes the Rx did not trip. Announces ATWT. (Note: Identification of the ATWT is not a critical action, tripping the Rx is.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">*</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Trip the Rx using either trip handle.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Trips the Rx using either trip handle.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">*</span></td>
<td style="padding:6px;color:#c8cdd5;">Confirm the Rx trip.</td>
<td style="padding:6px;color:#9ca3af;">Confirms the Rx trip. Terminate the JPM when a Rx trip has been initiated and confirmed.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. The applicant transfers the 2E Group Bus from SPT to APT normally (critical steps 5.1.4 and 5.1.5). The anomaly occurs at <strong>step 5.2.5</strong>: when the 2BFGD CLOSE pushbutton is depressed to transfer the 2F Group Bus, the <strong>breaker fails (2BFGD does not close)</strong>, so the 2F Group Bus does not transfer and de-energizes. Losing the 2F Group Bus trips the RCPs it feeds, which generates a reactor trip demand signal — annunciated by <strong>First Out Annunciator F-10, RC LO FLO OR RCP BKR OPEN, and P-7</strong>. The discriminating action is recognizing that the <strong>reactor did not automatically trip (ATWT)</strong> and immediately <strong>manually tripping the reactor with either trip handle</strong>. Announcing the ATWT is not the critical action — tripping the reactor is. Continuing to troubleshoot the bus transfer instead of manually tripping fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.4KV-0008 (Rev 12); S2.OP-IO.ZZ-0003 (Rev 40) | Task: N0620110101 | K/A: 062 A4.01 — Ability to manually operate and/or monitor the AC electrical distribution system in the control room | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[4KV]], [[RCPs]]
- Related procedures: [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related exam: [[2015 NRC Operating Exam]]
