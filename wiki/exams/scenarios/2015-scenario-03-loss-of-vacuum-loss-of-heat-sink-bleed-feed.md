---
title: "2015 Scenario 3 — Loss of Vacuum / Stuck Rod / Loss of Heat Sink / Bleed and Feed"
category: exams
status: draft
aliases:
  - 2015 Scenario 3
  - 2015 ESG-3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — Loss of Vacuum / Stuck Rod / Loss of Heat Sink / Bleed and Feed</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in Mode 1 at 85% power, BOL. RCS Boron 893 ppm. 1010 MWe. Control Bank D at 178 steps withdrawn. Xenon building in at 12 ppm per hour. A 200 gallon dilution for temperature control was completed 30 minutes ago. Most limiting LCO: TS 3.5.2.a Action a for 22 charging pump CIT — expires in 70 hours. No evolutions/procedures/surveillances in progress. Power was reduced to 85% IAW S2.OP-AB.CN-0001 when 23 Condensate pump tripped last shift. 22 Charging pump is CIT for oil cooler cleaning. 23 Condensate pump is CIT (tripped last shift). 26 SW pump is CIT for strainer cleaning. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs. No radwaste discharges in progress.<br><br>
<strong>Turnover:</strong> The crew will take the watch at 85% power, BOL. 22 Charging pump is CIT for biofouling. 26 SW pump is CIT for strainer cleaning. 23 Condensate pump CIT. Power is reduced due to 23 condensate pump trip yesterday.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li><span class="hi">25 SW pump discharge strainer clogging</span></li>
<li><span class="hi">Loss of Condenser vacuum</span> → downpower</li>
<li><span class="hi">Stuck Control rod during downpower</span></li>
<li><span class="hi">Condensate pump trip → SGFP trip</span> (manual reactor trip)</li>
<li>2B 4KV vital bus UV (Blackout loading)</li>
<li><span class="hi">Loss of all AFW with no centrifugal charging pumps available</span></li>
<li><span class="hi">FRHS Bleed and Feed with Condensate pump recovery</span></li>
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
<td style="padding:6px;color:#c8cdd5;">25 SW pump discharge strainer high D/P</td>
<td style="padding:6px;color:#9ca3af;">RO notices lowering SW header pressures, or reports OHA B-16, 24-26 SW STRAIN TRBL, as unexpected when it occurs. CRS dispatches an operator to investigate (field reports 25 SW pump strainer is in auto with backwash red light on, flow heard through 25SW24 backwash valve, strainer shaft NOT turning with strainer motor running, strainer D/P ~10.5 psid). CRS directs local operator to collect Trip/High D/P Observation IAW S2.OP-SO.SW-0001, Service Water Pump Operation (Attachment 2). CRS determines manual backwash cannot be performed with strainer not turning, and determines 25 SW pump is inoperable based on D/P higher than 10 psid across the strainer IAW S2.OP-AR.ZZ-0002, Overhead Annunciators Window B. CRS contacts Maintenance to assist on 26 SW pump. CRS enters LCO 3.7.4 based on not having any operable SW pump powered from "C" vital bus, leaving only ONE SW loop operable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">24 Vacuum pump trips</span> — 24AR25 fails to auto close; condenser vacuum slowly lowers</td>
<td style="padding:6px;color:#9ca3af;">PO reports trip of 24 Vacuum pump and that 24AR25 has not automatically shut. CRS directs PO to shut 24AR25 (PO reports 24AR25 will not shut, condenser backpressure slowly rising). CRS enters S2.OP-AB.COND-0001, Loss of Condenser Vacuum, and directs Attachment 1 CAS. CRS dispatches operators for Attachment 2 Local Vacuum checks (only 24AR25 found open with 24 vacuum pump secured as abnormal). CRS determines the vacuum problem is not Circ Water related and directs PO to start all available vacuum pumps; PO reports backpressure cannot be maintained stable or lowering and the Turbine is latched. CRS directs RO and PO to coordinate a power reduction (with a target point and rate) to attempt to stabilize condenser backpressure. CRS may enter S2.OP-AB.LOAD-0001, Rapid Load Reduction — PO initiates a turbine load reduction; RO maintains Tavg on program with rods/boration, energizes PZR heaters, and calculates/initiates boration at the CRS-directed rate. Crew ensures Attachment 4 Condenser Backpressure Limits are monitored and not exceeded; PO removes SGBD from service (closes 21-24GB4s / 21-24GB185s at 120°F) and bypasses the Polisher at 140°F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Stuck Control Bank D rod (rod 202) during downpower</td>
<td style="padding:6px;color:#9ca3af;">RO reports rod 202 suspected stuck when expected rod movement does not occur. When the stuck rod is verified to not be moving as expected, CRS enters S2.OP-AB.ROD-0001, Immovable/Misaligned Control Rods. RO places the Rod Bank Selector Switch in manual. CRS determines the load reduction must continue and directs RO to raise the boration rate (and PO to lower the turbine load-reduction rate if necessary) to maintain Tavg within ±1.5°F of program. RO reports OHA E-40 ROD BANK URGENT FAIL clear; RO monitors QPTR and AFD. CRS contacts Rx Engineering, which confirms the misalignment via BEACON, and enters LCO 3.1.3.1 for one misaligned rod. If power reduction stopped &gt;75% power, CRS directs power reduction to &lt;75% RTP to comply with TS 3.1.3.1 Action c.3.d.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 Condensate pump trips → both SGFPs trip on low suction pressure</span> — manual reactor trip</td>
<td style="padding:6px;color:#9ca3af;">SGFP suction pressure rapidly and irreversibly lowers. PO may open 21-23CN108 Condensate Polisher Bypass valves, then reports SGFP suction pressure continues to degrade and both SGFPs have tripped. With no SGFP operating &gt;P-10 (10% power), the crew initiates a manual reactor trip (the Rx will auto-trip on lo-lo SG NR level if a manual trip is not performed). RO performs Immediate Actions of EOP-TRIP-1: confirms the Rx trip, trips the Main Turbine, reports at least one 4KV Vital bus energized, reports SI has not actuated nor is it required. CRS and RO verify performance of immediate actions; CRS transitions to EOP-TRIP-2, Reactor Trip Response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">2B 4KV vital bus undervoltage — 2B EOG starts and loads Blackout</td>
<td style="padding:6px;color:#9ca3af;">When the Main Generator output breakers open 30 seconds after the Turbine trip, the 2B 4KV vital bus de-energizes. PO reports 2B 4KV vital bus has loaded in Blackout mode (TRIP-2 Step 12 governs Blackout loading response). PO reports Blackout loading is not complete and available equipment failed to start; PO resets 2B SEC (blocking 2B SEC on 2RP1 is not directed since no SI signal is present). PO reports 21 charging pump started then tripped, and 22 AFW pump will not start. With Tavg trending to/at 547°F and both RTBs open, PO ensures 21-24BF19/BF40/BF22 shut (Tavg &lt;554°F). RO reports PZR level &gt;17% with charging flow established (maintains PZR level ~22%), letdown established, and PZR pressure stable/trending to 2235 psia. PO maintains AFW flow &gt;22E4 lbm/hr until at least one SG NR level is &gt;9%, then maintains intact SG NR levels 9-33%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;">Loss of all AFW — 21 AFW pump trips 4 min after trip; 23 AFW pump overspeeds and trips; no centrifugal charging pumps available</td>
<td style="padding:6px;color:#9ca3af;">21 AFW pump trips 4 minutes after the Rx trip, leaving 23 AFW pump as the only operating aux feed pump; when SG NR levels recover but remain &lt;9%, 23 AFW pump overspeeds and trips. Crew determines a RED path is present when AFW flow is &lt;22E4 lbm/hr and ALL SG NR levels are &lt;9% (CFSTs in effect after transition out of TRIP-1). CRS transitions to EOP-FRHS-1, Response to Loss of Secondary Heat Sink. PO reports loss of all AFW was not due to operator action. RO reports RCS pressure &gt; all intact/ruptured SG pressures and RCS Thots &gt;350°F; RO reports neither 21 nor 22 charging pump is available.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">FRHS Bleed and Feed <span class="hi-exam">(CT#1)</span> → Condensate System recovery to a SG, then close PZR PORVs <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">With no centrifugal charging pumps available, CRS goes to FRHS-1 Step 23 Bleed and Feed initiation. RO stops all RCPs, initiates SI, confirms both PZR PORV Stop valves open and <span class="hi-exam">opens BOTH PZR PORVs (CT#1)</span>. PO performs SI Valve verification (APPX-3); RO resets SI and Phase A, reports Phase B reset, opens 21/22CA330; PO resets all SECs and 230V control centers as required; crew maintains ECCS flow and PZR PORVs open. CRS determines the only success path is Condensate pump recovery (SGFPs unavailable on no SW flow to TGA; all AFW pumps tripped) and goes to FRHS-1 Step 20. CRS selects the SG with the LOWEST level (22 or 24 SG) to depressurize. RO initiates MSLI for all loops except the selected SG, places steam dumps in manual at 0% then in MS Pressure Control, adjusts demand to 25% and bypasses Tavg at 543°F. Operator opens the selected SG BF40 or BF19; PO ensures BF13 open, opens 21/22CN48s (SGFP bypass) and shuts 21/22CN32s (SGFP suction). When condensate flow is indicated to the selected SG and WR level rises, PO maintains selected SG pressure &lt;575 psig. CRS goes to Step 36 and feeds the selected SG based on CET trend (max rate if CETs rising; desired rate if CETs lowering, 1-5E4 lbm/hr if WR level &lt;11%). When the selected SG NR level reaches 9% and CETs/RCS Thots are dropping with subcooling &lt;50°F, RO shuts ONE PORV, aligns charging pump suction to the RWST, confirms 2CV139/2CV140 open, then <span class="hi-exam">shuts the remaining open PORV (CT#2)</span>. Scenario terminates when both PZR PORVs are shut.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-46):</strong> Initiate RCS bleed and feed so that the RCS depressurizes sufficiently for SI pump injection into RCS. <em>Bases:</em> Failure to initiate RCS bleed and feed before the RCS saturates at a pressure above the shutoff head of the high-head ECCS pumps results in significant and sustained core uncovery. If RCS bleed is initiated so that the RCS is depressurized below the shutoff head of the high-head ECCS pumps, then core uncovery is prevented or minimized. (In this scenario, with all AFW lost and no centrifugal charging pumps available, the crew stops all RCPs, initiates SI, and opens both PZR PORVs at FRHS-1 Step 23.) <span class="hi-exam">Not time-critical</span> — performed before the RCS saturates above the high-head ECCS shutoff head.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-47):</strong> Close all PRZR PORVs and reactor vessel head vent valves before the end of the scenario. <em>Bases:</em> Failure to close the RCS vent paths (such as head vents and PRZR PORVs) under the postulated plant conditions constitutes misoperation or incorrect crew performance that fails to prevent "degradation to any barrier to fission product release." In this case, the RCS fission-product barrier can be restored to full integrity only if the PRZR PORVs and the reactor vessel head vents are closed. Failure to close the RCS vent paths also results in the crew having to transition to LOCA-1 because of the continuing LOCA, instead of being able to transition to TRIP-3 for SI termination. Thus, failure to perform the critical task "necessitates the crew taking compensating action that would complicate the event mitigation strategy." (The crew closes the PORVs once secondary heat sink is re-established via Condensate flow and the selected SG NR level reaches 9%.) <span class="hi-exam">Not time-critical</span> — must be completed before the end of the scenario.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.SW-0001]] / [[S1.OP-SO.SW-0001]] (25 SW pump strainer high D/P — 25 SW pump inoperable, LCO 3.7.4) → [[AB.COND-0001]] (24 Vacuum pump trip / 24AR25 fails shut — vacuum degrading) → [[AB.LOAD-0001]] (power reduction to stabilize backpressure) → [[AB.ROD-0001]] (stuck Control Bank D rod 202 — continue downpower on boration, LCO 3.1.3.1) → 22 Condensate pump trip → both SGFPs trip on low suction pressure; no SGFP &gt;P-10 → manual reactor trip → <span class="hi-exam">EOP-TRIP-1</span> (immediate actions; SI not required) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response; 2B 4KV vital bus UV / Blackout loading per Step 12; reset 2B SEC) → 21 AFW pump trips 4 min post-trip, 23 AFW pump overspeeds/trips → loss of all AFW; AFW flow &lt;22E4 lbm/hr with all SG NR &lt;9% → <span class="hi-exam">CFST Heat Sink RED path</span> → <span class="hi-exam">EOP-FRHS-1</span> (Response to Loss of Secondary Heat Sink; no centrifugal charging pumps available → Step 23 Bleed and Feed = <strong>CT#1</strong>: stop all RCPs, initiate SI, open both PZR PORVs) → only success path is Condensate recovery → depressurize lowest-level SG, establish Condensate flow, restore secondary heat sink → at selected SG NR level 9% with CETs/Thots dropping, close both PZR PORVs = <strong>CT#2</strong> → terminate. [[EOP-CFST-1]] status trees drive the FRHS-1 entry (Heat Sink RED path).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 14-01 ILOT NRC ESG-3, Rev. 00 (New issue for 14-01 ILOT NRC Exam) | <a href="/salem-study-system/exam-pdfs/2015-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[Condenser Air Removal]], [[Feed & Condensate]], [[Control Rod Drive]], [[AFW]], [[CVCS]], [[ECCS]], [[SECs]], [[EDGs]], [[4KV]], [[Steam Generator & Blowdown]], [[Steam Dumps]], [[Pressurizer & PRT]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.COND-0001 — Loss of Condenser Vacuum]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AB.CN-0001 — Condensate System Abnormality]], [[S1.OP-SO.SW-0001 — Service Water Pump Operation]], [[S2.OP-SO.SW-0005 — Service Water System Operation]], [[S2.OP-IO.ZZ-0004 — Power Operation]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2015 NRC Operating Exam]]
