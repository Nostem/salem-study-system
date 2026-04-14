---
title: "2020 Scenario 1 — Power Ascension / Station Blackout"
category: exams
status: draft
aliases:
  - 2020 Scenario 1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Power Ascension / Station Blackout</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 6 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-201: 90% power, MOL; 23 Charging Pump is in service. The following equipment is out of service: 2C EDG C/T for governor oil replacement and fuel rack lube.<br><br>
<strong>Turnover:</strong> The crew is directed to continue power ascension to 100% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using dilution, control rods and turbine load control.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power Ascension to 100% at 10%/hour</li>
<li>RCS Wide Range Pressure Channel (2PT-405) fails low (TS only)</li>
<li><span class="hi">PZR Level Channel 1 fails low (TS)</span></li>
<li><span class="hi">Loss of #4 SPT and Loss of 23 CW Bus (power reduction) (TS)</span></li>
<li><span class="hi-exam">Loss of Offsite Power</span></li>
<li><span class="hi-exam">Loss of 2A Vital Bus and 2B EDG trips on overspeed</span></li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Power Ascension to 100%</td>
<td style="padding:6px;color:#9ca3af;">CRS holds crew brief to discuss Rx Plan for power ascension IAW S2.OP-IO.ZZ-0004. RO commences dilution IAW S2.OP-SO.CVC-0006. PO raises main generator loading IAW S2.OP-SO.TRB-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">RCS Wide Range Pressure Channel 2PT-405 fails low</td>
<td style="padding:6px;color:#9ca3af;">RO reports OHA D-40 SUBCLG CH A MARGIN LO. RO reports Subcooling Channel A lost on 2RP4 and recorder on 2CC2. Crew refers to ARP, determines invalid indication. CRS enters TS 3.3.3.7 Action a.1 (30 days).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">PZR Level Channel 1 fails low</td>
<td style="padding:6px;color:#9ca3af;">RO reports OHA E-36, PZR HTR OFF LVL LO. Letdown isolates. CRS enters AB.CVC-0001, Loss of Charging. RO takes manual control of charging flow, selects operable channel for Control/Alarm/Recorder, energizes PZR heaters to normal alignment. Restores letdown: opens 2CV7, 2CV18 in Manual, opens 2CV2 and 2CV277 in Auto, ensures charging flow ~85-90 gpm, opens one letdown orifice. CRS enters TS 3.3.1.1 Action 6 (6 hours).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Loss of #4 SPT and Loss of 23 CW Bus</td>
<td style="padding:6px;color:#9ca3af;">PO reports 500 KV Bus Section 1 de-energized, loss of #4 SPT, all Vital Buses energized from 24 SPT. 21A-23A CW pumps trip. Crew enters AB.CW-0001. PO reports condenser DTs exceed 27 F — turbine load reduction to less than 80% required. Crew briefs reactivity plan, initiates load reduction IAW AB.LOAD-0001. Crew enters AB.LOOP-0003, Partial Loss of Offsite Power. PO re-energizes 23 CW Bus from Bus Section 24 via cross-tie breaker IAW Attachment 4. CRS enters TS 3.8.1.1 Action C (1 hour and 12 hours) for one offsite source and one EDG inoperable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Loss of Offsite Power</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Reactor automatically trips. RO performs TRIP-1 immediate actions: trips reactor, confirms trip, trips main turbine. All 4KV Vital Buses de-energize (2A Vital Bus lost on Bus Differential protection, 2B EDG trips on overspeed 30 seconds after trip). Crew transitions to EOP-LOPA-1, Loss of All AC Power.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Loss of all AC — EDG recovery</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO performs LOPA-1 immediate actions. Closes 2CV2 and 2CV277. CRS dispatches operator to de-energize all SECs. PO stops 2A EDG (no SW pumps running). Crew identifies 2C EDG as recovery path (2B EDG overspeed with bent fuel rack, 2A Vital Bus lost on Bus Differential). After SI Reset, maintenance returns 2C EDG. PO starts 2C EDG, closes output breaker to energize 2C 4KV Vital Bus [CT#1]. PO starts 25 or 26 SW pump for EDG cooling [CT#2].</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-24):</strong> Energize at least one AC emergency bus before transition out of EOP-LOPA-1. Safety significance: failure to energize an emergency bus results in loss of all pumped ECCS capability and station blackout conditions with no forced cooling or RCP seal injection. The crew must identify that 2C EDG (returned from maintenance) is the only available path after 2A Bus Differential and 2B EDG overspeed trip.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-25):</strong> Manually start one SW pump for EDG cooling before transition out of EOP-LOPA-1. Safety significance: without SW cooling, the running EDG will overheat and trip, returning the plant to station blackout. The crew must recognize that no SW pumps are running and start one immediately after energizing the bus.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.CVC-0001 (PZR level channel fail) → S2.OP-AB.CW-0001 (CW pump trips) → S2.OP-AB.LOOP-0003 (partial LOOP) → S2.OP-AB.LOAD-0001 (load reduction for DTs) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip on LOOP) → <span class="hi-exam">EOP-LOPA-1</span> (all three 4KV Vital Buses de-energized) → Scenario terminated after 2C 4KV Vital Bus energized and SW pump started for EDG cooling</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 19-01 NRC ESG-1 | <a href="/salem-study-system/exam-pdfs/2020-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[4KV]], [[EDGs]], [[Service Water]], [[CVCS]], [[Pressurizer & PRT]], [[Circ Water]], [[500KV]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOPA-1 — Loss of All AC Power]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.LOOP-0003 — Partial Loss of Offsite Power]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam: [[2020 NRC Operating Exam]]
