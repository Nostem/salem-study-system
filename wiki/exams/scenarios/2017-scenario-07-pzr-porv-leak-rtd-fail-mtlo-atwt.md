---
title: "2017 Scenario 7 — PZR PORV Leak / 22 RC Loop RTD Fail High / Loss of MTLO / ATWT"
category: exams
status: draft
aliases:
  - 2017 Scenario 7
  - 2017 ESG-7
  - 15-01 NRC Retake ESG-7
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 7 — PZR PORV Leak / 22 RC Loop RTD Fail High / Loss of MTLO / ATWT</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 5 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in MODE 1 at 76% power, EOL. RCS Boron 107 ppm (Attachment 1 lists "RCS BORON: 107 MWe 880" — i.e., 107 ppm boron, 880 MWe / actual 75% per Attachment header). Power had been reduced to 48% one week ago for repairs on 21 SGFP casing. Both SGFPs are in service and the unit is being returned to full power. A power ascension at 10%/hr is in progress and on hold for shift turnover. Xenon is building in at 4 pcm/hr. Control rods will be withdrawn from 160 to 227 as needed for AFD and temperature control and to establish ARO prior to 100% power. Polisher is in service. Steam Generator Blowdown to condenser at 35K per loop. Unit 1 and Hope Creek at 100% power. No discharges in progress. No most-limiting LCO in effect. (Attachment 1 — Unit Two Plant Status; IC-232.)<br><br>
<strong>Turnover:</strong> The crew is directed to raise power to 89% @ 10%/hr IAW S2.OP-IO.ZZ-0004, Power Operation. Step 4.1.20 is complete; S2.OP-IO.ZZ-0004 is open and marked up complete to Step 4.1.21. Note: T-error will be –0.6°F high when crew assumes the watch.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Raise power (10%/hr power ascension IAW S2.OP-IO.ZZ-0004)</li>
<li><span class="hi">PZR PORV 2PR2 leaking</span> — crew enters AB.PZR-0001, isolates by closing both PORV stop valves and re-opening 2PR6, identifies 2PR2 leaking, CRS enters TSAS 3.4.5 action a</li>
<li><span class="hi">22 RC Loop RTD fails high</span> (continuous inward rod motion) — crew enters AB.ROD-0003, places rods in manual, defeats failed Loop 22 DT/Tave channels, removes 22 loop RCS temperature channel from service IAW S2.OP-SO.RPS-0002, CRS enters TSAS 3.3.1.1 Action 6 and 3.3.2.1 Action 19</li>
<li><span class="hi">Loss of Main Turbine Lube Oil</span> — ABOP and HP Seal Oil Backup pump auto-start, crew enters AB.TL-0001 then AB.LOAD-0001 to perform power reduction; main turbine bearing vibrations rise toward trip criteria (9 mils) requiring Rx trip with Rx power >P-9</li>
<li><span class="hi">ATWT</span> — all attempts to trip the Rx fail (Rx Trip Handles, RTBs, RDMG set breakers); RO trips Main Turbine and inserts rods, CRS enters EOP-FRSM-1; 22 AFW pump pressure override fails and FW Isolation isolates main feedwater (CT#1 — start AFW pumps to establish 44E4 lbm/hr); Rapid Boration with both BAT pumps and rod insertion (CT#2); RTBs opened locally, return to EOP-TRIP-1</li>
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
<td style="padding:6px;color:#c8cdd5;">Power Ascension (10%/hr)</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs RO and PO on power ascension. RO provides reactivity plan for power ascension. (Note: Manual rod control may be used, but is not expected to be based on temperature error. T-err is &gt;0°F and rising.) PO initiates a turbine power ascension at 10% per hour. (Note: The Main Turbine is set up for a SGFP runback when crew takes the watch. PO must change load change rate from 15% per minute to 10% per hour.) RO either announces expected and actual auto rod movement, or withdraws rods in manual with CRS concurrence to maintain Tavg on program if required.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PZR PORV 2PR2 leak</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports lowering PZR pressure, or PORV tailpipe temp has risen, or charging flow rising, or lower spray valve demand, or PRT indications of a 2PR2 leak. (Note: AB.RC-1 may be entered if PORV leak is not promptly identified, but AB.PZR should be entered when PORV leak is identified.) CRS enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction, and directs initiation of Attachment 1 CAS. CRS evaluates stopping the Load Ascension anytime during implementation of S2.OP-AB.PZR-0001. RO reports POPS NOT in service, PZR Pressure Control channel has NOT failed, MPC has NOT failed, a PORV is NOT failed (initially). RO closes both PORV stop valves. RO opens 2PR6 and reports tailpipe temperatures are still lowering. RO opens 2PR7 and reports tailpipe temperatures are rising. RO closes 2PR7 and reports lowering PORV tailpipe temperature. RO reports that PZR PORV 2PR2 is leaking. CRS enters TSAS 3.4.5 action a for 2PR2.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">22 RC Loop RTD fails high (continuous inward rod motion)</td>
<td style="padding:6px;color:#9ca3af;">RO reports control rods inserting at 72 spm, verifies no runback in progress, gains concurrence from CRS and places control rods in manual. CRS enters S2.OP-AB.ROD-0003, Continuous Rod Motion. RO reports rod motion stopped, rod motion was inward, NO NI failures, 22 loop Tavg failed high and NO dilution in progress. RO places Master Flow Controller to manual and adjusts charging flow to return PZR level to program using Att. 2. RO selects Deviation Defeat for Loop 22 DT and Tave. RO selects recorders to channel other than 22 loop. RO returns Master Flow Controller to auto when PZR level is on program. RO reports control rods are above the RIL. RO withdraws control rods to establish Tave within 1.5°F of program. RO verifies Tave within 1.5°F of program and restores the Rods to Auto. CRS evaluates placing Rod Control to Automatic Control. CRS initiates removing 22 loop RCS temperature channel from service IAW S2.OP-SO.RPS-0002. CRS enters TSAS 3.3.1.1 Action 6, and 3.3.2.1 Action 19.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Loss of Main Turbine Lube Oil</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports auto start of ABOP and HP Seal Oil Backup pump and reports lube oil header pressure rising or stable. (Note: The malfunction will cause oil pressure to lower to the start setpoint for the 2 oil pumps (12 psig), and the auto start will restore header pressure.) CRS enters S2.OP-AB.TL-0001, Loss of Main Turbine Lube Oil, and directs initiation of AB.TL CAS. PO reports bearing pressure is NOT below 12 psig. CRS reports that auto start of ABOP or HP Seal Oil BU pump requires a turbine shutdown be performed. PO reports the ABOP and HP Seal Oil Backup pumps have started, the Main Turbine is latched, and lube oil reservoir level is stable. PO initiates monitoring of Main Turbine parameters IAW Attachment 2. CRS enters S2.OP-AB.LOAD-0001, Rapid Load Reduction, to perform the power reduction. RO calculates boron addition required for power reduction. PO reports rising vibrations on turbine bearings. CRS directs power reduction at rate &lt;5% per minute. (Note: Since the power reduction will be to &lt;50% where AFD Tech Spec is no longer applicable, AFD concerns should not impede the power reduction.) RO maintains Tavg/Tref mismatch at minimum value by ensuring control rod motion initiates when expected. PO monitors SGFP suction pressure to ensure it remains &gt;300 psig. PO monitors condensate pump suction temperatures. CRS briefs contingency actions if turbine vibrations continue to rise. CRS may raise the power reduction rate based on rising vibrations. PO reports unexpected OHA H-35 TSI TRBL. PO continues to keep CRS updated with rising vibration status. CRS determines deteriorating conditions require removing the main turbine from service. CRS directs RO to trip the Rx and perform immediate actions of 2-EOP-TRIP-1, Reactor Trip or Safety Injection.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ATWT — all attempts to trip the Rx fail; CT#1 (AFW) and CT#2 (negative reactivity)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO attempts to trip the reactor with Rx Trip Handle and reports the reactor has NOT tripped. Crew recognizes ATWT. RO continues attempts to trip the reactor by: using the other Rx Trip Handle; opening Reactor Trip Breakers; opening RDMG set power supply breakers. RO reports all attempts to trip the reactor have failed. RO trips the Main Turbine. RO either ensures automatic rod motion occurs or inserts control rods in manual. (Note: Automatic rod insertion allows for a faster rod speed of 72 spm vs. Manual rod speed of 48 spm.) RO reports immediate actions of 2-EOP-TRIP-1 are complete. CRS enters 2-EOP-TRIP-1, Reactor Trip or Safety Injection. RO reports reactor will NOT trip, Main Turbine is tripped, rod insertion is occurring. CRS enters 2-EOP-FRSM-1, Response to Nuclear Power Generation. PO starts 21 and 22 AFW pumps running, and reports that 22 AFW pump is NOT providing flow. (If attempted, PO reports Pressure Override circuit cannot be bypassed.) PO reports AFW flow is &lt;44E4 lbm/hr, and STARTS 23 AFW pump. <strong>CT#1 — start AFW pumps to establish 44E4 lbm/hr AFW flow before completion of FRSM-1 step 2.</strong> RO reports lowering rod speed not consistent with plant conditions, and receives permission to place rods in manual (if not in manual already). RO inserts control rods until RTBs are open. <strong>CT#2 — insert negative reactivity into the core by inserting control rods or establishing emergency boration to the RCS prior to exiting FRSM-1.</strong> RO reports that both Boric Acid pumps are in FAST speed. PO opens 2CV175 and closes 21 and 22CV160 to establish Rapid Boration. RO reports PZR pressure &lt;2335 psig and both PZR PORVs shut. RO reports 2PR6 is open with power, and 2PR7 is closed due to leaking 2PR2 PORV. PO reports 2VC5 and 2VC6 are shut. RO reports reactor trip breakers remains shut. If not previously performed, crew dispatches an operator to locally open RTBs and RDMG set motor and generator breakers. PO reports MT Stop valves are shut. RO reports indications that RTBs have been opened, and RDMG sets have been (deenergized). RO reports all PRNI channels &lt;5% power and IR SUR negative. CRS directs chemist (sample). CRS directs calculation of SDM. CRS continues boration as required.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-51):</strong> Start AFW pumps to establish at least 44E4 lbm/hr AFW flow before completion of FRSM-1 step 2. <em>Basis:</em> Failure to start at least the minimum required number of AFW pumps under the postulated plant conditions can lead to violation of the RCS emergency stress limit.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-52):</strong> Add negative reactivity from rod insertion or emergency boration. <em>Basis:</em> Failure to insert negative reactivity, under the postulated plant conditions, results in an unnecessary situation in which the reactor remains critical or returns to a critical condition.</span><br><br>
<span style="color:#c8cdd5;font-size:11px;color:#6b7280;"><em>CT numbers in parentheses are the corresponding Westinghouse ERG Rev. 2-based Critical Task procedure WCAP-17711-NP.</em></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0004 (10%/hr power ascension) → S2.OP-AB.PZR-0001 (PZR PORV 2PR2 leak — both PORV stop valves closed, 2PR6 reopened, TSAS 3.4.5.a entered) → S2.OP-AB.ROD-0003 (22 loop Tavg fails high, continuous inward rod motion — Loop 22 deviation defeated, 22 RCS temp channel removed via S2.OP-SO.RPS-0002, TSAS 3.3.1.1 Action 6 and 3.3.2.1 Action 19) → S2.OP-AB.TL-0001 (ABOP/HP Seal Oil BU auto-start, turbine shutdown required) → S2.OP-AB.LOAD-0001 (rapid load reduction at &lt;5%/min) → main turbine bearing vibrations approach trip criteria → CRS directs reactor trip → ATWT (no Rx trip from CR) → <span class="hi-exam">EOP-TRIP-1</span> immediate actions / Main Turbine tripped → <span class="hi-exam">EOP-FRSM-1</span> (Response to Nuclear Power Generation — CT#1: 23 AFW pump started for 44E4 lbm/hr; CT#2: rod insertion + Rapid Boration via 2CV175 / closed 21 and 22CV160) → RTBs opened locally → return to procedure in effect (EOP-TRIP-1 past Immediate Actions or transition to EOP-TRIP-2) — scenario terminates.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 15-01 NRC Retake ESG-7 (Rev 01, 4-6-17). Modified from 15-01 ILOT ESG-4 — removed loss of 2A 460V bus and BAT pumps malfunctions; added leaking PZR PORV and RC Loop RTD failure malfunctions. | <a href="/salem-study-system/exam-pdfs/2017-scenario-07.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer]], [[Pressurizer Level & Press Control]], [[CVCS]], [[RCS]], [[RPS/SSPS]], [[Control Rod Drive]], [[MTLO]], [[Main Turbine]], [[AFW]], [[Reactor Coolant Pumps]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]], [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.TL-0001 — Loss of Main Turbine Lube Oil]], [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related exam: [[2017 NRC Operating Exam]]
