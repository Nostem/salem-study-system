---
title: "2014 JPM IP-i — Unload and Stop an EDG"
category: exams
status: draft
aliases:
  - 2014 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Unload and Stop an EDG</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 064 A2.03 (3.1/3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (2C Diesel Generator Control Panel; 2C output breaker 2CD1AX6D at 64' Switchgear Room)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
2C EDG is running loaded in parallel with 2C Vital bus for maintenance. It is loaded to 2550 KW, 1500 KVAR OUT.<br><br>
<strong>Initiating Cue:</strong><br>
Unload and shut down the 2C EDG IAW S2.OP-SO.DG-0003, 2C Diesel Generator Operation, Sections 5.8 and 5.9
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Lower DG real load incrementally to less than 200 KW.<br>2. Lower DG reactive load incrementally to 50-100 KVAR.<br>3. Open DG output breaker.<br>4. Stop DG and return Gen Loading SW to AUTO.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.8.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF 2C EDG is paralleled on 2C 4KV Vital Bus, THEN concurrently PERFORM the following: <span class="hi-exam">ADJUST SPEED CONTROL SWITCH (GS) to gradually lower load to 200 KW</span>. <span class="hi-exam">ADJUST VOLTAGE CONTROL SWITCH (VCS) to gradually lower KVAR to between 50-100 KVAR OUT</span>.</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator locates SPEED CONTROL SWITCH (GS) and VOLTAGE CONTROL SWITCH, and simulates alternately goes to LOWER on the switches while monitoring Generator KW and KVAR.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.8.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2C DIESEL GENERATOR BREAKER by performing one of the following: OPEN 2CD1AX6D, 2C DIESEL GENERATOR BREAKER (64' Swgr Rm), or PRESS 2C BREAKER OPEN pushbutton (2CC3), or PLACE 2C-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS) to TRIP (2C D/G Control Panel).</td>
<td style="padding:6px;color:#9ca3af;">Simulates opening 2C DIESEL GENERATOR BREAKER by placing 2C-DF-GCP-3 (BCS) to TRIP position. Cue: Green indicating light above switch illuminates, red light extinguishes. Generator KW and KVAR indicate 0. Generator Voltage indicates 4160 VAC.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.8.4</td>
<td style="padding:6px;color:#c8cdd5;">ALLOW Diesel to run unloaded for ≥ 3 minutes prior to stopping the EDG.</td>
<td style="padding:6px;color:#9ca3af;">Cue: 3 minutes has elapsed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.8.5</td>
<td style="padding:6px;color:#c8cdd5;">IF diesel unloading was directed by Step 5.9.3F OR Step 5.10.4E, THEN RETURN to Step 5.9.4 OR Step 5.10.5.</td>
<td style="padding:6px;color:#9ca3af;">Marks step N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.9.1</td>
<td style="padding:6px;color:#c8cdd5;">IF Diesel Generator was operated without electrical load for &lt;15 minutes, THEN ALLOW Diesel to run unloaded until total runtime is ≥15 minutes OR for a period of time specified by a pre-planned Maintenance activity, prior to stopping Diesel.</td>
<td style="padding:6px;color:#9ca3af;">Marks step N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.9.4</td>
<td style="padding:6px;color:#c8cdd5;">IF 2C-DF-GCP-1 2C DIESEL GEN LOADING SW is in MANUAL (DROOP), THEN: A. ADJUST Diesel Generator speed as necessary to achieve 900 rpm using SPEED CONTROL SWITCH (GS). B. CHECK frequency indicated on 2CC3 bezel is 58.94-60.36 Hz. C. ADJUST Generator terminal voltage as necessary to achieve 4160 volts using VOLTAGE CONTROL SWITCH (VCS). D. CHECK voltage indicated on 2CC3 is 4.023-4.306 Kv.</td>
<td style="padding:6px;color:#9ca3af;">Cue if asked: 2C DIESEL GEN LOADING SWITCH is in MANUAL. Adjusts speed to 900 rpm; calls control room to check frequency (60.03 Hz); raises VOLTAGE CONTROL SWITCH (VCS) to achieve 4160 volts; calls control room to check voltage on 2CC3 bezel.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.9.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2C-DF-SS, 2C DG STOP/START SWITCH in STOP.</td>
<td style="padding:6px;color:#9ca3af;">Simulates placing 2C-DF-SS 2C DG STOP/START SWITCH to STOP, and verifies speed lowering. Cue: Diesel is stopping.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.9.6</td>
<td style="padding:6px;color:#c8cdd5;">IF the Diesel Generator does not shutdown...</td>
<td style="padding:6px;color:#9ca3af;">Marks N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.9.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF 2C-DF-GCP-1, 2C DIESEL GEN LOADING SW is in MANUAL (DROOP), THEN PLACE 2C-DF-GCP-1 2C DIESEL GEN LOADING SW in AUTO (ISOCR).</td>
<td style="padding:6px;color:#9ca3af;">Simulates placing 2C-DF-GCP-1 2C DIESEL GEN LOADING SW in AUTO. Cue: AUTO light illuminates, MANUAL light extinguishes, GENERATOR LOADING IN DROOP MODE (B-9) alarm clears. Termination: After placing switch in AUTO, state "JPM is complete."</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is <strong>Step 5.8.1</strong> — the applicant must unload the paralleled EDG <strong>in the correct sequence and direction</strong> before opening the output breaker. Because the EDG is synchronized to the 2C 4KV Vital Bus, real load (KW) is lowered with the <strong>SPEED CONTROL SWITCH (GS)</strong> and reactive load (KVAR) with the <strong>VOLTAGE CONTROL SWITCH (VCS)</strong>, alternately lowering both while monitoring Generator KW and KVAR. The JPM cover NOTE directs that the GENERATOR CIRCUIT BREAKER SWITCH should be placed to TRIP "as soon as EDG Load is reduced to 200 KW" — opening the breaker (Step 5.8.3) before real load is brought below 200 KW, or raising rather than lowering on either switch, fails the unloading. Reverse-power / motoring of the generator is avoided by reaching &lt;200 KW first, then tripping the breaker. The task is completed only when the diesel is stopped via 2C-DF-SS (Step 5.9.5) and the Gen Loading SW (2C-DF-GCP-1) is returned to AUTO (Step 5.9.7).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.DG-0003 (Rev 41), 2C Diesel Generator Operation, Sections 5.8 &amp; 5.9 | Task: N0645060104 | K/A: 064 A2.03 — Emergency Diesel Generator System: Ability to (a) predict the impacts of EDG malfunctions/operations and (b) use procedures to correct, control, or mitigate them — Voltage and frequency (3.1/3.1) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]]
- Related procedures: [[S2.OP-SO.DG-0003 — 2C Diesel Generator Operation]]
- Related exam: [[2014 NRC Operating Exam]]
