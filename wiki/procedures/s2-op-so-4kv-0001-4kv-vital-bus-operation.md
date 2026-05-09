---
title: "S2.OP-SO.4KV-0001 — 4KV Vital Bus Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.4KV-0001
  - 4KV vital bus operation
---

# S2.OP-SO.4KV-0001 — 4KV Vital Bus Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

System operating procedure for normal and recovery operation of the 4KV Vital Buses (2A, 2B, 2C), including energizing buses from a Station Power Transformer (SPT), parallel operations, and load shedding.

## Key Values

| Parameter | Value | Notes |
|-----------|-------|-------|
| 2A 4KV Vital Bus normal voltage band | 4.275–4.336 KV | Both off-site sources available |
| 2A 4KV Vital Bus single-source voltage band | 4.330–4.417 KV | Single source of off-site power |

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-g</div>
<strong>Section 5.3.6 — Energize 2A 4KV Vital Bus from 24 SPT</strong> (after EDG-to-SPT swap per S2.OP-SO.DG-0001 Section 5.8):<br>
Step 5.3.6.A: <span class="hi-exam">Direct NEO to RACK UP 2AD1AX24ASD, 24 STATION POWER TRANSFORMER INFEED BREAKER (64' Swgr Rm)</span>.<br>
Step 5.3.6.B: <span class="hi-exam">Press Mimic Bus 2A VITAL INFEED 24ASD pushbutton AND ensure Console Bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION illuminates</span> (this arms the close interlock).<br>
Step 5.3.6.C: <span class="hi-exam">Press AND HOLD control console 24ASD CLOSE pushbutton; release pushbutton when 24ASD indicates CLOSED</span>. Then ensure: (a) Console Bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION extinguishes; (b) 2A 4KV Vital Bus voltage is <span class="hi-exam">4.275–4.336 KV (normal) OR 4.330–4.417 KV (single source of off-site power)</span>; (c) OHA J-17, 2A 4KV VTL BUS UNDRVOLT is clear. <span class="hi-trap">The Mimic Bus pushbutton must be pressed BEFORE the CLOSE pushbutton — pressing CLOSE without arming the interlock will not close the breaker. The CLOSE PB must be HELD until the breaker indicates closed.</span>
</div>

## Connections

- Related systems: [[4KV]], [[EDGs]]
- Related procedures: [[S2.OP-SO.DG-0001 — Diesel Generator Operation]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]]
- Related JPMs: [[2016 JPM Sim-g]]
- Related exam: [[2016 NRC Operating Exam]]
