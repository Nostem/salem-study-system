---
title: "2015 JPM Sim-a — Take Corrective Actions for a Dropped Control Rod(s)"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Take Corrective Actions for a Dropped Control Rod(s)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 003 AA2.03 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Salem Unit 2 is operating at 41% power, BOL.<br>
A power reduction to bring the Main Turbine off-line is on hold.<br>
Xe is building in @30 pcm/hr.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Respond to all alarms and indications.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Places Rod Control in Manual following 1st dropped rod.<br>2. Trips the reactor upon discovery of 2nd dropped rod.</span>
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
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">Recognizes cluster of rod-related "E" Window OHAs and indications of a rod dropped into the core. Enters S2.OP-AB.ROD-0002, Dropped Rod.</td>
<td style="padding:6px;color:#9ca3af;">Announces cluster of rod-related "E" Window OHAs as unexpected alarms; announces indications of rod dropped into the core; enters AB.ROD-0002.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2.1</td>
<td style="padding:6px;color:#c8cdd5;">IF more than one rod is verified to be tripped, THEN Manually TRIP Reactor AND GO TO 2-EOP-TRIP-1, Reactor Trip OR Safety Injection.</td>
<td style="padding:6px;color:#9ca3af;">Verifies only 1 rod has dropped into core.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE Rod Bank Selector Switch in MAN. (Note: Auto outward rod movement will occur at T + 1:30 if rods are not placed in manual.)</td>
<td style="padding:6px;color:#9ca3af;">Places Rod Bank Selector Switch in MAN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2</td>
<td style="padding:6px;color:#c8cdd5;">IF a Turbine load change is in progress …</td>
<td style="padding:6px;color:#9ca3af;">Verifies no turbine load change in progress.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.3</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST Tave to within 1.5° of program (IF Main Turbine operating, adjust Turbine load; IF NOT operating, ADJUST Steam Dumps OR 21-24MS10 valves).</td>
<td style="padding:6px;color:#9ca3af;">Verifies Tave is within 1.5° of program.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.4</td>
<td style="padding:6px;color:#c8cdd5;">Is Reactor subcritical as a result of the dropped rod?</td>
<td style="padding:6px;color:#9ca3af;">Answers NO, GOES TO step 3.9.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.9</td>
<td style="padding:6px;color:#c8cdd5;">IF AT ANY TIME a power reduction becomes necessary, THEN BORATE AND ADJUST Turbine load or Steam Dump System flowrate to maintain Tave within 1.5°F of program.</td>
<td style="padding:6px;color:#9ca3af;">Determines no power reduction is necessary.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.10</td>
<td style="padding:6px;color:#c8cdd5;">Is power above 50% of RATED THERMAL POWER? (Malfunction modified to Final Severity 53 — 2nd rod drops — when step 3.10 is completed.)</td>
<td style="padding:6px;color:#9ca3af;">Answers NO, and GOES TO Step 3.12.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF more than one rod is verified to be tripped, THEN Manually TRIP Reactor AND GO TO 2-EOP-TRIP-1, Reactor Trip OR Safety Injection.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Observes second rod bottom light by direct observation, or by depressed power in the region of the 2 dropped rods, Terr or Tavg lowering, or OHA D-32 TAVE LO, and MANUALLY TRIPS the Reactor IAW Step 2.1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.12</td>
<td style="padding:6px;color:#c8cdd5;">REQUEST Maintenance to determine if an Individual Rod Position Indicator (IRPI) malfunction has occurred.</td>
<td style="padding:6px;color:#9ca3af;">Contacts Maintenance (or requests CRS contact Maintenance) to determine if an IRPI malfunction has occurred.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.13</td>
<td style="padding:6px;color:#c8cdd5;">Has an IRPI malfunction occurred?</td>
<td style="padding:6px;color:#9ca3af;">Answers NO based on rod bottom, OHAs, and primary plant parameter changes, and GOES TO Step 3.15.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.15</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE a power reduction to &lt;75% Rated Thermal Power …</td>
<td style="padding:6px;color:#9ca3af;">Recognizes power is 40%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.16</td>
<td style="padding:6px;color:#c8cdd5;">REQUEST Reactor Engineering assistance to recover rod.</td>
<td style="padding:6px;color:#9ca3af;">Contacts Reactor Engineering (or requests CRS contact Reactor Engineering) for assistance in recovering dropped rod.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.17</td>
<td style="padding:6px;color:#c8cdd5;">Is dropped rod to be recovered, per Reactor Engineering?</td>
<td style="padding:6px;color:#9ca3af;">Reactor Engineering will perform a flux map to aid determination. JPM terminates once a manual Reactor Trip has been performed or time reaches two times the validation time.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. The applicant first responds to a <strong>single</strong> dropped rod — verifying only one rod tripped (step 2.1 → NO), placing the Rod Bank Selector Switch in <strong>MAN</strong> (critical step 3.1, defeating the automatic outward rod motion that would otherwise occur at T+1:30), and working down AB.ROD-0002. After step 3.10 is completed, a <strong>second rod drops</strong> (the rod-drop malfunction is escalated). The discriminating action is recognizing the second dropped rod — by a second rod bottom light, depressed power/flux in the region of the two rods, lowering Tavg/Terr, or OHA D-32 TAVE LO — and <strong>manually tripping the reactor</strong> per step 2.1 (GO TO 2-EOP-TRIP-1). Failing to diagnose the second dropped rod and continuing the single-rod recovery path (toward power reduction) fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.ROD-0002 (Rev 10) | Task: 1140330401 | K/A: 003 AA2.03 — Ability to determine and interpret the cause of a dropped/misaligned rod | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[Excore NIs]]
- Related procedures: [[AB.ROD-0002 — Dropped Rod]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2015 NRC Operating Exam]]
