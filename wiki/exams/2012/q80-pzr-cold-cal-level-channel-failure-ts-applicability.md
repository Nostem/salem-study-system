---
title: "2012 Q80 — PZR Cold Cal Level Channel Failure TS Applicability"
category: exams
status: draft
aliases:
  - 2012 Q80
  - 2012-Q80
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q80 — PZR Cold Cal Level Channel Failure TS Applicability</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000028G243 / 2.2.43 (RO 3.0 / SRO 3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- The RO reports that the PZR Cold Cal level channel (LI-462) is indicating 0%.<br><br>
Which of the following describes how the CRS should respond, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Enter TSAS 3.3.1.1 Reactor Trip System Instrumentation. This Tech Spec is based on being able to provide the overall reliability, redundancy, and diversity assumed available in the facility design for the protection and mitigation of accident and transient conditions. Place a single piece of red translucent tape across LI-462.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Enter TSAS 3.3.3.7 Accident Monitoring Instrumentation. This Tech Spec is based on ensuring sufficient information is available on selected plant parameters to monitor and assess these variables following an accident. Place an INFO sticker on LI-462.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> No Tech Spec entry will be made since TSAS 3.3.1.1 and TSAS 3.3.3.7 are applicable to this instrument ONLY in MODES 4-6 and during movement of irradiated fuel. Place a single piece of red translucent tape across LI-462.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> No Tech Spec entry will be made since TSAS 3.3.1.1 and TSAS 3.3.3.7 are not applicable to this instrument. Place an INFO sticker on LI-462.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The PZR cold cal channel is not included in the Rx Trip Instrumentation or the Accident Monitoring Tech Specs. It is used when RCS temperature is &lt;200°F as directed in S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because TS 3.3.1.1 is not entered, although the Bases is correct. Also, the red translucent tape is used to identify an inoperable alarm.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The PZR cold cal channel is not included in the Rx Trip Instrumentation or the Accident Monitoring Tech Specs, so TSAS 3.3.3.7 is not entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> No Tech Spec entry will be made because the PZR cold cal channel is not included in TSAS 3.3.1.1 or TSAS 3.3.3.7, not because of a MODES 4-6 applicability. Also, the red translucent tape is used to identify an inoperable alarm.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Specs 3.3.1.1, 3.3.3.7; SC.OP-DL.ZZ-0010 (Rev 10), Control Room Instrumentation and Alarms; S2.OP-IO.ZZ-0006, Hot Standby to Cold Shutdown | LO: PZRP&amp;LE010 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[SC.OP-DL.ZZ-0010 — Control Room Instrumentation and Alarms]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam: [[2012 NRC Written Exam]]
