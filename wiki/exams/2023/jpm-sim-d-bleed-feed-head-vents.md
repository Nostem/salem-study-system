---
title: "2023 JPM Sim-d — Initiate Bleed and Feed Using Reactor Head Vents"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Initiate Bleed and Feed Using Reactor Head Vents</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A2.04 (4.5/4.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 was manually tripped at 90% power due to elevated main turbine vibrations IAW S2.OP-AB.TL-0001.<br>
- An inadvertent feedwater isolation actuation occurred resulting in the loss of all main feedwater.<br>
- Loss of all AFW flow occurred when all AFW pumps tripped.<br>
- The crew has entered 2-EOP-FRHS-1 due to valid RED Path on Heat Sink CFST based on all SG NR levels < 9% and AFW flow < 22E4 lbm/hr.<br>
- Plant conditions have continued to deteriorate and three (3) steam generator Wide Range levels are now less than 20%.<br>
- MSPI AFW pump failed to start.<br>
- The CRS is implementing the CAS action to Initiate Bleed and Feed.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to Initiate Bleed and Feed starting at Step 11 IAW 2-EOP-FRHS-1, Response to Loss of Secondary Heat Sink.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has actuated Safety Injection, opened one Pressurizer PORV, and opened 2RC40 - 43 RCS head vent valves IAW steps 11, 13, and 14 of 2-EOP-FRHS-1.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">C11-1</td>
<td style="padding:6px;color:#c8cdd5;">CAUTION: Steps 11 thru 14 must be performed quickly to establish RCS heat removal by Bleed and Feed</td>
<td style="padding:6px;color:#9ca3af;">Reads the Caution and continues.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Actuate both trains of SI</td>
<td style="padding:6px;color:#9ca3af;">Initiates SI by inserting key and turning switch clockwise until the SI Operate bezel illuminates and the SI Reset bezel extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12</td>
<td style="padding:6px;color:#c8cdd5;">Is centrifugal Charging Pump flow indicated?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports BIT flow is established by indication on Charging flowmeter.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Are all SI pumps running?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports that both SI pumps are running by START PBs illuminated Red.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">13</td>
<td style="padding:6px;color:#c8cdd5;">Is power available to BOTH PZR PORV stop valves?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports power is available to both stop valves.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">13 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Are ALL PZR PORV Stop Valves OPEN?</td>
<td style="padding:6px;color:#9ca3af;">Reports that both PZR PORV Stop Valves are OPEN as indicated by 2PR6 and 2PR7 OPEN bezels illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">13 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Open ALL PZR PORVs</td>
<td style="padding:6px;color:#9ca3af;">Places both PZR PORVs in Manual and depresses OPEN PBs for 2PR1 and 2PR2. Reports that 2PR2 will NOT OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">14</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Are ALL PZR PORVs Open?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — reports that 2PR2 will NOT OPEN. (Alternate path begins here.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Open 2RC40 thru 2RC43 (Reactor Head Vents)</td>
<td style="padding:6px;color:#9ca3af;">At the 2RP2 backpanel, obtains keys and inserts key into each keyswitch one at a time and turns clockwise until the OPEN indicator illuminates.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 14 is the alternate path / discriminating step — 2PR2 fails to open, so the applicant must recognize that NOT all PORVs are open and proceed to open the Reactor Head Vent valves (2RC40 through 2RC43) as an alternate bleed path. This requires going to the 2RP2 backpanel and using keys to open each vent valve individually.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRHS-1 (R41) | Task: 1150290501 | System: 002 Reactor Coolant System | K/A: A2.04 — Ability to predict the impacts of Loss of heat sinks on the RCS and use procedures to correct, control, or mitigate the consequences | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related systems: [[Reactor Coolant System]], [[Pressurizer]]
- Related exam: [[2023 NRC Operating Exam]]
