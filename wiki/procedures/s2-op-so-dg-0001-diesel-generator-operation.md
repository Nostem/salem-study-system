---
title: "S2.OP-SO.DG-0001 — Diesel Generator Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.DG-0001
  - diesel generator operation
---

# S2.OP-SO.DG-0001 — Diesel Generator Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

System operating procedure for starting, paralleling, loading, and securing the 2A, 2B, and 2C Emergency Diesel Generators (EDGs). Includes provisions for swapping a vital bus from EDG power to a Station Power Transformer (SPT) source after restoration of off-site power.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-g</div>
<strong>Section 5.8 — Swap Vital Bus from EDG to SPT</strong> (used when off-site power has been restored during recovery from a Loss of All AC Power per EOP-LOPA-1):<br>
Step 5.8.1: Confirm the 2A EDG is NOT paralleled on the 2A 4KV Vital Bus (parallel operation is not authorized for this swap).<br>
Step 5.8.2: With 2A Vital Bus isolated and energized from 2A EDG: <span class="hi-exam">Place redundant equipment in service as necessary</span> to support deenergizing 2A Vital Bus (e.g., 22 CCW pump). <span class="hi-trap">1 SW pump with the TGA isolated is sufficient to maintain SW header pressure during the swap.</span> Stop all 2A Vital Bus loads using Attachment 1: 21 CCW pump, 21 SW pump, 21 CFCU, 21 Aux Building Exhaust Fan, 21 SWGR Room Supply Fan, 21 SWGR Room Exhaust Fan, 21 BAT pump, 21 FHB Exhaust Fan, 21 AFW pump, 21 SI / 21 CS pumps.<br>
Step 5.8.3: Open 2A DIESEL GENERATOR BREAKER by one of three methods: <span class="hi-exam">(a) open 2AD1AX6D locally (64' Swgr Rm); (b) press 2A BREAKER OPEN PB on 2CC3; or (c) place 2A-DF-GCP-3 to TRIP at the 2A DIG Control Panel</span>.<br>
Step 5.8.4: <span class="hi-exam">Allow Diesel to run unloaded for ≥ 3 minutes prior to stopping the EDG</span> (cooldown).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-k</div>
<strong>Section 5.2 — Diesel Generator Local Start (parallel-load configuration):</strong><br>
5.2.4: <span class="hi-exam">If 4KV Vital Bus is energized (parallel-loaded start), place 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW in MANUAL (DROOP) before start</span> and verify B-9 GENERATOR LOADING IN DROOP MODE annunciates. Droop mode prevents speed-control hunting once the EDG is paralleled with the bus.<br>
5.2.5: Place 2A-DF-SS, 2A DG STOP/START SWITCH in START.<br>
5.2.6: If speed is not 900 rpm, set speed to <span class="hi-exam">900 rpm</span> via SPEED CONTROL SWITCH (GS).<br>
5.2.7: Permissive lights 2DAE4-LT 2 (EDG VOLTAGE) and 2DAE4-LT 3 (EDG SPEED) on the Generator Control Panel must illuminate ON when 2AD1AX6D 125VDC breaker is closed.<br>
5.2.10 normal start readings: gen volts <span class="hi-exam">4160 V on all 3 phases</span>, frequency 60 Hz, LO Hdr 80 psig, JW Hdr 45 psig, Air Manifold 0 psig, Stator 187 °F.<br><br>
<strong>Section 5.4 — Diesel Generator Parallel Loading:</strong><br>
5.4.4: <span class="hi-exam">ADJUST EDG output voltage 50–100 V higher than 4KV Vital Bus voltage</span> using VOLTAGE CONTROL SWITCH (VCS) — gen voltage on 2VM189, bus voltage on 2VM190. Higher gen voltage ensures reactive flow OUT of the generator after closure (not in).<br>
5.4.10.B: Adjust speed via GS so synchroscope rotates <span class="hi-exam">SLOWLY in the FAST (clockwise) direction</span>.<br>
5.4.10.C/D/E: Verify SYNC CHK RELAY 25 Upper-Voltage L OK / B OK and Lower-Voltage L OK / B OK LEDs ON, ΔF OK LED ON, and DG SYNC PERMISSIVE green light ON near 12 o'clock (±~3 minutes).<br>
5.4.10.F (CRITICAL): <span class="hi-exam">When synchroscope is at 12 o'clock (+0 / −2 minutes), simultaneously close 2A-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS) AND raise load to ≥ 500 KW via SPEED CONTROL SWITCH (GS) to prevent reverse-power trip.</span><br>
5.4.10.G: Place 2A-DF-SYNCH SWITCH (SS) to OFF.
</div>

## Connections

- Related systems: [[EDGs]], [[4KV]]
- Related procedures: [[S2.OP-SO.4KV-0001 — 4KV Vital Bus Operation]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]]
- Related JPMs: [[2016 JPM Sim-g]], [[2016 JPM IP-k]]
- Related exam: [[2016 NRC Operating Exam]]
