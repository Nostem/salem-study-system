---
title: "2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery"
category: exams
status: draft
aliases:
  - 2020 Scenario 5
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 5 — Loss of Heat Sink / Condensate Recovery</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-210: 85% power, EOL. 21 Charging Pump in service. 23 Charging Pump C/T for pulsation damper maintenance. 23 Condensate Pump just returned from maintenance.<br><br>
<strong>Turnover:</strong> Commence power ascension to 100% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using dilution, control rods, and turbine load control following return to service of 23 Condensate Pump. Rx Plan: add 2200 gallons of water along with withdrawing control rods to maintain Tavg on program. Reactor Engineering directs the crew to perform a dilution first. RCS boron 843 ppm. MWe 1020. Blowdown 35K per loop to 23 condenser/flashtank. Polisher in service.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 100% at 10%/hour</li>
<li><span class="hi">2PT-505 Turbine Inlet Pressure Channel fails low</span> (continuous rod insertion)</li>
<li><span class="hi">22 ABV Exhaust Fan damper fails closed</span></li>
<li><span class="hi-exam">23BF19 Feedwater Reg Valve fails closed</span> (major transient)</li>
<li><span class="hi-exam">Main Turbine fails to Auto trip and Auto MSLI fails to actuate</span></li>
<li><span class="hi-exam">Loss of 2B 4KV Vital Bus</span> (loss of 22 MDAFW Pump)</li>
<li><span class="hi-exam">Loss of all AFW flow</span> (21 AFW trips, 23 AFW trips on overspeed)</li>
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
<td style="padding:6px;color:#c8cdd5;">Power ascension to 100% at 10%/hour</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs crew on power ascension to 100% at 10%/hour IAW S2.OP-IO.ZZ-0004, Power Operation. RO briefs reactivity plan. PO briefs turbine load control plan. RO initiates dilution IAW S2.OP-SO.CVC-0006 or uses control rods. PO initiates turbine load control IAW S2.OP-SO.TRB-0001. RO monitors Tavg and control rods for proper response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">2PT-505 Turbine Inlet Pressure Channel fails low</td>
<td style="padding:6px;color:#9ca3af;">RO announces rods stepping in at 72 steps per minute, no load reject in progress, requests rod control in Manual. CRS directs RO to place rods in Manual — rod motion stops. CRS enters S2.OP-AB.ROD-0003, Continuous Rod Motion. CRS directs RO to maintain Tavg within 1.5 F of Tref. RO reports Tavg and NIS channels NOT failed. RO reports rods above RIL. PO reports PT-505 failed low. PO places main steam dumps in MS Pressure Control-Auto. CRS enters TSAS 3.3.2.1.b Action 19 (72 hours). CRS initiates S2.OP-SO.RPS-0006 for turbine channel trip/restoration. RO withdraws control rods to ARO position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">22 ABV Exhaust Fan damper fails closed (low air flow)</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected console alarm for 22 ABV Exhaust Fan "AIR FLOW LOW". PO refers to 2CC1 ARP. RO reports 22 ABV Exhaust Fan running. PO dispatches operator to check breaker status (breaker closed). RO confirms exhaust filter lineup IAW S2.OP-SO.ABV-0001. PO dispatches operator to check exhaust fan inlet vanes — reports 2ABV14 damper closed. CRS determines exhaust flow cannot be restored and directs starting standby 23 ABV Exhaust Fan. CRS enters TSAS 3.7.7 Action a (14 day LCO).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23BF19 Feedwater Reg Valve fails closed</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports OHA alarms: G-15 ADFCS TRBL, G-23 21/22 SGFP SPEED DEVIATION, and 23 SG Program Setpoint Deviation. PO reports 23BF19 closing. PO attempts manual control — unsuccessful. PO reports 23 SG NR levels lowering, recommends reactor trip. RO manually trips the reactor and enters EOP-TRIP-1 immediate actions.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Main Turbine fails to Auto trip — Manual trip required</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports main turbine failed to Auto trip. RO reports manual trip using pistol grip switch unsuccessful. RO manually trips the main turbine by depressing turbine trip bezel pushbutton (CT#1). SI auto actuates following reactor trip — RO backs up SI signal. CRS enters EOP-TRIP-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 AFW Pump trips / Loss of 2B 4KV Vital Bus</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 21 AFW pump tripped (overcurrent relay flag up) and only 23 AFW pump running. PO reports 2B 4KV Vital Bus NOT energized (bus differential protection — loss of 22 MDAFW pump). CRS directs assistance restoring 2B 4KV bus IAW S2.OP-AB.4KV-0002. PO reports 2A and 2C Vital Buses energized. PO reports SEC loading not complete for 2A and 2B bus. PO reports several SI and feedwater isolation valves not in position but redundant valves are in safeguards position. CRS directs WCC to locally position valves. PO starts 23 switchgear supply fan after 2C SEC blocked and reset. RO reports one CCW pump running, both CCW HX in Auto.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 AFW pump trips on overspeed — loss of all AFW flow</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 23 AFW pump tripped. PO reports NO AFW flow. PO reports no SG NR levels >9% (15% adverse) and total AFW flow <22E4 lbm/hr. CRS transitions to EOP-FRHS-1, Response to Loss of Secondary Heat Sink. PO reports condensate system in service. PO reports no SGFPs available (tripped on SI). MSPI AFW pump fails on overspeed. RO resets SI, Phase A, Phase B. RO opens both CA330s. PO resets SECs and control centers.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Condensate Recovery — EOP-FRHS-1</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Crew selects one SG for depressurization to <575 psig (Caution: steam 21 and 23 SGs last to maximize 23 AFW pump steam supply). PO depressurizes using steam dumps or MS10s. CRS dispatches operator to open selected SG BF40 or BF19 valve locally (120 ft elevation TGA). PO opens selected SG BF13. PO opens 21 and 22 CN48 (SGFP bypass valves) and closes 21 and 22 CN32 (SGFP suction valves). PO reports condensate flow established to selected SG or CETs lowering (CT#2). CRS directs maintaining selected SG pressure <575 psig. Crew reports bleed and feed NOT initiated, transitions to EOP-TRIP-1.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-13):</strong> Manually trip the turbine before a severe challenge develops to either subcriticality or integrity CFST, or transition to EOP-LOSC-1. Safety significance: failure to trip the main turbine following a reactor trip results in continued steam demand on the SGs, causing an excessive cooldown of the RCS. This can challenge subcriticality (return to power) and RCS integrity (pressurized thermal shock). The turbine must be tripped using the bezel pushbutton when both the auto trip and pistol grip manual trip fail.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-43):</strong> Establish feedwater flow into at least one SG before bleed and feed is required. Safety significance: with all AFW sources lost (21 AFW tripped on overcurrent, 22 MDAFW lost with 2B 4KV bus, 23 AFW tripped on overspeed, MSPI AFW pump failed), the only remaining heat removal path is condensate recovery through EOP-FRHS-1. SGs must be depressurized to <575 psig to allow condensate system injection. Bleed and feed criteria: three SG wide range levels <20% (25% adverse). Failure to establish feed flow before bleed and feed criteria are met results in initiation of bleed and feed (opening PZR PORVs for core cooling), which is a last-resort measure with significant challenges to RCS integrity.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0004 (power ascension) → S2.OP-AB.ROD-0003 (continuous rod motion from PT-505 failure) → S2.OP-AR.ZZ-0011 (ABV exhaust fan low air flow ARP) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip on lowering SG levels / BF19 failure) → <span class="hi-exam">EOP-FRHS-1</span> (all AFW lost — no SG NR levels >9%, total AFW flow <22E4 lbm/hr) → Condensate Recovery (depressurize selected SG to <575 psig, establish condensate feed flow) → Return to <span class="hi-exam">EOP-TRIP-1</span> (after feed flow established, bleed and feed NOT initiated)</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 19-01 NRC ESG-5 | <a href="/salem-study-system/exam-pdfs/2020-scenario-05.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[AFW]], [[Main Turbine]], [[Main Steam]], [[Steam Dumps]], [[4KV]], [[ABV]], [[RPS/SSPS]], [[RCS]], [[ECCS]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.4KV-0002 — Loss of 2B 4KV Vital Bus]]
- Related exam: [[2020 NRC Operating Exam]]
