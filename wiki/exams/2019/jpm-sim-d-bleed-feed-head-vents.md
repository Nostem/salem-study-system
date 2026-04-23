---
title: "2019 JPM Sim-d — Initiate Feed and Bleed using Reactor Head Vents"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Initiate Feed and Bleed using Reactor Head Vents IAW EOP-FRHS-1</span>
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
- The crew has entered 2-EOP-FRHS-1 due to valid RED Path on Heat Sink CFST based on all SG NR levels < 9% and AFW flow < 22E4 lbm/hr.<br>
- Plant conditions have continued to deteriorate and three (3) steam generator Wide Range levels are now less than 20%.<br>
- MSPI AFW pump failed to start.<br>
- The CRS is implementing the CAS action to Initiate Bleed and Feed.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to Initiate Bleed and Feed starting at Step 21 IAW 2-EOP-FRHS-1, Response to Loss of Secondary Heat Sink.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Initiates Safety Injection (SI).<br>2. Opens one PZR PORV.<br>3. Opens 2RC40 thru 2RC43 Reactor Head Vents IAW 2-EOP-FRHS-1.</span>
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
<td style="padding:6px;color:#c8cdd5;">21 CAUTION</td>
<td style="padding:6px;color:#c8cdd5;">To establish RCS Heat Sink Removal by RCS Bleed and Feed, Steps 24 thru 29 Must Be Performed Quickly and Without Interruption</td>
<td style="padding:6px;color:#9ca3af;">Reads Caution and continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">21</td>
<td style="padding:6px;color:#c8cdd5;">STOP ALL RCPs</td>
<td style="padding:6px;color:#9ca3af;">Verifies that all RCPs are already stopped (Step 7 of FRHS-1 stopped RCPs).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">22 *</span></td>
<td style="padding:6px;color:#c8cdd5;">INITIATE SI</td>
<td style="padding:6px;color:#9ca3af;">Initiates SI on both trains by inserting key and turning switch clockwise until SI Operate bezel illuminates and SI Reset bezel extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23</td>
<td style="padding:6px;color:#c8cdd5;">Are SI Valves in Safeguards Position?</td>
<td style="padding:6px;color:#9ca3af;">YES — checks that all SI valve bezels on 2RP4 are illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.1</td>
<td style="padding:6px;color:#c8cdd5;">Is 21 or 22 Charging Pump Running?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports both Charging pumps running as indicated by START bezels illuminated Red.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.1 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Is BIT Flow Established?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports BIT flow established by indication of flow on Charging flowmeter (approximately 235 gpm during validation).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.2</td>
<td style="padding:6px;color:#c8cdd5;">Is any SI Pump Running?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports both SI pumps running by START PBs illuminated Red.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.2 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Are Valves in Table C Open for At Least One Running SI Pump?</td>
<td style="padding:6px;color:#9ca3af;">YES — verifies all valves OPEN in Table C for both running SI pumps as indicated by OPEN bezels illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">23.2 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Are All Charging and SI Pumps Running And Aligned to Deliver Flow?</td>
<td style="padding:6px;color:#9ca3af;">YES — identifies all Charging and SI Pumps are running and valves in safeguards positions.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Open Both PZR PORV Stop Valves</td>
<td style="padding:6px;color:#9ca3af;">Reports both PZR PORV Stop Valves (2PR6 and 2PR7) are OPEN as indicated by OPEN bezels illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;">Open Both PZR PORVs</td>
<td style="padding:6px;color:#9ca3af;">Places both PZR PORVs in Manual and depresses OPEN PBs for 2PR1 and 2PR2. 2PR1 opens. 2PR2 will NOT open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">24.1</td>
<td style="padding:6px;color:#c8cdd5;">Are Both PZR PORV Stop Valves Open?</td>
<td style="padding:6px;color:#9ca3af;">YES — reports both 2PR6 and 2PR7 are open as indicated by OPEN bezels illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">24.1 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Are Both PZR PORVs Open?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — reports that 2PR2 will NOT OPEN. (Alternate Path starts here.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">24.1 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">OPEN 2RC40 thru 2RC43 Reactor Head Vents</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">At the 2RP2 backpanel, obtains keys, inserts key into each keyswitch one at a time and turns clockwise until OPEN bezel illuminates for all four valves.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">At Step 24.1, the applicant must recognize that 2PR2 fails to open and that an adequate bleed path requires at least one PORV and additional bleed capability. With only 2PR1 open, the applicant must use the reactor head vent valves (2RC40 through 2RC43, key-locked on the 2RP2 backpanel) as an alternate bleed path to supplement 2PR1. The evaluator provides the four keys needed to open the head vent valves.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRHS-1 (Rev 36) | Task: N1150290501 | K/A: 002 A2.04 — Ability to determine or interpret RCS bleed path conditions | Source: Bank | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related systems: [[RCS]], [[Pressurizer & PRT]], [[ECCS]], [[AFW]]
- Related exam: [[2019 NRC Operating Exam]]
