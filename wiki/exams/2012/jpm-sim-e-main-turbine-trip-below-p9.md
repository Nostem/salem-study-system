---
title: "2012 JPM Sim-e — TCAF Main Turbine Trip < P-9 (Main Turbine ASO Trip)"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — TCAF Main Turbine Trip < P-9 (Main Turbine ASO Trip)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | G2.4.31 (RO 4.2 / SRO 4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
40% power, BOL.<br>
A power reduction to bring the Main Turbine off-line is on hold.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Respond to all alarms and indications.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Trip the Main Turbine.<br>2. Trip the Rx.</span>
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
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">Announce unexpected OHA G-4 TURB AUTO STOP OIL PRESS LO; refer to S2.OP-AR.ZZ-0007, Overhead Window G.</td>
<td style="padding:6px;color:#9ca3af;">Announces unexpected OHA G-4 TURB AUTO STOP OIL PRESS LO. Refers to S2.OP-AR.ZZ-0007, Overhead Window G.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 1.0/2.0</td>
<td style="padding:6px;color:#c8cdd5;">Review causes of the alarm.</td>
<td style="padding:6px;color:#9ca3af;">Reviews causes and determines one of three Auto Stop Oil Pressure channels reading ≤50 psig causes the alarm, and 2 of 3 channels in alarm will trip the Main Turbine.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.1</td>
<td style="padding:6px;color:#c8cdd5;">IF alarm is due to testing OR alarm is expected for current plant conditions, THEN no further action is required.</td>
<td style="padding:6px;color:#9ca3af;">Determines no testing in progress and alarm is not expected.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.2</td>
<td style="padding:6px;color:#c8cdd5;">CONFIRM alarm by verifying 2RP4 AST Oil Press Low status light indications.</td>
<td style="padding:6px;color:#9ca3af;">Checks 2RP4 AST Oil Press Low status light is illuminated for Channel I.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.3</td>
<td style="padding:6px;color:#c8cdd5;">IF a Turbine Trip occurs, THEN: A. IF ≥P-9 (49% power), GO TO 2-EOP-TRIP-1. B. IF &lt;P-9 (49% power), GO TO S2.OP-AB.TRB-0001(Q), Turbine Trip Below P-9.</td>
<td style="padding:6px;color:#9ca3af;">Reads step 3.3 and recognizes that below P-9 the directed path is S2.OP-AB.TRB-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">ARP demand *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Recognize a demand for a turbine trip has occurred (OHA F-32 DEHC Trip / 2 of 3 channels low), but the turbine has NOT tripped; manually trip the Main Turbine.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Initiates a turbine trip from the trip handle and verifies turbine is tripped. Recognizes step 3.3 directs &lt;P-9 → S2.OP-AB.TRB-0001 and enters S2.OP-AB.TRB-0001.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.TRB 1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, Continuous Action Summary.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1, Continuous Action Summary.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.TRB 3.2</td>
<td style="padding:6px;color:#c8cdd5;">VERIFY the Turbine is tripped.</td>
<td style="padding:6px;color:#9ca3af;">Note: IF the candidate observes the 21 MS28 remaining open, they may determine the turbine is not tripped. Initiating a MSLI before the Rx is tripped is an incorrect action which may challenge SG safeties (see Key Decision Point).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.TRB 3.3</td>
<td style="padding:6px;color:#c8cdd5;">Are all Turbine Stop Valves closed?</td>
<td style="padding:6px;color:#9ca3af;">Determines all Turbine Stop Valves are NOT closed from 2RP4. Goes to Step 3.7.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.TRB 3.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">TRIP the Reactor, GO TO 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Trips the Reactor using either of the Reactor Trip handles.</span></td>
</tr>
</table>

<div style="margin-top:8px;font-size:10px;color:#6b7280;">If the candidate elects to initiate a Rx trip from CAS actions 1.0/2.0 (which apply if a MSLI is initiated), TRIP-1 immediate actions are then performed: TRIP REACTOR (critical) → confirm Rx trip → TRIP TURBINE via trip handle (critical) → determine the trip handle did not close all Main Turbine Stop Valves → initiate a MSLI (critical TRIP TURBINE MSLI step). JPM terminates after the MSLI has been performed.</div>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">A turbine Auto Stop Oil low-pressure signal develops on all three channels (OHA G-4, then OHA F-32 DEHC Trip), which <strong>demands a Main Turbine trip that does not occur</strong> — 21 MS28 (a Turbine Stop Valve) remains open. The discriminating action is recognizing the <strong>demand for a turbine trip with no actual trip</strong> and <strong>manually tripping the Main Turbine from the trip handle</strong>. Because reactor power is &lt;P-9 (49%), AB.TRB-0001 step 3.3 then routes the operator to <strong>trip the reactor (step 3.7)</strong> and go to EOP-TRIP-1. The trap: outside the EOP network, <strong>initiating a MSLI to trip the turbine before tripping the reactor is failure criteria</strong> — in TRIP-1 the steps for tripping the Rx precede tripping the Turbine, and a premature MSLI renders the steam dumps inoperable and prematurely isolates the SGFPs, which with Rx power &gt;P-10 (10%) and no steam dumps could challenge SG safeties. Failing to manually trip the turbine, or initiating a MSLI before the reactor trip, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.TRB-0001 (Rev 14) / S2.OP-AR.ZZ-0007 (Rev 48) | Task: N1140420401 | K/A: 2.4.31 — Emergency Procedures / Plan: Knowledge of annunciators alarms and indications, and use of the response instructions (4.2/4.1) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Turbine]], [[Main Steam]]
- Related procedures: [[AB.TRB-0001 — Main Turbine Abnormality]], [[S1.OP-AR.ZZ-0007 — Overhead Annunciators Window G]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2012 NRC Operating Exam]]
