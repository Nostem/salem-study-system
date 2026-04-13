---
title: "S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer"
category: procedures
status: draft
aliases:
  - S2.OP-SO.PZR-0010
---

# S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer

## Purpose

Provides direction for transferring the pressurizer backup heater groups between their normal power supply (4KV Group Bus) and emergency power supply (460V Vital Bus). Used during loss of offsite power events to restore pressurizer heaters from the emergency diesel generator-backed vital buses.

## Key Actions / Information

### Section 5.3 — Transfer to Emergency Power Supply

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-i</div>
Transfer of 22 Backup Group PZR heaters to emergency power (2A 460V Vital Bus) requires: verify 2AX1AX14X is OPEN, direct NCO to place 22 B/U Group in MANUAL and press OFF pushbutton, verify 2EX1EP2EPX is OPEN, remove interlock key from 2EX1EP2EPX, place <span class="hi-exam">11 of 14 disconnects in OFF</span> (only 3 remain ON to limit load within emergency bus capacity), place <span class="hi-exam">2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH in ON</span> using JAM key to unlock, then insert interlock key and <span class="hi-exam">UNLOCK breaker 2AX1AX14X</span>. This limits heater load to 3 of 14 heater groups to stay within the 460V Vital Bus capacity.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q11</div>
Procedural caution: <span class="hi-exam">"Aligning pressurizer heaters to vital bus adds approximately 210 KW to bus load"</span>. Maximum diesel generator load is <span class="hi-exam"><span class="val-alarm">2750 KW</span> (2000 hr rating)</span>. To add PZR heaters without exceeding the 2000 hr limit, current DG loading must be adjusted to no greater than <span class="hi-exam">2750 - 210 = 2540 KW</span>.
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[Pressurizer Level & Press Control]], [[460/230V AC]], [[EDGs]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam questions: [[2020 Q11]]
- Related JPMs: [[2022 JPM IP-i]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]]
