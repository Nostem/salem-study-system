---
title: "2022 Scenario 3 — Power Ascension / Loss of Heat Sink"
category: exams
status: draft
aliases:
  - 2022 Scenario 3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — Power Ascension / Loss of Heat Sink</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-242: Unit 2 is at 93% power, MOL; 2A EDG is running unloaded for maintenance run. The following equipment is out of service: 21 AFW Pump C/T for oil bubbler replacement and 21 Containment Spray pump for lube.<br><br>
<strong>Turnover:</strong> The crew is directed to continue power ascension to 98% power at 10% per hour IAW S2.OP-IO.ZZ-0004 by use of dilution, control rods and turbine load control.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 100% at 10%/hour</li>
<li><span class="hi">21 CRDM Vent Fan damper fails closed</span></li>
<li><span class="hi">PZR Level controlling channel fails high (TS)</span></li>
<li><span class="hi">21CN22 FWH Inlet valve fails closed</span></li>
<li><span class="hi">2A EDG emergency trip (TS)</span></li>
<li><span class="hi">23 RCP motor oil level low</span></li>
<li><span class="hi-exam">Main turbine fails to trip by all means in the control room</span></li>
<li><span class="hi-exam">Loss of all AFW flow and recovery by initiating Condensate flow using MS10</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Power ascension to 98% at 10%/hour</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs crew on power ascension to 98% at 10%/hour IAW S2.OP-IO.ZZ-0004. RO briefs reactivity plan. PO briefs turbine load control plan. RO initiates dilution IAW S2.OP-SO.CVC-0006 or uses control rods. PO initiates turbine load control IAW S2.OP-SO.TRB-0001. RO monitors Tavg and control rods for proper response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">21 CRDM Vent Fan damper fails closed</td>
<td style="padding:6px;color:#9ca3af;">PO announces console alarm for 21 CRDM Vent Fan Low Flow. PO refers to ARP for 2CC1 and reports sequence complete light for 21 CRDM Fan is not illuminated. CRS directs PO to start standby CRDM Vent Fan IAW ARP. PO stops 21 CRDM Fan and starts 23 CRDM Fan.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">PZR Level controlling channel fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected alarms OHA E-4 PZR LVL HI and E-20 PZR HTR ON LVL HI. RO reports PZR Level Channel I has failed high and charging flow has lowered. RO places Master Flow Control in Manual and raises charging flow to restore PZR level to program. CRS enters S2.OP-AB.CVC-0001. RO selects operable Channel 3 for control and operable Channel 2 or 3 for recorder. CRS evaluates TS 3.3.1.1 action 6 (72 hours to place channel in tripped condition).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">21CN22 LP FWH Inlet valve fails closed</td>
<td style="padding:6px;color:#9ca3af;">PO reports unexpected alarm OHA G-22, FW HTR IN VLV TRIP & LVL HI. PO refers to ARP and depresses STOP VALVE CLOSED on 2CC2. PO reports 21CN22 is closed. CRS enters S2.OP-AB.CN-0001. PO reports SGFP did not trip and condensate pump did not trip. CRS reviews Attachment 2 for load limitations and determines load reduction required to 1098 MWe. RO briefs reactivity plan and PO initiates load reduction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">2A EDG emergency trip</td>
<td style="padding:6px;color:#9ca3af;">PO reports console alarm for 2A EDG Emergency Trip. CRS evaluates TS 3.8.1.1 action b.1 (1 hour line surveillance) and action b.4 (72 hours to restore EDG to Operable status). CRS directs operator to perform the 1 hour line surveillance.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 RCP motor bearing oil level low — temperatures and vibrations rising</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports OHA alarm for 23 RCP low oil level. RO reports motor bearing temperatures and vibrations rising. PO reports motor bearing temp > 175 degF or motor vibrations > 5 mils. CRS directs RO to trip the reactor and stop 23 RCP IAW AB.RCP-0001 Attachment 2. RO trips reactor and stops 23 RCP. RO performs immediate actions of 2-EOP-TRIP-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Main turbine fails to auto trip AND fails to manually trip using pistol grip switch AND console pushbutton. MSLI fails to auto actuate. 23 AFW Pump fails to auto start.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports main turbine failed to auto trip. RO reports turbine failed to manually trip by all means. RO isolates turbine by manually initiating MSLI using Fast Close pushbuttons on 2CC2 (CT#1). RO reports SI auto actuated and manually backs up SI signal. CRS enters 2-EOP-TRIP-1. PO reports 22 AFW Pump running and 23 AFW Pump failed to start. PO manually starts 23 AFW Pump. CRS directs PO to throttle AFW flow to no less than 22E4 lbm/hr.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 AFW Pump trips on overcurrent. 23 AFW Pump trips on overspeed. Loss of all AFW flow. CFST Heat Sink Red Path.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 22 and 23 AFW Pump tripped — NO AFW flow. PO reports no SG NR levels > 9% (15% adverse). CRS transitions to 2-EOP-FRHS-1. RO reports RCS pressure > SG pressure. RO reports RCS Thots > 350 degF. CRS reads bleed and feed criteria (3 WR levels < 20%, 25% adverse). PO closes all GB4s and reports no AFW flow. RO stops all RCPs. CRS directs SI reset, Phase A reset, Phase B reset. RO opens both CA330s. Crew selects one SG for depressurization — PO fully opens selected SG MS10. CRS dispatches operator to open selected SG BF40 or BF19 valve (120 ft TGA). PO opens selected SG BF13 and SGFP bypass valves (CN48). PO closes SGFP suction valves (CN32). PO reports feed flow established — SG Wide Range Level rising or CETs lowering (CT#2).</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-12):</strong> Manually actuate main steamline isolation before a Red path to either subcriticality or the integrity CFST, or transition to EOP-LOSC-2, Uncontrolled Depressurization of All Steam Generators.<br><br>
<em>Safety Significance:</em> Failure to close the MSIVs under the postulated plant conditions causes challenges to CSFs beyond those irreparably introduced by the postulated conditions. The crew must recognize a failure of an incorrect automatic actuation of an ESF system and take action to prevent a challenge to plant safety. In this scenario the break is downstream of the MSIVs — closure of all MSIVs terminates all uncontrolled blowdown. If the crew allows all MSIVs to remain open, all SGs depressurize uncontrollably, causing excessive RCS cooldown well beyond FSAR-analyzed conditions, creating large thermal stresses in the reactor pressure vessel and rapid insertion of positive reactivity. Failure to close MSIVs challenges the Integrity and Subcriticality CSFs.<br><br>
<em>Cues:</em> Indication that main steamline isolation is required AND indication that MSLI has not actuated automatically (MSIVs indicate open, uncontrolled depressurization of all SGs).<br><br>
<em>Measurable Standard:</em> MSIVs undergo fast-closure using the Fast Closure pushbuttons on 2CC2 or using the Loops 21-24 MSLI on 2CC1 Safeguards bezels. MSIVs indicate closed. Feedback: steam flow from all SGs decreases to zero, all SGs stop depressurizing, RCS cooldown stops.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-43):</strong> Establish feed flow to one SG before RCS bleed and feed is required.<br><br>
<em>Safety Significance:</em> Failure to establish feedwater flow to any SG results in the crew having to rely on the lower-priority action of RCS bleed and feed to minimize core uncovery. SG dryout deteriorates primary-to-secondary heat transfer, allowing core decay heat to increase RCS temperature and pressure. Increasing RCS pressure forces PORVs to open (small-break LOCA), degrading the RCS fission-product barrier. As long as RCS pressure remains high, PORV flow exceeds ECCS flow, depleting RCS inventory until the core uncovers and severe fuel damage occurs.<br><br>
<em>Cues:</em> Extreme (RED path) challenge to the heat sink CSF AND RCS pressure above pressure of all SGs AND RCS temperature above RHR service temperature AND no AFW flow available after repeated attempts AND RCS bleed and feed not yet required.<br><br>
<em>Measurable Standard:</em> Feed flow established to one SG before bleed and feed. Feedback: indication of feedwater flow into at least one SG, indication of increasing water level in at least one SG.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AR.ZZ-0011 (CRDM vent fan alarm) → S2.OP-AB.CVC-0001 (PZR level channel fail high — loss of charging) → S2.OP-AB.CN-0001 (FWH inlet valve closure — load reduction) → S2.OP-AR.ZZ-0013 (FWH alarm) → S2.OP-AB.RCP-0001 (RCP motor bearing temps > 175 degF) → Rx trip → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI — turbine fails to trip, manually initiate MSLI) → Auto SI actuates (SGFPs trip, no steam dumps available) → CFST Heat Sink Red Path (all AFW lost) → <span class="hi-exam">EOP-FRHS-1</span> (loss of secondary heat sink — depressurize one SG via MS10, establish condensate feed flow via BF40/BF19 and CN48 bypass) → Scenario terminated when SG WR level rising or CETs lowering</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 20-01 NRC ESG-3 | <a href="/salem-study-system/exam-pdfs/2022-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[RCPs]], [[CVCS]], [[Main Steam]], [[AFW]], [[Feed & Condensate]], [[EDGs]], [[Control Rod Drive]], [[Pressurizer Level & Press Control]], [[Main Turbine]], [[Steam Dumps]], [[Containment Spray]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[AB.CN-0001 — Condensate System Abnormality]], [[AB.RCP-0001 — RCP Abnormality]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]], [[TS 3/4.8 — Electrical]]
- Related exam: [[2022 NRC Operating Exam]]
