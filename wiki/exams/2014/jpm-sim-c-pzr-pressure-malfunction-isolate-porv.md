---
title: "2014 JPM Sim-c — TCAF PZR Pressure Malfunction (Isolate leaking PZR PORV)"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — TCAF PZR Pressure Malfunction (Isolate leaking PZR PORV)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 027 AA1.01 (RO 3.8 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 4 minutes<br><br>
<strong>Initial Conditions:</strong><br>
The unit is operating in a steady state condition at 100% power with all systems in automatic. 21 Charging pump is in service.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determine that 2PR2 PZR PORV is leaking and close 2PR7 Block Valve.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identify the abnormality and enter the appropriate procedure.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator either identifies PORV tailpipe temperature has risen from normal to ~227°F OR identifies rising charging flow, THEN enters S2.OP-AB.RC-0001, Reactor Coolant System Leak, OR S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RC 3.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, Continuous Action Summary. (Note: CAS Item 3.0 directs entry into S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction, when PORV leakage is identified.)</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1, Continuous Action Summary.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RC 3.21.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE actions to locate and isolate the leak IAW Attachment 2, Guidelines for Locating An RCS Leak.</td>
<td style="padding:6px;color:#9ca3af;">Monitors indicators on the left side of Att. 2 Table 1 and determines PORV tailpipe temperature is elevated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">AB.RC CAS 3.0</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF AT ANY TIME, the leak is determined to be from a PORV, OR a Pressurizer Code Safety Valve, THEN INITIATE S2.OP-AB.PZR-0001(Q), Pressurizer Pressure Malfunction.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines leak is from a PZR PORV, and initiates S2.OP-AB.PZR-0001(Q), Pressurizer Pressure Malfunction.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.PZR 3.2–3.39</td>
<td style="padding:6px;color:#c8cdd5;">Work down the PZR pressure diagnostic logic (POPS in service?; controlling channel failed?; Master Pressure Controller failed?; Spray Valve failed?; PORV failed?).</td>
<td style="padding:6px;color:#9ca3af;">Determines POPS not in service; controlling channel not failed; Master Pressure Controller not failed; Spray Valve not failed; PORV not failed (closed indication); goes to Step 3.46.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.PZR 3.46</td>
<td style="padding:6px;color:#c8cdd5;">Are PORV tailpipe temperatures elevated?</td>
<td style="padding:6px;color:#9ca3af;">Determines PORV tailpipe temperatures are elevated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.PZR 3.47 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2PR6 AND 2PR7, Pressurizer Relief Stop Valves.</td>
<td style="padding:6px;color:#9ca3af;">Closes 2PR6 AND 2PR7, Pressurizer Relief Stop Valves.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.PZR 3.49 *</span></td>
<td style="padding:6px;color:#c8cdd5;">When pressure stabilizes, OPEN 2PR6, Pressurizer Relief Stop Valve.</td>
<td style="padding:6px;color:#9ca3af;">Determines pressure is stable, and opens 2PR6, Pressurizer Relief Stop Valve.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.PZR 3.50</td>
<td style="padding:6px;color:#c8cdd5;">Is tailpipe temperature rising?</td>
<td style="padding:6px;color:#9ca3af;">Determines tailpipe temp is not rising (2PR1 not the leaker) and goes to Step 3.53.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.PZR 3.53 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2PR7.</td>
<td style="padding:6px;color:#9ca3af;">Opens 2PR7.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">AB.PZR 3.54</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is tailpipe temperature rising?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines tailpipe temperature rising. (Identifies 2PR2 as the leaking PORV.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.PZR 3.55 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CLOSE 2PR7.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Closes 2PR7.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.PZR 3.56</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY the SM/CRS to refer to Technical Specification 3.4.5 and the Event Classification Guide for Primary Leakage.</td>
<td style="padding:6px;color:#9ca3af;">Notifies SM/CRS. Terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating action is the <strong>which-PORV-is-leaking</strong> determination. Both relief stop valves (2PR6 and 2PR7) are first closed (step 3.47) to stop the leak and stabilize pressure. The applicant then <strong>unisolates one valve at a time</strong> to identify the leaker: open 2PR6 first (step 3.49) — tailpipe NOT rising (2PR1 is intact); then open 2PR7 (step 3.53) — <strong>tailpipe temperature rises</strong> (step 3.54), proving <strong>2PR2 is the leaking PORV</strong>; finally <strong>CLOSE 2PR7</strong> (critical step 3.55) to isolate it. Closing the wrong block valve, or failing to re-isolate 2PR7 after confirming the rising tailpipe temperature, fails the task. Initial diagnosis is via PORV tailpipe temperature rising from normal to ~227°F and rising charging flow.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.RC-0001 (Rev 11), S2.OP-AB.PZR-0001 (Rev 18) | Task: N1140240401 | K/A: APE 027 AA1.01 — Pressurizer Pressure Control Malfunction: Ability to operate and/or monitor PORVs and block valves (4.0/3.9) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2014 NRC Operating Exam]]
