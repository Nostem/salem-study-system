---
title: "2018 JPM RO-A4 — Activate ERDS IAW EP-SA-111-F8"
category: exams
status: draft
aliases:
  - 2018 JPM RO-A4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A4 — Activate ERDS IAW EP-SA-111-F8</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.4.43 (3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator / Perform<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 was manually tripped from 100% power due to an RCS leak.<br>
- Safety Injection was manually initiated and all ECCS pumps are running.<br>
- The Shift Manager has declared an ALERT.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Work Control NCO and designated Secondary Communicator.<br>
- ACTIVATE ERDS IAW Step 1.2.b of EP-SA-111-F8, Secondary Communicator Log.<br>
- Notify the Shift Manager when ERDS is activated.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Activates ERDS IAW EP-SA-111-F8.</span>
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
<td style="padding:6px;color:#c8cdd5;">1.2.b</td>
<td style="padding:6px;color:#c8cdd5;">Within 60 minutes, ACTIVATE ERDS from a LAN computer</td>
<td style="padding:6px;color:#9ca3af;">Operator proceeds to ERDS XXX computer located inside Salem Simulator horseshoe area.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.2.b.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PROCEED to a computer labeled "ERDS XXX" and START the program by SELECTING the ERDS_Salem desktop icon</td>
<td style="padding:6px;color:#9ca3af;">Operator selects the ERDS_Salem desktop icon.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.2.b.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">On the "Login For ERDS Display" popup window ENTER the PASSWORD and SELECT "Login" to proceed</td>
<td style="padding:6px;color:#9ca3af;">Operator enters the PASSWORD and selects "Login" to proceed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.2.b.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SELECT the Action button labeled &lt;CONNECT&gt; for Salem 2 "ERDS Link Control and Status Display Screen"</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator selects the button labeled &lt;CONNECT&gt; for Salem 2 "ERDS Link Control and Status Display Screen".</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.2.b.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">SELECT the &lt;YES&gt; button in the "Current Link Control State is Disconnect. Do You Want To Connect?" box</td>
<td style="padding:6px;color:#9ca3af;">Operator selects &lt;YES&gt; button in the confirmation dialog.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.2.b.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OBSERVE that Status changes to "Transmitting Data"</td>
<td style="padding:6px;color:#9ca3af;">Operator checks that the Status changes to "Transmitting Data".</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.2.b.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">VERIFY successful communications status by observing that the "Messages Sent" value is increasing from zero "0" to some positive integer > "0"</td>
<td style="padding:6px;color:#9ca3af;">Operator verifies that the "Messages Sent" value is increasing from zero "0" to some positive integer > "0".</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.2.b.7</td>
<td style="padding:6px;color:#c8cdd5;">INFORM the CRS of successful ERDS activation status</td>
<td style="padding:6px;color:#9ca3af;">Notifies CRS/SM that ERDS is activated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 1.2.b.3 is the discriminating step — the applicant must select the correct unit (Salem 2) ERDS Link Control and Status Display Screen, since the initial conditions state Unit 2 experienced the manual trip and RCS leak. Selecting Salem 1 would be an incorrect action. This same discriminating step appears in the 2020 and 2023 ERDS activation JPMs.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: EP-SA-111-F8 (Rev 6) | Task: N1240110501 | K/A: G2.4.43 — Knowledge of emergency communications systems and techniques | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-ro-a4.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EP-SA-325 — Emergency Plan Implementing Procedures]]
- Related exam: [[2018 NRC Operating Exam]]
