---
title: "2015 JPM Sim-d — Perform Main Turbine Valve Testing"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Perform Main Turbine Valve Testing</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 045 2.1.23 (4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 89% power, MOL. Power is reduced to perform Main Turbine Valve Testing. Rod control is in manual per CRS direction to prevent rod movement during testing, with Control Bank D at 187 steps. The ESO has been notified of valve test.<br><br>
<strong>Initiating Cue:</strong><br>
Perform Main Turbine Valve Testing IAW S2.OP-PT.TRB-0003, Main Turbine Valve Stroke Testing, Section 5.3 Main Turbine Valve Stroke Testing-Turbine Operating OR Main Steam Isolation Valves Closed, starting at Step 5.3.6 to perform Reheat and Intercept valve testing. Section 5.2, Test Preparation has been completed. Personnel are at the Main Turbine to perform any required local actions.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Perform stroke time testing of 21RS5 and 21RS6 SAT.<br>2. Initiate a power reduction at 10% per hour within 5 minutes of the 22RS5 being shut during stroke time testing.</span>
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
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1 / 5.3.2</td>
<td style="padding:6px;color:#c8cdd5;">IF Main Turbine is shutdown, THEN … ; IF performing 21MS28/21MS29 testing, THEN …</td>
<td style="padding:6px;color:#9ca3af;">Determines Main Turbine is operating. Determines MS28/MS29 testing performed after reheat valve testing.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.6.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">At the TURBINE E-H CONTROL &amp; STATUS monitor, EAST LP VALVE TESTS screen, ENSURE the TEST PERMISSIVE, NO OTHER TESTS IN PROGRESS is green.</td>
<td style="padding:6px;color:#9ca3af;">Selects EAST LP VALVE TESTS screen; determines the TEST PERMISSIVE, NO OTHER TESTS IN PROGRESS is green.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.6.B / C</td>
<td style="padding:6px;color:#c8cdd5;">DIRECT an Operator to locally monitor 21RS5 AND 21RS6 for full stroke; RECORD 21RS5 AND 21RS6 positions on Attachment 2, Section 3.0 (TEST POSITION 1).</td>
<td style="padding:6px;color:#9ca3af;">Directs field operator to monitor 21RS5 and 21RS6 for full stroke; records local positions (open) by initialing TEST POSITION 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.6.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">At the TURBINE E-H CONTROL &amp; STATUS monitor: 1. SELECT START TEST for 21RS5 AND 21RS6; 2. ENSURE NORMAL OPERATION changes to TEST IN PROGRESS.</td>
<td style="padding:6px;color:#9ca3af;">Selects START TEST for 21RS5 and 21RS6; determines NORMAL OPERATION changes to TEST IN PROGRESS.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.6.E</td>
<td style="padding:6px;color:#c8cdd5;">When 21RS5 AND 21RS6 OPEN/MOVING indications are cleared, RECORD positions on Attachment 2, Section 3.0 (TEST POSITION 2).</td>
<td style="padding:6px;color:#9ca3af;">Records 21RS5 and 21RS6 local positions (closed) by initialing TEST POSITION 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.6.F / G</td>
<td style="padding:6px;color:#c8cdd5;">When TEST IN PROGRESS changes to NORMAL OPERATION, RECORD positions (TEST POSITION 3); IF EAST LP VALVE TESTS completed, SELECT CLOSE WINDOW.</td>
<td style="padding:6px;color:#9ca3af;">Records 21RS5 and 21RS6 local positions (open) by initialing TEST POSITION 3. Determines testing is not complete (continues to 22RS5/22RS6).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.7.A–C</td>
<td style="padding:6px;color:#c8cdd5;">For 22RS5 – EAST REHEAT STOP AND 22RS6 – EAST INTERCEPT: ensure TEST PERMISSIVE green; direct local monitoring; record TEST POSITION 1.</td>
<td style="padding:6px;color:#9ca3af;">Observes already on EAST LP VALVE TESTS screen; determines TEST PERMISSIVE green; directs field operator to monitor 22RS5/22RS6; records local positions (open) TEST POSITION 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.7.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">At the TURBINE E-H CONTROL &amp; STATUS monitor: 1. SELECT START TEST for 22RS5 AND 22RS6; 2. ENSURE NORMAL OPERATION changes to TEST IN PROGRESS.</td>
<td style="padding:6px;color:#9ca3af;">Selects START TEST for 22RS5 and 22RS6; determines NORMAL OPERATION changes to TEST IN PROGRESS. (Evaluator marks time 22RS5 indicates shut.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5.3.7.E</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When 22RS5 AND 22RS6 OPEN/MOVING indications are cleared, RECORD positions (TEST POSITION 2). Note: After 10 seconds of being closed, 22RS6 will re-open, and 22RS5 remains shut.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Records 22RS5/22RS6 local positions (closed) TEST POSITION 2. Determines 22RS5 has not opened, and contacts local operator to verify position. (Cue: 22RS6 is open and 22RS5 is shut.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.3</td>
<td style="padding:6px;color:#c8cdd5;">IF any valve does not respond as expected or fails to reopen during this test, THEN PERFORM troubleshooting (check fuse LEDs/replace; cycle EHC valve; check limit switches; agitate solenoid; reinstall fuse; if unresolved, contact I&amp;C).</td>
<td style="padding:6px;color:#9ca3af;">Contacts field operator to investigate 22RS5 malfunction IAW Step 5.2.3 (this step is in Section 5.2, Test Preparation).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.7 CAUTION *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Turbine-Generator load must be reduced to less than 80% at 10%/hr when a Reheat Stop Valve or Intercept Valve fails to reopen within 5 minutes while above 80% load.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Within 5 minutes of the time marked at step 5.3.7.D (22RS5 shut), initiates a turbine load reduction at 10% per hour. JPM terminates once a load reduction at 10%/hr is commenced OR 5 minutes has elapsed from the time 22RS5 was shut.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. The 21RS5/21RS6 stroke test runs normally. During the 22RS5/22RS6 test (step 5.3.7.D), <strong>22RS5 (East Reheat Stop Valve) fails to reopen</strong> — after the 10-second close, 22RS6 re-opens but 22RS5 stays shut. The discriminating actions are (1) recognizing that 22RS5 did <strong>not</strong> reopen (rather than assuming a normal cycle) and verifying its position locally, and (2) honoring the CAUTION: because a Reheat Stop Valve failed to reopen within 5 minutes while above 80% load, the applicant must <strong>initiate a Turbine-Generator load reduction to less than 80% at 10%/hr within 5 minutes</strong> of 22RS5 going shut. Although the JPM cover lists no formal "time-critical step," this 5-minute window is the pass/fail discriminator. Verifying positions <strong>locally</strong> (not only from the EHC console) is also required — using EHC console indication alone is an automatic JPM failure per the FSAR 10.2.2.6 periodicity requirement.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-PT.TRB-0003 (Rev 19) | Task: N0450130201 | K/A: 045 2.1.23 — Main Turbine Generator: ability to perform specific system and integrated plant procedures (valve testing) | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Turbine]]
- Related procedures: [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]]
- Related exam: [[2015 NRC Operating Exam]]
