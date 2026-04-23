---
title: "2019 Scenario 3 — ATWS / Stuck-Open PORV"
category: exams
status: draft
aliases:
  - 2019 Scenario 3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — ATWS / Stuck-Open PORV</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-258: 89.5% power, MOL; 23 Charging Pump is in service. The following equipment is out of service: 21 Charging pump C/T for oil cooler cleaning, 21A CW pump C/T for waterbox cleaning, 21 BAT pump C/T for pump seal replacement, 22 vacuum pump C/T for pump replacement.<br><br>
<strong>Turnover:</strong> Main turbine valve testing was completed last shift. Calorimetric was performed SAT and MSRs are in Auto. The crew is directed to continue power ascension to 100% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using control rods and turbine load control.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 100% at 10% per hour</li>
<li>Containment Pressure Channel I fails high (TS only)</li>
<li>22 SI Accumulator gas leak (TS exercised)</li>
<li>Loss of Main Condenser vacuum due to loose tube plug — power reduction to stabilize</li>
<li>Two dropped control rods — reactor fails to trip (ATWS)</li>
<li>Rod speed controller fails at 8 spm in Auto — operator inserts rods in Manual at 48 spm</li>
<li>2CV175 Rapid Boration valve fails to open — Rapid Borate via RWST</li>
<li>PZR PORV 2PR1 fails open during EOP-TRIP-2</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Power ascension to 100% at 10%/hr</td>
<td style="padding:6px;color:#9ca3af;">Crew discusses reactivity plan for power ascension using control rods and turbine load control. RO withdraws control rods in Manual to maintain Tavg on program IAW S2.OP-SO.RCS-0001, Rod Control System Operation. PO raises turbine load using DEHC HMI panel IAW S2.OP-SO.TRB-0001, Turbine-Generator Startup Operations. Crew monitors proper response for Tavg, reactor power, and rod position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Containment Pressure Channel I fails high (TS only)</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA alarms C-6 CNTMT PRESS HI-HI and D-40 SUBCLG CH A MARGIN LO. RO reports Containment Pressure Channel I console indication has failed high. RO may report Subcooling Margin monitor Channel A reading about 0.7 and Adverse button illuminated. Crew refers to OHA ARPs and determines alarm is due to failed instrument channel, not a valid signal. Crew reviews S2.OP-SO.RPS-0005 for placing channel in tripped condition. CRS reviews Tech Spec and enters TSAS 3.3.2.1.b, Action 16 (6 hour LCO).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">22 SI Accumulator gas leak</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected 22 Accumulator low pressure alarm. PO reports ARP directs restoration of accumulator pressure IAW S2.OP-SO.SJ-0002, Accumulator Operations. PO restores 22 Accumulator pressure by opening 2NT32 nitrogen supply valve and 22SJ93 nitrogen supply valve, then closing 22SJ93 and 2NT32 when desired pressure is reached. PO reports 22 accumulator pressure is lowering very slowly. CRS assigns operating band for RO to maintain accumulator pressure. CRS contacts WCC to investigate leak. CRS recognizes TSAS 3.5.1.d Action a (24 hour LCO) was applicable for the time 22 Accumulator gas pressure was <595.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Loss of Main Condenser vacuum (missing tube plug)</td>
<td style="padding:6px;color:#9ca3af;">PO reports rising condenser backpressure. CRS enters S2.OP-AB.COND-0001, Loss of Condenser Vacuum. CRS assigns responsibility for CAS. CRS sends operators to perform local vacuum checks IAW Attachment 2. PO reports NO abnormal vacuum pump indications. PO reports normal CW system operation. PO starts all available vacuum pumps, manually opens AR25 valves as required, reports condenser vacuum stabilizes then continues to degrade. CRS enters S2.OP-AB.LOAD-0001, Rapid Load Reduction. CRS directs a load reduction to stabilize condenser backpressure. RO calculates required boron addition, CRS verifies. RO commences boration. PO initiates load reduction at rate specified by CRS. Field report identifies missing tube plug — backpressure recovers after tube plug reinstalled. RO energizes all PZR heaters. RO inserts control rods to maintain Tavg within prescribed band.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Two dropped rods — ATWS</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports two control rods fully inserted and a demand for reactor trip is present. RO reports reactor failed to auto trip — ATWT has occurred. RO reports Rx trip handles did not trip the Rx. Crew recognizes ATWT. RO reports RTBs will not open. RO reports PZR heater bus breakers will not open. RO trips the Main Turbine. Rod speed controller fails at 8 spm in Auto — RO recognizes failure and inserts rods in Manual at 48 spm. (Critical Task #1 evaluated here.) CRS directs operators to locally open reactor trip breakers and de-energize RD MG sets.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">EOP-FRSM-1 — Rapid Boration with 2CV175 failure</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports immediate actions of EOP-TRIP-1 are complete. CRS enters EOP-FRSM-1, Response to Nuclear Power Generation. PO starts 21 and 22 AFW pumps, reports total AFW flow. RO/PO starts 22 Charging pump (21 CV pump is C/T). PO reports SI has not actuated. PO starts both boric acid pumps in fast speed (21 BAT pump is C/T — only 22 BAT pump available). PO reports 2CV175 Rapid Borate Stop Valve failed to open, NO flow indicated on Rapid Borate flowmeter. Crew establishes Rapid Boration using RWST flow path: PO isolates letdown by closing 2CV3, 2CV4, 2CV5, 2CV2 and 2CV277, and 2CV7. PO opens 2SJ1 and 2SJ2, and 2SJ4, 2SJ5, 2SJ12, and 2SJ13. PO closes 2CV40 and 2CV41, and 2CV68 and 2CV69. Locally dispatched operator opens Rx Trip breakers. RO reports PZR pressure <2335 psig, both PZR PORVs closed and block valves open, 2VC5 and 2VC6 closed, RTBs and Rod Drive MG set breakers open, all turbine stop valves closed, PRNIs <5%, IRNI SUR is negative. CRS directs chemistry to sample RCS for boron and directs performance of SDM.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">Transition from FRSM-1 to TRIP-1 then TRIP-2</td>
<td style="padding:6px;color:#9ca3af;">CRS returns to EOP-TRIP-1. RO performs/verifies immediate actions of EOP-TRIP-1. CRS verifies TRIP-1 immediate actions are complete. RO reports SI is not actuated and not required by 2RP4 or First Out OHA. CRS transitions to EOP-TRIP-2, Reactor Trip Response. RO makes page announcement. PO reports total AFW >22E4 lbm/hr and stops both SGFPs. PO lowers 23 AFW speed demand to minimum speed. RO reports all RCPs are running, Tavg stable or trending to 547 F, both RTBs are open, all rods have inserted.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PZR PORV 2PR1 fails open</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports PZR level >17%. RO reports unexpected OHA for 2PR1/2 NOT CLSD. RO reports PZR pressure lowering and identifies 2PR1 failed open. RO reports 2PR1 will NOT close in manual. RO closes PORV Block valve 2PR6. (Critical Task #2)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-52):</strong> Insert negative reactivity into the core by at least one of the following methods prior to dispatching operators to locally trip the reactor and/or turbine: de-energize RD MG sets, insert control rods, or establish Emergency Boration flow to the RCS. Safety significance: failure to insert negative reactivity results in the reactor remaining critical or returning to a critical condition, constituting incorrect reactivity control. Cues: two dropped rods with reactor trip demand present but reactor fails to trip by all means from the control room. Measurable criteria: rod position indication shows rods moving inward (manual insertion at 48 spm), and/or emergency boration flow path established with RWST aligned to charging.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-10):</strong> Close the block valve upstream of the stuck-open PZR PORV (2PR1) by the completion of Step 9 of TRIP-2. Safety significance: failure to close the block valve results in unnecessary continuation of the degraded RCS fission product barrier — crew fails to prevent degradation of a barrier to fission product release. The RCS barrier can be restored to full integrity by closing the block MOV. Cues: OHA 2PR1/2 NOT CLSD, PZR pressure lowering, PORV will not close in manual. Measurable criteria: 2PR6 block valve closed.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">AB.COND-0001 (loss of condenser vacuum) → AB.LOAD-0001 (rapid load reduction to stabilize backpressure) → two dropped rods / ATWS → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — trip fails) → <span class="hi-exam">EOP-FRSM-1</span> (Response to Nuclear Power Generation — manual rod insertion, Rapid Boration via RWST, locally trip RTBs) → return to <span class="hi-exam">EOP-TRIP-1</span> (reactor confirmed tripped, no SI required) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response — 2PR1 PORV fails open, close block valve 2PR6)</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: Modified / ESG-3 | 17-01 NRC-3 | <a href="/salem-study-system/exam-pdfs/2019-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[ECCS]], [[CVCS]], [[AFW]], [[Containment]], [[Condenser Air Removal]], [[Control Rod Drive]], [[RPS/SSPS]], [[Main Turbine]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related procedures: [[AB.COND-0001 — Loss of Condenser Vacuum]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.ROD-0002 — Dropped Rod]]
- Related exam: [[2019 NRC Operating Exam]]
