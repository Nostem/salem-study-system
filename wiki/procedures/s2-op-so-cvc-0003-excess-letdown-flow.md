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

## Connections

- Related systems: [[CVCS]], [[Pressurizer & PRT]]
- Related exam questions: [[2020 Q5]]
- Related exam: [[2020 NRC Written Exam]]
