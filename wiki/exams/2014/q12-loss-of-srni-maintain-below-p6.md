---
title: "2014 Q12 — Loss of SRNI Maintain Below P-6"
category: exams
status: draft
aliases:
  - 2014 Q12
  - 2014-Q12
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q12 — Loss of SRNI Maintain Below P-6</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">032 AK3.01 (RO 3.9 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is performing a Rx startup.<br>
- Power is 1.0E3 cps.<br>
- Source Range Nuclear Instrument (SRNI) Channel I (2N31) fails LOW.<br><br>
Which of the following identifies why power must be maintained less than P-6?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> SR/IR overlap at 3.0-5.0 E3 cps cannot be verified with only one SRNI.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Permissive P-6 will not energize when required with only a single SRNI channel.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The ability to monitor Rx power on anything other than a one dimensional plane is lost.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> A single SR channel cannot be considered reliable with no other Rx power Indication to verify it against.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> Below P-6, the SR and IR NIs may not be overlapped. This in actuality reduces Rx power indication to a single channel, and while adequate for shutdown monitoring, cannot be relied upon to provide Rx power indication when performing a startup. Tech Spec bases for 3.3.1.1 for Rx trip instrumentation generalizes upon all Rx trip and ESF instrumentation, but states that the maintaining operability is to "2.) the specified coincidence logic and sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance consistent with maintaining an appropriate level of reliability of the Reactor Protection System... 3.) sufficient system functional capability is available from diverse parameters." A single SR channel cannot be considered reliable with no other Rx power indication to verify it against.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> SR/IR overlap verification is not the controlling reason; the issue is the loss of a redundant/diverse power indication, leaving a single unverifiable SR channel.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> P-6 energizing capability is not the reason; the concern is reliable Rx power indication during the startup, not the P-6 permissive logic.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The concern is reliability/verifiability of the single remaining SR channel, not loss of multi-dimensional flux mapping.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Spec Bases 3.3.1.1 (p 3/4 3-1, Rev 282) | LO: EXCOREE012 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam: [[2014 NRC Written Exam]]
