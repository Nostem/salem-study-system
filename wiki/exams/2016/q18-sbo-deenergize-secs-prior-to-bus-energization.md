---
title: "2016 Q18 — SBO Required Action Prior to 2B 4KV Vital Bus Energization"
category: exams
status: verified
reference: no
aliases:
  - 2016 Q18
  - 2016-Q18

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q18 — SBO Required Action Prior to 2B 4KV Vital Bus Energization</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">055 EA2.03 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 2 was operating at 100% power when a loss of all AC power occurred.<br>
- 15 minutes after the power loss, operators have locally started 2B EDG.<br><br>
Which of the following is an action that is REQUIRED to have been performed PRIOR to energizing 2B 4KV Vital bus, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Shed non-essential DC loads to extend the time the Vital Instrument Inverters can power their AC loads.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Initiate and reset SI to prevent the auto start of a centrifugal charging pump and possible thermal shock to the RCP seals.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Deenergize ALL SECs and depress stop PBs for SEC actuated components to prevent overloading the 2B 4KV vital bus.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Start the Station Blackout Compressor to provide air for operation of 21-24AF11, AUX FEED-S/G LEVEL CONTROL VLVS, to prevent over feeding the SGs when 22 AFW pp starts.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(10) The Continuous Action Step for energizing a deenergized vital bus with an EDG comes AFTER the step to deenergize all SECs. The Bases Document states on page 15 that the reason to deenergize the SECs and depress the Stop PB for all SEC controlled safety related loads is to prevent the bus from overloading. It additionally states that a further reason is to prevent the SI actuated valve realignment that will occur if an SI signal is sensed after power is restored. All the distracters are actions which will be taken during an extended loss of all AC power, but the correct answer is the only one that is required to be performed AND has the correct reason for doing it prior to power restoration.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Non essential DC loads are shed at Step 35 to extend the batteries power capability. A and B will be performed, but are not required to be performed prior to power restoration.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> SI is initiated at Step 21 NOT to prevent a charging pump automatic start and possible thermal shock to the RCP seals. SI is initiated at Step 21 NOT to prevent a charging pump from running, but rather to prevent the SI actuated valve realignment that will occur if an SI signal is sensed after power is restored. A and B will be performed, but are not required to be performed prior to power restoration.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The SBO is started as part of Blackout Coping Actions in Attachment 2 Part A of AB.LOOP-1. D will be performed, but it is NOT the correct reason, and is required within 60 minutes of Blackout.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of All AC Power (2-EOP-LOPA-1, p.17, Rev 30) | LO: LOPA00E007 | Source: Facility Exam Bank | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[SECs]], [[4KV]], [[EDGs]], [[ECCS]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam: [[2016 NRC Written Exam]]
