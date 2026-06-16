---
title: "S2.OP-SO.CVC-0003 — Excess Letdown Flow"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CVC-0003
  - excess letdown flow
---

# S2.OP-SO.CVC-0003 — Excess Letdown Flow

## Purpose

Provides guidance for establishing and securing Excess Letdown flow as an alternate letdown path when normal letdown is unavailable.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q5</div>
Excess Letdown established to VCT via CV134 (3-way valve). Key valve identifications:<br>
- <span class="hi-exam">2CV278, 2CV131: Excess Letdown Isolation Valves — do NOT receive automatic closure signals on SI/Phase A</span><br>
- <span class="hi-exam">2CV284, 2CV116: Seal Return Isolation Valves — close automatically on Phase A Isolation</span><br>
- <span class="hi-exam">CV115: Seal Return Relief Valve — relieves to PRT (not RCDT)</span><br>
- CV134: 3-way valve directing excess letdown to VCT or RCDT; <span class="hi-exam">fails to VCT on loss of power and air</span><br><br>
Following an SI signal, seal return isolation valves CV116 & CV284 close via Phase A, blocking the normal seal return path. Excess letdown flow continues through CV278/CV131 (which remain open) but is trapped downstream, causing CV115 to cycle and relieve flow to the PRT. <span class="hi-trap">Trap: excess letdown isolation valves (CV278/CV131) do NOT close on Phase A — only the seal return isolation valves (CV116/CV284) do. Eventually, control air bleeddown may fail CV278/CV131 closed, but this takes considerable time.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
Excess Letdown placement when normal letdown is unavailable due to <span class="hi-exam">2CV4 letdown orifice CIV failed 40% open</span> (no path to fully isolate letdown — TSAS 3.6.3 Action 1 entered for INOPERABLE CIV). The procedure has no entry from AB.CVC-0001; the CRS evaluates and directs placement for PZR level control. Steps performed: PO verifies <span class="hi-exam">2CC113 open</span>, <span class="hi-exam">opens 2CC215</span>, verifies 2CV132 shut, determines 2CV134 selected to VCT, opens <span class="hi-exam">2CV278 and 2CV131</span>, slowly throttles open 2CV132 while maintaining <span class="hi-exam">excess letdown temp &lt;195°F and pressure &lt;150 psig</span>. Optional: 2CA2015 may be placed in bypass (Remote CV42A) to close 2CV55 if directed.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q37</div>
On loss of air to 2CC215 (fails closed), excess letdown temperature/pressure rise; <span class="hi-exam">SO.CVC-3 P&amp;L 3.3 directs maintaining excess letdown pressure &lt;150 psig to prevent lifting the seal return relief (2CV115)</span> — secure excess letdown. See [[CVCS]], [[CCW]].
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer & PRT]], [[Radiation Monitoring]]
- Related exam questions: [[2020 Q5]], [[2015 Q37]], [[2014 Q20]]
- Related scenarios: [[2017 Scenario 8]]
- Related exam: [[2020 NRC Written Exam]], [[2017 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]]
