---
title: "2018 JPM Sim-d — Initiate Bleed and Feed Using Reactor Head Vents"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Initiate Bleed and Feed Using Reactor Head Vents</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 002 A2.04 (4.3/4.6)</span>
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
- The crew has entered 2-EOP-FRHS-1 due to valid RED Path on Heat Sink CFST based on all SG NR levels &lt; 9% and AFW flow &lt; 22E4 lbm/hr.<br>
- Plant conditions have continued to deteriorate and three (3) steam generator Wide Range levels are now less than 32%.<br>
- The CRS is implementing the CAS action to Initiate Bleed and Feed.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to Initiate Bleed and Feed starting at Step 21 IAW 2-EOP-FRHS-1, Response to Loss of Secondary Heat Sink.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">OPENS 2RC40 thru 2RC43 Reactor Head Vents IAW 2-EOP-FRHS-1.</span>
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
<td style="padding:6px;color:#c8cdd5;">21</td>
<td style="padding:6px;color:#c8cdd5;">Read CAUTION: Steps 24 thru 29 must be performed quickly and without interruption</td>
<td style="padding:6px;color:#9ca3af;">Operator reads the Caution and continues.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">21</td>
<td style="padding:6px;color:#c8cdd5;">STOP ALL RCPs</td>
<td style="padding:6px;color:#9ca3af;">Verifies all RCPs are already stopped (per Step 7 of FRHS-1).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">22 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Initiate SI on both trains</td>
<td style="padding:6px;color:#9ca3af;">Inserts key and turns switch clockwise until SI Operate bezel illuminates and SI Reset bezel extinguishes. Only needs to initiate SI on one train.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23</td>
<td style="padding:6px;color:#c8cdd5;">Verify SI valves in Safeguards Position</td>
<td style="padding:6px;color:#9ca3af;">YES — checks all SI valve bezels on 2RP4 are illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.1</td>
<td style="padding:6px;color:#c8cdd5;">Verify charging pumps running and BIT flow established</td>
<td style="padding:6px;color:#9ca3af;">Both charging pumps running (START bezels illuminated red). BIT flow established (~150-160 gpm on charging flowmeter).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.2</td>
<td style="padding:6px;color:#c8cdd5;">Verify SI pumps running and Table C valves open</td>
<td style="padding:6px;color:#9ca3af;">Both SI pumps running (START PBs illuminated red). All Table C valves OPEN for both running SI pumps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Open both PZR PORV stop valves (2PR6 and 2PR7)</td>
<td style="padding:6px;color:#9ca3af;">Verifies both PZR PORV stop valves are OPEN (2PR6 and 2PR7 OPEN bezels illuminated).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Open both PZR PORVs — 2PR2 fails to open (alternate path)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ALTERNATE PATH: Places both PZR PORVs in Manual and depresses OPEN PBs for 2PR1 and 2PR2. Reports that 2PR2 will NOT OPEN. PORVs may be cycling — applicant must determine both PORVs are required fully open in Manual and not credit auto operation.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">24.1</td>
<td style="padding:6px;color:#c8cdd5;">Verify both PZR PORV stop valves still open</td>
<td style="padding:6px;color:#9ca3af;">YES — 2PR6 and 2PR7 OPEN bezels still illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">25 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Open Reactor Head Vent valves 2RC40 thru 2RC43 using keys at 2RP2 backpanel</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">At 2RP2 backpanel, obtains four keys, inserts key into each keyswitch one at a time, and turns clockwise until OPEN bezel illuminates for 2RC40 through 2RC43.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is Step 24 — the applicant must recognize that 2PR2 PORV fails to open in Manual and then transition to the alternate bleed path: opening the Reactor Head Vent valves 2RC40 through 2RC43 using key-locked switches on the 2RP2 backpanel. This is the same alternate path tested in the 2019 and 2023 Sim-d JPMs. The applicant must also correctly perform the rapid bleed and feed sequence without interruption (Steps 24-29), including manually initiating SI, verifying ECCS flow, and opening PORVs before identifying the need for reactor head vents.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRHS-1 (Rev 33) | Task: N1150290501 | K/A: 002 A2.04 — Ability to (a) predict the impacts of the following malfunctions or operations on the RCS; and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences (4.3/4.6) | Source: Modified | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[ECCS]]
- Related procedures: [[AB.TRB-0001 — Main Turbine Abnormality]]
- Related EOPs: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related exam: [[2018 NRC Operating Exam]]
