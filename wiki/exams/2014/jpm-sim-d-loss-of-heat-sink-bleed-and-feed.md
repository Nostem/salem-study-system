---
title: "2014 JPM Sim-d — Respond to a Loss of Heat Sink (Initiate Bleed and Feed with SI)"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Respond to a Loss of Heat Sink (Initiate Bleed and Feed with SI pumps and Rx Head Vents)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | WE05 EA1.01 (4.1/4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 6 minutes<br><br>
<strong>Initial Conditions:</strong><br>
• Unit 2 initiated a Rx trip from 100% power in response to a Main Steam line break at the mixing bottle.<br>
• An automatic Safety Injection initiated.<br>
• The Main Turbine failed to trip automatically, and was manually tripped from the control console.<br>
• MSLI failed, and all MSIV's remain open.<br>
• All AFW flow has been lost.<br>
• 21 charging pump is CIT.<br>
• 22 charging pump tripped 3 minutes ago.<br>
• EOP-TRIP-1 was performed and a transition to FRHS-1, Loss of Secondary Heat Sink was made at Step 20.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Perform FRHS-1 starting at Step 1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Stop ALL RCPs.<br>2. Open 2PR1.<br>3. Open Rx Head Vent Valves 2RC40-2RC43.</span>
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
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">IS TOTAL AFW FLOW LESS THAN 22E04 LB/HR DUE TO OPERATOR ACTIONS?</td>
<td style="padding:6px;color:#9ca3af;">Determines it was not operator action which caused total AFW flow to be less than 22E04 lb/hr.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF AT LEAST ONE INTACT OR RUPTURED SG IS AVAILABLE, THEN DO NOT FEED A FAULTED SG.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Recognizes ALL SGs are faulted.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3 / 3.1</td>
<td style="padding:6px;color:#c8cdd5;">IS RCS PRESSURE GREATER THAN ANY INTACT OR RUPTURED SG PRESSURE? ARE RCS T-HOTS GREATER THAN 350°F?</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS pressure greater than all SG pressures, and RCS Thots greater than 350°F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IS 21 OR 22 CHARGING PUMP AVAILABLE? GO TO STEP 23.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines neither 21 nor 22 charging pump is available based on initial conditions and/or control console indications. Goes to Step 23.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23 CAUTION</td>
<td style="padding:6px;color:#c8cdd5;">TO ESTABLISH RCS HEAT REMOVAL BY RCS BLEED AND FEED, STEPS 24 THRU 29 MUST BE PERFORMED QUICKLY AND WITHOUT INTERRUPTION.</td>
<td style="padding:6px;color:#9ca3af;">Reads Step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">23 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP ALL RCPS.</td>
<td style="padding:6px;color:#9ca3af;">Depresses STOP PB for 21-24 RCPs and verifies green stop light illuminates and red start light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">24</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE SI.</td>
<td style="padding:6px;color:#9ca3af;">Uses Safeguards key and initiates SI on at least one train of Safeguards initiation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">25 / 25.1 / 25.2</td>
<td style="padding:6px;color:#c8cdd5;">ARE SI VALVES IN SAFEGUARDS POSITION? IS 21 OR 22 CHARGING PUMP RUNNING? IS ANY SI PUMP RUNNING? ARE VALVES IN TABLE C OPEN FOR AT LEAST ONE RUNNING SI PUMP?</td>
<td style="padding:6px;color:#9ca3af;">Verifies Table B SI valves in Safeguards position; determines neither charging pump running; determines both 21 and 22 SI pumps running; determines Table C valves open for at least one running SI pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">26 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">OPEN BOTH PZR PORVS.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses 2PR1 PZR PORV open PB and verifies green closed light extinguishes and red open light illuminates. Depresses 2PR2 PZR PORV open PB and reports that 2PR2 will not open.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">26.1</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ARE BOTH PZR PORV STOP VALVES OPEN? ARE BOTH PZR PORVS OPEN?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines both 2PR6 and 2PR7 PORV stop valves are open. Determines 2PR2 PZR PORV is not open.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">26.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2RC40 THRU 2RC43 (REACTOR HEAD VENTS).</td>
<td style="padding:6px;color:#9ca3af;">Inserts key into each 2RC40 THRU 2RC43 (REACTOR HEAD VENTS) switch on 2RP3, turns to open, and verifies each valve opens. Terminate JPM when operator has opened 2RC40 thru 2RC43 Reactor Head Vents.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">All secondary heat sink is lost (all AFW failed, all SGs faulted via the unisolable MSLB), so FRHS-1 drives the applicant toward <strong>RCS bleed and feed</strong>. Step 4 forces the alternate path: <strong>neither charging pump is available</strong> (21 CIT, 22 tripped), so the applicant must GO TO Step 23 and establish bleed and feed using the <strong>SI pumps</strong> rather than charging. The bleed-and-feed sequence (steps 23–26.1) must be performed quickly and without interruption: <strong>stop all RCPs</strong> (critical step 23), initiate SI, then <strong>open the PZR PORVs</strong> (critical step 26). The discriminating recognition is that <strong>2PR2 fails to open</strong> — so the bleed path is established through <strong>2PR1</strong> alone, and the applicant must compensate by <strong>opening the four Reactor Head Vents 2RC40–2RC43</strong> (critical step 26.1) to ensure adequate bleed capability. Failing to stop all RCPs, failing to recognize 2PR2 will not open, or failing to open the Reactor Head Vents fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRHS-1 (Rev 24) | Task: N1150290501 | K/A: EPE E05 EA1.1 — Loss of Secondary Heat Sink: Ability to operate and/or monitor RCS bleed and feed as it applies to the loss of secondary heat sink (4.1/4.0) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2014 NRC Operating Exam]]
