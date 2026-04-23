---
title: "2019 JPM Sim-h — Respond to CCW Leak Inside Containment"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — Respond to CCW Leak Inside Containment IAW S2.OP-AB.CC-0001</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 008 A2.02 (3.2/3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 at 100% power, MOL.<br>
- No equipment is out of service and no active Tech Specs are in effect.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- Respond to all alarms and indications.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Opens 2DR107 to makeup to CCW surge tank.<br>2. TRIPs the Reactor, Stops RCPs, and Closes CNTMT CCW valves IAW Attachment 2.</span>
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
<td style="padding:6px;color:#c8cdd5;">CUE</td>
<td style="padding:6px;color:#c8cdd5;">OHA C-2 CNTMT SUMP PMP START received, followed by CCW Console Window Alarm for SURGE TANK LEVEL HI-LO</td>
<td style="padding:6px;color:#9ca3af;">Operator reports receipt of unexpected OHA C-2 and shortly thereafter console alarm for CCW Surge Tank Level Hi-Lo. Refers to OHA ARP and/or 2CC1 ARP.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.1</td>
<td style="padding:6px;color:#c8cdd5;">MONITOR CC Surge Tank Level on 2LI-628A and C on Bezel</td>
<td style="padding:6px;color:#9ca3af;">Operator monitors Surge Tank Level and observes lowering.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">ARP 3.3.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2DR107, Surge Tank Makeup</td>
<td style="padding:6px;color:#9ca3af;">Operator opens 2DR107. Reports CCW Surge Tank Level is rising.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.3.B</td>
<td style="padding:6px;color:#c8cdd5;">GO TO S2.OP-AB.CC-0001, Component Cooling Abnormality</td>
<td style="padding:6px;color:#9ca3af;">Operator transitions to AB.CC-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, GAS</td>
<td style="padding:6px;color:#9ca3af;">Operator reviews Attachment 1 GAS and determines none are applicable at this time.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2</td>
<td style="padding:6px;color:#c8cdd5;">Is CCW Surge Tank Level > 58% and rising?</td>
<td style="padding:6px;color:#9ca3af;">NO: Operator determines CCW Surge Tank Level is NOT rising above 58% and goes to Step 3.13.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.13</td>
<td style="padding:6px;color:#c8cdd5;">Is CCW Surge Tank level < 42% and dropping?</td>
<td style="padding:6px;color:#9ca3af;">YES: Operator determines CCW Surge Tank level is < 42% and dropping. INITIATE makeup to CCW Surge Tank (OPEN 2DR107 if not already performed).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.15-3.19</td>
<td style="padding:6px;color:#c8cdd5;">Locate leak — determine leak is in containment (OHA C-2 received)</td>
<td style="padding:6px;color:#9ca3af;">CRS dispatches operators. Operator checks recorders on 2RP1 back panel — 22 WHUT level is rising. Determines CCW leak is in containment.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.21</td>
<td style="padding:6px;color:#c8cdd5;">ISOLATE CCW to the Excess Letdown HX — ENSURE 2CV132 CLOSED, 2CC215 CLOSED, 2CC113 CLOSED</td>
<td style="padding:6px;color:#9ca3af;">Operator determines 2CV132 and 2CC215 are already CLOSED. Depresses CLOSED PB for 2CC113 (Exc LHX Outlet).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.24 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF CC Surge Tank level indication can NOT be maintained >5%, THEN STOP RCPs IAW Attachment 2 — Operator determines leak exceeds makeup capability with 2DR107 open AND lowering CCW Surge Tank level</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ALTERNATE PATH: CCW leak worsens beyond makeup capacity. Operator recognizes that Surge Tank level cannot be maintained and transitions to Attachment 2 (Stopping RCPs and Isolating CCW to Containment).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">TRIP the Reactor using either Rx Trip pistol grip switches</td>
<td style="padding:6px;color:#9ca3af;">Operator TRIPs the Reactor. Confirms Reactor is Tripped.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP ALL RCPs</td>
<td style="padding:6px;color:#9ca3af;">Operator STOPs ALL RCPs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 2 1.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE CNTMT CCW isolation valves: 2CC131 (RCP Therm Bar CC Cont W), 2CC136 (RCP CLG OIL CLR Outlet), 2CC190</td>
<td style="padding:6px;color:#9ca3af;">Operator closes all listed CCW containment isolation valves by depressing CLOSED PB for each valve and verifying CLOSED PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att 2</td>
<td style="padding:6px;color:#c8cdd5;">GO TO 2-EOP-TRIP-1 Reactor Trip or Safety Injection</td>
<td style="padding:6px;color:#9ca3af;">JPM is complete when 2CC190 is CLOSED.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 3.24 is the discriminating step (alternate path) — after the initial CCW leak is managed with 2DR107 makeup, the leak worsens and exceeds makeup capacity. The operator must recognize that CCW Surge Tank level cannot be maintained above 5% and transition to Attachment 2. In Attachment 2, the operator must trip the reactor, stop ALL RCPs, and close the CCW containment isolation valves (2CC131, 2CC136, 2CC190). The operator who enters AB.CC-0001 early may also take the GAS action to trip the Rx and stop RCPs before reaching step 3.24.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.CC-0001 (R16) | Task: N1140080401 | K/A: 008 A2.02 — Ability to (a) predict the impacts of the following on the Component Cooling Water System and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences of: CCW System leakage | Source: Modified | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]], [[RCPs]]
- Related procedures: [[AB.CC-0001 — Loss of Component Cooling Water]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2019 NRC Operating Exam]]
