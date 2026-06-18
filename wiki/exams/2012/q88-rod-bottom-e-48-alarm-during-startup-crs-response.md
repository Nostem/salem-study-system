---
title: "2012 Q88 — Rod Bottom E-48 Alarm During Startup CRS Response"
category: exams
status: draft
aliases:
  - 2012 Q88
  - 2012-Q88
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q88 — Rod Bottom E-48 Alarm During Startup CRS Response</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.2.37 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is performing a Reactor startup IAW S1.OP-IO.ZZ-0003 Hot Standby to Minimum Load.<br>
- All Shutdown Bank control rods have been fully withdrawn.<br>
- Control Bank A is fully withdrawn.<br>
- As Control Bank B is withdrawn past 20 steps, the RO reports OHA E-48, ROD BOTTOM has just alarmed and remains locked in.<br>
- No other alarms are received.<br><br>
Which of the following describes how the system is operating, and how the CRS should proceed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The Rod Bottom Bistable causes OHA E-48 to alarm as each control bank is withdrawn past 20 steps and is expected. The CRS should direct the reset of the Non-Urgent Failure to reset the alarm, then continue the startup.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The Rod Bottom Bistable causes OHA E-48 to alarm as each control bank is withdrawn past 20 steps and is expected. The CRS should direct the RO to depress the STARTUP pushbutton on 1CC2 to reset the alarm, and continue the startup.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The Rod Bottom Bistable cleared when Control Bank A was withdrawn past 20 steps and OHA E-48 is unexpected at this time. The CRS should enter S1.OP-AB.ROD-0002 Dropped Rod and direct the opening of the Reactor Trip Breakers to terminate the Rx startup.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The Rod Bottom Bistable cleared when Control Bank A was withdrawn past 20 steps and OHA E-48 is unexpected at this time. The CRS should place the startup on hold and initiate S1.OP-AB.ROD-0002, Dropped Rod, or S1.OP-AB.ROD-0004, Rod Position Indication Failure, to determine what malfunction has occurred.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The Rod Bottom alarm CLEARS when CB A is withdrawn past 20 steps. This is because a Rod Bottom Bistable Bypass for each of the other three control banks B,C,D bypass the alarm for their respective bank when all rods in that group are below 35 steps. This means that the alarm was CLEAR when it alarmed, it did not reflash. Since no other alarms occurred, the CRS should place the startup on hold and enter AB.ROD-2 (which will direct entry into AB.ROD-4) or enter AB.ROD-4 directly to investigate the failure. There is a 4 hour window for having to terminate the startup (IOP-3, step 5.2.19) so opening the trip breakers is not required.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The Rod Bottom alarm CLEARS when CB A is withdrawn past 20 steps; it does not alarm as each control bank is withdrawn past 20 steps. The Rod Bottom Bistable Bypass for Control Banks B, C, and D bypasses the alarm for their respective bank when all rods in that group are below 35 steps, so the alarm reappearing on CB B is unexpected, not expected.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The Rod Bottom alarm CLEARS when CB A is withdrawn past 20 steps; it is not expected as each control bank is withdrawn past 20 steps, so depressing the STARTUP pushbutton on 1CC2 to reset and continuing the startup is incorrect — the unexpected alarm must be investigated.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The alarm is unexpected and AB.ROD-0002 is entered, but opening the Reactor Trip Breakers to terminate the startup is not required — there is a 4 hour window for having to terminate the startup (IOP-3, step 5.2.19), so the startup is placed on hold to investigate the failure.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Rod Control and Position Indicating Systems Le — NOS05RODS00-11 (Rev 11); Dropped Rod — S1.OP-AB.ROD-0002; Rod Position Indication Failure — S1.OP-AB.ROD-0004 | LO: RODS00E006 | Source: Facility Exam Bank (Vision Q60249, concept used) | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[AB.ROD-0002 — Dropped Rod]], [[AB.ROD-0004 — Rod Position Indication Failure]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam: [[2012 NRC Written Exam]]
