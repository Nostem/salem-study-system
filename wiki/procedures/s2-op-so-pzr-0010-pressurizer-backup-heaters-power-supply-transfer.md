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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-i</div>
Section 5.3 in-plant transfer (initial conditions: <span class="hi-exam">2A EDG carrying 2A Vital Bus loaded to 2400 KW</span>): verify 2AX1AX14X (84' Swgr Rm) OPEN; direct NCO to place 22 B/U Group in MANUAL and press 22 BACKUP OFF pushbutton; verify 2EX1EP2EPX (78' Electrical Penetration) OPEN; <span class="hi-exam">remove interlock key from 2EX1EP2EPX</span> (tab must be pushed in to rotate key for removal); place <span class="hi-exam">11 of 14 PZR heater disconnects in OFF, leaving only 3 ON</span> and mark remaining as N/A; place <span class="hi-exam">2AX1AX14X-1, 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH</span> in ON (78' Electrical Penetration); insert interlock key and unlock breaker 2AX1AX14X. Critical steps: 5.3.3, 5.3.4, 5.3.5, 5.3.6, 5.3.7. <span class="hi-trap">JAM key is required to operate the disconnect switch in Step 5.3.6.</span>
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
- Related JPMs: [[2022 JPM IP-i]], [[2016 JPM IP-i]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2016 NRC Operating Exam]]
