---
title: "2012 Scenario 3 — Loss of Vacuum / Loss of Feed / Loss of Secondary Heat Sink — RCS Bleed and Feed"
category: exams
status: draft
aliases:
  - 2012 Scenario 3
  - 2012 ESG-3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — Loss of Vacuum / Loss of Feed / Loss of Secondary Heat Sink — RCS Bleed and Feed</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> 47%, BOL. Rod control is in manual for insertion of new NI currents, currently performing SC.IC-DC.NIS-0021 for 2N41. 21 Charging pump is C/T due to bio-fouling. 22 charging pump is in service. 23 charging pump is inoperable but available. 21 SGFP O/S for speed control troubleshooting, HDPs O/S, calorimetric just performed SAT IAW requirement of S2.OP-IO.ZZ-0004, Power Operations. 21 and 22 condensate pumps in service. 23A Circulator C/T for corrective maintenance. Minor CW grassing has been occurring.<br><br>
<strong>Turnover:</strong> Raise power to 51% @ 10% per hour, place all HDPs I/S, continue power ascension to 60% at 10% per hour, all IAW IOP-4. (Crew takes the watch at 48% power, BOL; power was reduced yesterday during CW grassing. 21 SGFP developed speed oscillations during the downpower and was removed from service for troubleshooting. 23A Circulator is C/T for Traveling Screen corrective maintenance. Rod control is in manual for insertion of new NI currents — SC.IC-DC.NIS-0021 for 2N41 is the last of the 4 channels to be updated and is essentially complete. All Heater Drain Pumps are O/S; 21 and 22 condensate pumps in service. The Rx fuel is conditioned to 90% power.)
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 51% at 10%/hr, place HDPs in service (normal)</li>
<li>2A1 125VDC Battery Charger trips (TS)</li>
<li>Controlling PZR pressure channel (PT-455) fails high (TS)</li>
<li>Loss of 2CW 4KV bus section 23 — two remaining "A" circulators trip; condenser vacuum degrades</li>
<li>Power reduction due to rising condenser backpressure</li>
<li><span class="hi">21 condensate pump trips — remaining condensate pump cannot supply 22 SGFP; SGFP trips on low suction pressure; crew manually trips the reactor on loss of the only operating SGFP</span></li>
<li><span class="hi">Sequential loss of all AFW (no feed after trip) — Heat Sink RED path; loss of secondary heat sink</span></li>
<li><span class="hi">No centrifugal charging pumps available — establish RCS Bleed and Feed; condensate pump recovery to a depressurized SG</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Power ascension to 51% at 10%/hr, place HDPs in service</td>
<td style="padding:6px;color:#9ca3af;">CRS directs RO to maintain Tavg/Tref in a designated band using control rods in manual, and directs RO/PO to coordinate the power ascension at 10% per hour (digital EHC must be set from 1%/min to 10%/hr). Crew raises power IAW S2.OP-IO.ZZ-0004, Power Operation, and IOP-4; PO/RO announce when the Below P-9 light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">2A1 125VDC Battery Charger trips — OHA A-41 AUX ALM SYS PRINTER and OHA B-2 2A 125VDC CNTRL BUS VOLT LO</td>
<td style="padding:6px;color:#9ca3af;">RO/PO report OHA A-41 and OHA B-2 as unexpected; PO identifies the point in alarm is the 2A1/2A2 125VDC Battery Charger Trouble and refers to the ARP (low bus voltage alarm setpoint &lt;128 VDC; current reading 127 VDC). CRS dispatches an operator to investigate, contacts WCC/Maintenance, and enters TSAS 3.8.2.3 action b — the 2A2 125VDC Battery Charger must be placed in service within 2 hours if 2A1 cannot be restored to operable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Controlling PZR pressure channel I (PT-455) fails high — RC PRESS DEVIATION HI, OHA D-8 RC PRESS HI, OHA E-42 2PR1/2 TRIP</td>
<td style="padding:6px;color:#9ca3af;">RO diagnoses PZR Pressure channel I failed high and requests permission to place the Master Pressure Controller (MPC) in manual; RO places MPC in manual and lowers demand to establish control of MPC output. CRS enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction. PO selects PZR pressure channel III for control, returns the Master Controller to automatic, and CRS directs removal of the failed channel from service IAW S2.OP-SO.RPS-0003. CRS enters the appropriate Tech Spec. (Power for 2PR6 is NOT removed during the scenario.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Loss of 2CW 4KV bus section 23 — two remaining "A" circulators trip; OHA K-27 23 STA XFMR TRBL, K-34 4KV CW BUS UNDRVOLT</td>
<td style="padding:6px;color:#9ca3af;">PO diagnoses loss of 2CW 4KV bus section 23. CRS enters S2.OP-AB.CW-0001, Circulating Water System Malfunction, based on two or more circulators out of service, and directs Attachment 1 CAS. PO confirms at least one circulator operating on each condenser; CRS dispatches operators to open hood spray bypass valves and monitor condensate pump suction. Condenser backpressure rises (limit 5.0" with Main Generator load &lt;560 MWe).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">Power reduction — rising condenser backpressure with Main Generator output ~500 MWe</td>
<td style="padding:6px;color:#9ca3af;">CRS determines a power reduction is necessary with backpressure rising and enters S2.OP-AB.LOAD-0001, Rapid Load Reduction (Attachment 1 CAS). PO initiates the load reduction; RO uses control rods in manual and boration as necessary to maintain Tavg on program (Attachment 3) and to keep rods above the RIL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 condensate pump trips — remaining condensate pump cannot supply 22 SGFP; SGFP trips on low suction; manual reactor trip</span></td>
<td style="padding:6px;color:#9ca3af;">PO reports SGFP Condensate Suction Pressure Lo console alarm (275 psig); 22 SGFP speed increases while suction pressure continues to lower. CRS enters S2.OP-AB.CN-0001, Main Feedwater/Condensate System Abnormality. The SGFP trips on low suction (&lt;215 psig sustained 10 s, or 190 psig no delay), auto-starting both MDAFW pumps. With no SGFPs running and Rx power &gt;10%, <span class="hi-exam">the crew manually trips the reactor</span>. RO performs the EOP-TRIP-1 immediate actions (trip reactor, confirm trip, trip turbine, verify 4KV vital buses energized, report SI not demanded or required).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Sequential loss of all AFW — no feed flow; Heat Sink RED path</span> <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">CRS transitions to <span class="hi-exam">EOP-TRIP-2</span>, Reactor Trip Response (no SI actuated/required). PO reports no AFW flow: 21 AFW pump running with no flow but adequate discharge pressure, 22 AFW pump tripped, 23 AFW pump did not auto-start. CRS directs PO to start 23 AFW pump and defeat the 21 AFW pump Pressure Override; <span class="hi-exam">PO establishes AFW flow (≥22E4 lbm/hr) (CT#1)</span>. The last AFW pump (23) then develops a speed control problem driving its speed demand to zero, producing total AFW flow &lt;22E4 lbm/hr with all SG NR levels &lt;9% — a Heat Sink RED path. CRS transitions to <span class="hi-exam">EOP-FRHS-1</span>, Loss of Secondary Heat Sink.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">No centrifugal charging pumps available — RCS Bleed and Feed; condensate pump recovery</span> <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">In FRHS-1 the crew confirms it was not operator action that lowered AFW &lt;22E4 lbm/hr, RCS pressure &gt; all SGs, RCS Thot &gt;350°F, and no centrifugal charging pumps available (22 charging pump trips ~5 min after the Rx trip and letdown auto-isolates; 21/23 unavailable). CRS proceeds to FRHS-1 Step 23, Bleed and Feed initiation. PO verifies SI valves in safeguards position per Table B; <span class="hi-exam">the crew establishes RCS Bleed and Feed by opening both PZR PORV stop valves and both PZR PORVs before the PORVs would open automatically (CT#2)</span>. The crew then depressurizes one selected SG (steam dumps if vacuum/circulator available, otherwise MSLI on all loops and fully open the selected SG MS10) and establishes Condensate flow to the depressurized SG (open selected BF40, release BF22, open 21/22 CN48s and close 21/22 CN32s). Scenario terminates when feed flow is established to at least one SG and SG WR level is rising.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (TRIP-2 Basis):</strong> <span class="hi-exam">Establish the minimum required AFW flow (22E4 lbm/hr) prior to a transition to FRHS-1 being required.</span> <em>Bases:</em> Failure to establish the minimum required AFW flow for the secondary heat sink degrades the heat removal capability of the plant. Because the secondary heat sink is required but not satisfactorily provided, the RCS will heat up. Eventually, the core cooling CSF will be challenged. Ultimately, the fuel matrix/clad (a fission product barrier) will be challenged. (See PWROG Critical Task Book E-O-F) <span class="hi-exam">Window is event-driven — establish ≥22E4 lbm/hr AFW flow before a transition to FRHS-1 is required.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (FR-H.1-B):</strong> <span class="hi-exam">Establish RCS Bleed and Feed before PZR PORVs open automatically.</span> <em>Basis:</em> Failure to establish RCS bleed and feed before automatic opening of the PORVs reduces the probability of success to establish a heat sink for the core. This constitutes a "significant reduction of the safety margin beyond that irreparably introduced by the scenario." <span class="hi-exam">Window is event-driven — initiate Bleed and Feed before the PZR PORVs would lift automatically.</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]] (controlling PZR pressure channel I fails high — MPC to manual, select channel III, remove failed channel, enter TS) → [[AB.CW-0001 — Circulating Water Malfunction]] (loss of 2CW 4KV bus section 23, two "A" circulators trip — Attachment 1 CAS, vacuum degrades) → [[AB.LOAD-0001 — Rapid Load Reduction]] (rising backpressure ~500 MWe — manual rods, boration, reduce load) → [[AB.CN-0001 — Condensate System Abnormality]] (21 condensate pump trips, SGFP suction pressure lowers, SGFP trips) → manual reactor trip on loss of the only operating SGFP with Rx power &gt;10% → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — immediate actions; SI not demanded or required) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response — no SI; no AFW flow: 22 AFW pump tripped, 23 did not auto-start, 21 running with no flow → <strong>CT#1</strong>: start 23 AFW pump and defeat 21 AFW pump pressure override to establish ≥22E4 lbm/hr) → 23 AFW pump speed-control failure drives flow to zero; total AFW &lt;22E4 lbm/hr with all SG NR levels &lt;9% ⇒ Heat Sink RED path → <span class="hi-exam">EOP-FRHS-1</span> (Loss of Secondary Heat Sink — RCS pressure &gt; all SGs, Thot &gt;350°F, no centrifugal charging pumps available ⇒ Step 23 Bleed and Feed → <strong>CT#2</strong>: open both PZR PORV stop valves and PORVs before they would open automatically; then depressurize one SG and establish condensate feed) → terminate when feed flow to at least one SG is established and SG WR level is rising. The Heat Sink RED path is identified by the crew before the STA arrives (STA arrives in the control room 10 minutes after being paged); [[EOP-CFST-1 — Critical Safety Function Status Trees]] frames the Heat Sink RED path that drives the FRHS-1 entry.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 11-01 NRC ESG-3, Rev. 01 (New Issue for 09-01 ILOT CERT Exam; Rev 01 6/2012 replaced CFCU trip with 125VDC battery charger trip, added 22 charging pump I/S and subsequent trip to cause immediate Bleed and Feed requirement in FRHS-1), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2012-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[AFW]], [[Circ Water]], [[Steam Dumps]], [[Main Steam]], [[Pressurizer Level & Press Control]], [[DC Power]], [[CVCS]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.CN-0001 — Condensate System Abnormality]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2012 NRC Operating Exam]]
