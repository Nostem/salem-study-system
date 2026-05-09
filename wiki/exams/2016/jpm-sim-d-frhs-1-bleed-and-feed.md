---
title: "2016 JPM Sim-d — Respond to a Loss of Heat Sink (Bleed and Feed)"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Respond to a Loss of Heat Sink (Initiate Bleed and Feed with SI Pumps and Rx Head Vents)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | EPE E05 EA1.1 (4.1/4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 6 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 initiated a Rx trip from 100% power in response to a Main Steam line break at the mixing bottle.<br>
- An automatic Safety Injection initiated.<br>
- The Main Turbine failed to trip automatically, and was manually tripped from the control console.<br>
- MSLI failed, and all MSIV's remain open.<br>
- All AFW flow has been lost.<br>
- EOP-TRIP-1 was performed and a transition to FRHS-1, Loss of Secondary Heat Sink was made at Step 20.1.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Perform FRHS-1 starting at Step 1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Stop ALL RCPs. 2. Open 2PR1. 3. Open Rx Head Vent Valves 2RC40-2RC43.</span>
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
<td style="padding:6px;color:#c8cdd5;">IS TOTAL AFW FLOW LESS THAN 22E04 LB/HR DUE TO OPERATOR ACTIONS.</td>
<td style="padding:6px;color:#9ca3af;">Determines it was not operator action which caused total AFW flow to be less than 22E04 lb/hr.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">IF AT LEAST ONE INTACT OR RUPTURED SG IS AVAILABLE, THEN DO NOT FEED A FAULTED SG.</td>
<td style="padding:6px;color:#9ca3af;">Recognizes ALL SGs are faulted.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">IS RCS PRESSURE GREATER THAN ANY INTACT OR RUPTURED SG PRESSURE.</td>
<td style="padding:6px;color:#9ca3af;">Checks RCS pressure on control console and determines it is greater than all SG pressures checked on control console.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">ARE RCS T-HOTS GREATER THAN 350°F.</td>
<td style="padding:6px;color:#9ca3af;">Checks RCS Thot indication on control console and determines that RCS Thots are greater than 350°F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">IF WR LEVELS IN AT LEAST TWO SG's ARE LESS THAN 32% (37% ADVERSE), THEN IMMEDIATELY GO TO STEP 21 TO INITIATE RCS BLEED AND FEED.</td>
<td style="padding:6px;color:#9ca3af;">Determines at least 2 SG WR levels &lt; 32% and goes to Step 21.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">21 Caution</td>
<td style="padding:6px;color:#c8cdd5;">TO ESTABLISH RCS HEAT REMOVAL BY RCS BLEED AND FEED, STEPS 24 THRU 29 MUST BE PERFORMED QUICKLY AND WITHOUT INTERRUPTION.</td>
<td style="padding:6px;color:#9ca3af;">Reads Step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">23 (sequence-23) *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP ALL RCPS.</td>
<td style="padding:6px;color:#9ca3af;">Depresses STOP PB for 21-24 RCPs and verifies green stop light illuminates and red start light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">22</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE SI.</td>
<td style="padding:6px;color:#9ca3af;">Uses Safeguards key and initiates SI on at least one train of Safeguards initiation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23</td>
<td style="padding:6px;color:#c8cdd5;">ARE SI VALVES IN SAFEGUARDS POSITION (Table B: 2SJ4/5 OPEN BIT INLET; 2SJ12/13 OPEN BIT OUTLET; 2CV68/69 CLOSED CHARGING DISCHARGE; 21-24SJ54 OPEN; 2SJ1/2 OPEN; 2CV40/41 CLOSED).</td>
<td style="padding:6px;color:#9ca3af;">Checks 2RP4 and/or console indication to determine that all valves listed in Table B are in Safeguards position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.1</td>
<td style="padding:6px;color:#c8cdd5;">IS 21 OR 22 CHARGING PUMP RUNNING. IS BIT FLOW ESTABLISHED.</td>
<td style="padding:6px;color:#9ca3af;">Checks control console and determines 21 and 22 charging pump are running. Determines BIT flow is established.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.2</td>
<td style="padding:6px;color:#c8cdd5;">IS ANY SI PUMP RUNNING. ARE VALVES IN TABLE C OPEN FOR AT LEAST ONE RUNNING SI PUMP (2SJ30, 21/22 SJ33, 2SJ135, 21/22 SJ134).</td>
<td style="padding:6px;color:#9ca3af;">Determines 21 and 22 SI pumps are running. Determines Table C valves are open for at least one running SI pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23 (cont)</td>
<td style="padding:6px;color:#c8cdd5;">ARE ALL CHARGING AND SI PUMPS RUNNING AND ALIGNED TO DELIVER FLOW.</td>
<td style="padding:6px;color:#9ca3af;">Determines all charging and SI pumps are running and aligned to deliver flow.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">24</td>
<td style="padding:6px;color:#c8cdd5;">OPEN BOTH PZR PORV STOP VALVES.</td>
<td style="padding:6px;color:#9ca3af;">Checks control console and determines BOTH 2PR6 and 2PR7 PORV STOP VALVES are open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">OPEN BOTH PZR PORVS.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Places 2PR1 in manual and depresses 2PR1 PZR PORV open PB; verifies green closed light extinguishes and red open light illuminates. Places 2PR2 in manual and depresses 2PR2 PZR PORV open PB and reports that 2PR2 will not open.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">24.1</td>
<td style="padding:6px;color:#c8cdd5;">ARE BOTH PZR PORV STOP VALVES OPEN. ARE BOTH PZR PORVS OPEN.</td>
<td style="padding:6px;color:#9ca3af;">Determines 2PR6 and 2PR7 PORV STOP VALVES are open. Determines 2PR2 PZR PORV is not open. Alternate path actions start here.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">OPEN 2RC40 THRU 2RC43 (REACTOR HEAD VENTS).</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Inserts key into each 2RC40 THRU 2RC43 (REACTOR HEAD VENTS) switch on 2RP3, turns to open, and verifies each valve opens. Terminate JPM when operator has opened 2RC40 thru 2RC43 Reactor Head Vents.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 24 is the discriminating step / alternate path. After opening 2PR1 PORV successfully, the applicant attempts to open 2PR2 PORV in MANUAL and discovers it <strong>fails to open</strong>. Per Step 24.1 RNO, the alternate bleed path is to <strong>open all four reactor head vent valves (2RC40 through 2RC43)</strong> using the four key-locked switches on 2RP3 backpanel. Reactor Head Vents are NOT part of the standard bleed path — both PORVs are the standard path — but they are an authorized alternate path when one PORV fails to open. The Step 21 caution requires Steps 24-29 be performed quickly and without interruption to establish RCS heat removal by bleed-and-feed.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRHS-1 (Rev. 20) | Task: N1150290501 | K/A: EPE E05 EA1.1 — Inadequate Heat Transfer / Loss of Secondary Heat Sink — Ability to operate and/or monitor in the control room | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[ECCS]], [[CVCS]], [[RCS]], [[RCPs]]
- Related EOPs: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2016 NRC Operating Exam]]
