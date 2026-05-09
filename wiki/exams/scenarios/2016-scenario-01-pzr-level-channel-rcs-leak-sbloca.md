---
title: "2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation"
category: exams
status: draft
aliases:
  - 2016 Scenario 1
  - 2016 ESG-1
  - 15-01 NRC ESG-1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 4 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 at 100% power, MOL. PZR Pressure Channel III is selected for Control. RCS Boron 857 ppm; 1220 MWe. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs. No discharges in progress. No most-limiting LCO in effect.<br><br>
<strong>Turnover:</strong> The crew takes the watch with the unit at 100% power, MOL. PZR Pressure Channel III is selected for Control. The crew is informed of the abnormal plant configuration (PZR Pressure Channel III selected for Control) and that Unit 1 and Hope Creek are at 100% power.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li><span class="hi">Controlling PZR Level Channel fails low</span> (letdown isolates, charging flow rises, manual control of MFC, channel removed from service)</li>
<li><span class="hi">20 gpm RCS leak</span> (swap to centrifugal charging pump, 45 gpm orifice, leak rate estimate, controlled shutdown)</li>
<li><span class="hi">150 gpm SBLOCA</span> (PZR level cannot be maintained &gt;17%, manual reactor trip and SI, AFW fails to auto-start — CT#1, BIT isolation valves fail to open — CT#2)</li>
<li><span class="hi">SBLOCA escalation during SI termination</span> (leak grows to 2000 gpm equivalent when 2CV68/2CV69 opened, transition to EOP-LOCA-2)</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence &amp; Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Controlling PZR Level Channel fails low</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA E-36 PZR HTR OFF LVL LO and diagnoses controlling PZR level channel failure. RO may request to place the Master Flow Controller (MFC) in manual prior to direction. CRS enters S2.OP-AB.CVC-0001, Loss of Charging, and directs initiation of Attachment 1 CAS. RO confirms charging pumps running with no cavitation and identifies PZR level Channel I failed low. RO takes manual control of charging and maintains PZR level within band assigned by CRS. RO selects an operable channel for Control, Alarm, and Recorders, and restores PZR heaters to pre-event condition. RO announces OHA E-20 PZR HTR ON LVL HI as expected (no letdown with charging established). PO restores letdown: ensures 2CV7 open; places 2CV18 in manual and closes/opens until close PB extinguishes; opens 2CV2 and 2CV277 then places both in auto; verifies charging flow ~85-90 gpm; opens a 75 gpm orifice isolation valve while adjusting 2CV18 to control letdown pressure ~300 psig; places 2CV18 in auto. RO returns MFC to auto when PZR level returns to program. CRS contacts IC for assistance in removing channel from service. CRS enters TS LCO 3.3.1.1 Action 6.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">20 gpm RCS leak</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports charging flow rising and PZR level lowering slowly. Crew reports rising 2R11A containment radiation monitor and unexpected OHA C-2 CNTMT SUMP PMP START. CRS enters S2.OP-AB.RC-0001, Reactor Coolant System Leak, and directs Attachment 1 CAS. RO confirms RCS &gt;350 °F in Mode 1 and PZR level lowering. CRS enters S2.OP-AB.RAD-0001, Abnormal Radiation, after OHA A-6 unexpected annunciation. RO swaps to a centrifugal charging pump per Step 3.14 and raises charging flow to stabilize PZR level. PO reduces letdown to minimum (opens 2CV3, maintains letdown pressure ~300 psig with 2CV18 in manual, closes the open 75 gpm orifice, returns 2CV18 to auto). RO stabilizes PZR level and estimates leak rate. CRS initiates S2.OP-ST.RC-0008, RCS Water Inventory Balance. CRS contacts Rad Pro for CFCU recommendation; PO places 2 CFCUs in Low Speed and 2 CFCUs in High Speed. CRS initiates leak isolation actions per Attachment 2. CRS enters TSAS 3.4.7.2.b for RCS leakage and 3.6.1.4 for containment pressure if it has reached 0.3 psig. Operations Director directs 30%/hr load reduction to 20% to take Unit 2 offline. CRS briefs power reduction; RO initiates boration; PO initiates turbine load reduction at 30%/hr. CRS may enter S2.OP-AB.LOAD-0001 Rapid Load Reduction.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SBLOCA — leak escalates to 150 gpm; AFW and BIT failures</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports PZR level trending down and adjusts charging flow to maintain level. RO reports PZR level cannot be maintained &gt;17%. CRS directs reactor trip and Safety Injection. RO trips reactor, confirms trip, initiates SI; performs TRIP-1 immediate actions: trips main turbine, reports at least one 4KV vital bus energized, reports SI initiated. CRS and RO verify performance of immediate actions.<br><br>PO reports SEC loading not complete for 2A and 2B vital buses; 21 and 22 AFW pumps failed to start; 23 AFW pump started but providing no AFW flow. RO blocks 2A and 2B SECs; PO resets 2A and 2B SECs but reports 2A SEC will not reset. CRS dispatches operator to deenergize 2A SEC. After 2A SEC is deenergized, RO starts 22 AFW pump (and 21 AFW pump) — <strong>CT#1 — establish at least 22E4 lbm/hr AFW flow before transition to FRHS-1 is required.</strong><br><br>PO reports not all valve groups in Table B are in safeguards position; 2SJ12 and 2SJ13 BIT isolation valves have not opened. RO opens 2SJ12 and 2SJ13 and reports BIT flow established — <strong>CT#2 — establish flow from at least one charging/SI pump prior to transition out of TRIP-1.</strong> RO reports 21 and 22CA330s shut, containment pressure remains &lt;15 psig, no high steam flow. CRS directs ECG implementation. PO reports all 4KV vital buses energized, CAV in AP mode, 2 switchgear supply and one exhaust fan running, 2 or more CCW pumps running. RO reports RCS not aligned for Cold Leg Recirc, charging flow ≥100 gpm on SI charging flow meter, RCS pressure not &lt;1540 psig, all RCPs running with RCS temp stable at/trending to 547 °F. RO reports both RTBs open, both PZR PORVs shut with Block Valves open, RCS pressure &gt;1350 psig with seal injection to all RCPs. PO reports no faulted SGs, no SGTR indications. RO reports radiation monitor channel status (Table F): 2 or more channels rising or in warning/alarm. CRS transitions to EOP-LOCA-1, Loss of Reactor Coolant.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">SBLOCA escalation during SI termination → EOP-LOCA-2</td>
<td style="padding:6px;color:#9ca3af;">In LOCA-1: PO confirms total AFW flow ≥22E4 lbm/hr or SG NR &gt;9% in at least one SG, then maintains 19-33% level; PO reports no ruptured SGs. RO resets SI, Phase A, and Phase B isolations; opens 21 and 22CA330s. PO resets 2C SEC and reports 230V control centers reset. RO resets SGBD Sample Isolation Bypass and opens 21-24SS94s. CRS directs chemistry to sample SGs for activity and boron. RO confirms PORVs shut with Block valves open, subcooling &gt;0 °F, AFW flow &gt;22E4 lbm/hr or SG NR &gt;9%, RCS pressure stable or rising, PZR level &gt;11%. CRS transitions to EOP-TRIP-3, SI Termination.<br><br>In TRIP-3: RO resets SI/Phase A/Phase B isolations if not previously reset; opens 21 and 22CA330s if not previously performed; reports spray valves not failed open. PO resets 2C SEC and reports 230V control centers reset if not previously performed. RO stops all but one charging pump; reports RCS pressure stable or rising; aligns charging suction to RWST; opens 2CV139 and 2CV140 if shut; shuts BIT isolation valves 2SJ4, 2SJ5, 2SJ12, 2SJ13; shuts 2CV55 charging flow control valve; opens 2CV68 and 2CV69 charging discharge valves. <strong>Leak escalates to 2000 gpm equivalent when 2CV68/2CV69 are opened.</strong> RO adjusts 2CV55 to maintain PZR level &gt;25% but reports level not stable or rising. PO reports no faulted SGs. RO opens BIT isolation valves 2SJ4, 5, 12, 13, and shuts normal charging line isolation valves 2CV68 and 2CV69. CRS transitions to EOP-LOCA-2, Post LOCA Cooldown and Depressurization. Scenario terminates after the transition to LOCA-2 is made.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-4):</strong> Establish the minimum required feed flow prior to a transition to FRHS-1 being required. <em>Basis:</em> Failure to establish the required minimum feed flow rate under the postulated plant conditions results in adverse consequence(s) or significant degradation in the mitigative capability of the plant. Failure to perform the critical task represents a demonstrated inability of the crew to take an action or combination of actions that would prevent a challenge to plant safety, or to recognize a failure / incorrect auto actuation of an ESF system or component. <em>Measurable performance standard:</em> establish at least 22E4 lbm/hr AFW flow to the SGs (or 9% NR level in at least one SG) before FRHS-1 entry conditions are reached.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-6):</strong> Establish flow from at least one high-head ECCS pump before transition out of TRIP-1. <em>Basis:</em> Failure to manually start at least one Charging pump under the postulated conditions constitutes misoperation or incorrect crew performance in which the crew does not prevent degraded ECCS capacity. At least one Charging/SI pump (high-head SI pump for LP plants) can be manually started from the control room; failure to do so represents a failure of the crew to effectively direct or manipulate ESF controls that would prevent a significant reduction of safety margin beyond that irreparably introduced by the scenario, and to recognize a failure or incorrect automatic actuation of an ESF system or component. Under the postulated plant conditions, failure to manually start a Charging/SI pump (when it is possible to do so) is also a violation of the facility license condition. <em>Measurable performance standard:</em> manually open the BIT isolation valves (2SJ12, 2SJ13) and establish high-head ECCS injection flow from at least one charging/SI pump before the crew transitions out of EOP-TRIP-1.</span><br><br>
<span style="color:#c8cdd5;font-size:11px;color:#6b7280;"><em>CT numbers in parentheses are the corresponding Westinghouse ERG Rev. 2-based Critical Task procedure WCAP-17711-NP.</em></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.CVC-0001 (PZR level channel fails low → loss of charging diagnostics) → S2.OP-AB.RC-0001 (20 gpm RCS leak diagnosed) → S2.OP-AB.RAD-0001 (OHA A-6 unexpected) → S2.OP-AB.LOAD-0001 (controlled 30%/hr load reduction) → leak grows to 150 gpm, manual reactor trip and SI → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip / safety injection — AFW auto-start fails, BIT isolation valves fail; CT#1 and CT#2 performed) → <span class="hi-exam">EOP-LOCA-1</span> (Loss of Reactor Coolant — RCS pressure not &lt;1540 psig but radiation monitors rising) → <span class="hi-exam">EOP-TRIP-3</span> (SI Termination criteria met) → opening 2CV68/2CV69 escalates leak to 2000 gpm; PZR level not stable → <span class="hi-exam">EOP-LOCA-2</span> (Post LOCA Cooldown and Depressurization) → scenario terminates after the transition to LOCA-2 is made.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 15-01 NRC ESG-1 (Rev 00, 7-18-16) | <a href="/salem-study-system/exam-pdfs/2016-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer Level & Press Control]], [[Pressurizer & PRT]], [[RCS]], [[ECCS]], [[AFW]], [[SECs]], [[Containment]], [[CFCUs]], [[Radiation Monitoring]], [[RPS/SSPS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-3 — SI Termination]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related exam: [[2016 NRC Operating Exam]]
