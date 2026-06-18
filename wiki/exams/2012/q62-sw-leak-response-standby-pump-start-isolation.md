---
title: "2012 Q62 — SW Leak Response and Standby Pump Start"
category: exams
status: draft
aliases:
  - 2012 Q62
  - 2012-Q62
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q62 — SW Leak Response and Standby Pump Start</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">076 A2.02 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power steady state.<br>
- A field operator reports a SW leak in 2C EDG room, just upstream of 23SW39, 2C DIESEL CLG SW VLV.<br>
- The RO reports Service Water pressure on both 21 and 22 headers has lowered from 112 to 101 psig and continues to lower.<br><br>
Which of the following describes the expected SW system response, and how the operating crew will respond IAW S2.OP-AB.SW-0001, Loss of Service Water Header Pressure?<br><br>
Assume SW header pressure can be restored.<br><br>
The standby SW pump will start when SW header pressure lowers to…
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 95.5 psig. Lock out 2C EDG and declare it INOPERABLE, shut 21SW21 AND 22SW21, DIESEL CLG SW INLET VALVES, to isolate the leak.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 99.5 psig. Lock out 2C EDG and declare it INOPERABLE, shut 21SW21 AND 22SW21, DIESEL CLG SW INLET VALVES, to isolate the leak.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 95.5 psig. Lock out 2C EDG and declare it INOPERABLE, isolate the leak by shutting 21SW37 AND 22SW37, 2C DIESEL CLG SW INLET VALVES.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 99.5 psig. Lock out 2C EDG and declare it INOPERABLE, isolate the leak by shutting 21SW37 AND 22SW37, 2C DIESEL CLG SW INLET VALVES.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(7, 10) Lock out the EDG(s) that will be affected and isolate the leak. Step 3.11 has operators isolate the leak. EDG must be locked out to prevent starting with no SW available. The only way to isolate the leak is to isolate both supplies from both SW headers by closing both SW37's. Cannot isolate both SW21s per Att 4, Steps 4.0 B and C because it would render ALL EDGs inoperable. OHA for SW header pressure low states auto start for standby SW pumps is 95.5 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The auto start setpoint (95.5 psig) is correct, but isolating via 21SW21 AND 22SW21 (the diesel cooling SW inlet valves serving all EDGs) cannot be used per Att 4, Steps 4.0 B and C — it would render ALL EDGs inoperable.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The standby SW pump auto-starts at 95.5 psig, not 99.5 psig (99.5 psig is the SW header low alarm setpoint); and closing the 21SW21/22SW21 valves would render ALL EDGs inoperable.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The isolation valves (21SW37 AND 22SW37) are correct, but the standby SW pump auto-starts at 95.5 psig, not 99.5 psig.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.SW-0001 (Rev 16) Loss of Service Water Header Pressure; S2.OP-AR.ZZ-0002 (Rev 35) Overhead Annunciators Window B p.28 | LO: ABSW01E004 | Source: Facility Exam Bank (Concept Used); Vision Q77578, changed from what to do to isolate leak (4 choices) to what pressure auto pump will start and how to isolate (made into a "2 and 2" question) | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[EDGs]], [[Annunciators]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]]
- Related exam: [[2012 NRC Written Exam]]
