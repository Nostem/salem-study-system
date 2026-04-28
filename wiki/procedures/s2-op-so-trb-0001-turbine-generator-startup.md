---
title: "S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations"
category: procedures
status: draft
aliases:
  - S2.OP-SO.TRB-0001
  - turbine generator startup
---

# S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations

## Purpose

Provides guidance for turbine-generator startup operations including turbine roll, generator excitation (Section 4.4), and synchronizing the generator to the electrical grid (Section 4.5). Also includes Attachment 5 for main turbine valve stroke testing during power ascension.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-e</div>
Section 4.5 — Synchronizing the Generator: verify 500 KV bus breaker selection (9-10 LOCAL), scope transfer switch (REGULAR SCOPE), scope test (synchroscope at 12 o'clock, voltmeters upscale), SYNC PERM BYPASS in NORMAL. Select 1-9 Mimic Bus and SYNCH POT ON. <span class="hi-exam">Adjust INCOM KV to 3-5 KV above RUN KV</span> using Voltage Regulator RAISE SETPT (as-found both ~498-499 KV, must raise to >= 501 KV). <span class="hi-exam">Adjust turbine speed</span> via DEHC HMI SETTER (as-found 1801 rpm, raise to 1802-1803 rpm) until synchroscope rotates <span class="hi-exam">slowly in FAST direction (~1 rev every 25-30 sec)</span>. Close 500 KV 1-9 (32X) breaker when synchroscope is <span class="hi-exam">1-2 minutes before 12 o'clock</span>. Verify load rises to 40-60 MW within 15 seconds. Select SYNCH POT OFF.
</div>

## Connections

- Related systems: [[Main Turbine]], [[500KV]]
- Related procedures: [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related JPMs: [[2018 JPM Sim-e]]
- Related exam: [[2018 NRC Operating Exam]]
