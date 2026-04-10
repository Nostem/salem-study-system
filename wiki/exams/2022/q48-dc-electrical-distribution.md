---
title: "2022 Q48 — Loss of 125 VDC Effect on 4KV Vital Bus"
category: exams
status: draft
aliases:
  - 2022 Q48
  - 2022-Q48
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q48 — Loss of 125 VDC Effect on 4KV Vital Bus</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">063 K3.02 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power.<br>
• 2C 4KV Vital Bus is aligned to 24 SPT (24CSD breaker is closed)<br>
• Subsequently, the following sequence of events occurs:<br>
&nbsp;&nbsp;- OHA B-18, 2C 125VDC CNTRL BUS VOLT LO, is LIT.<br>
&nbsp;&nbsp;- 2C 125 VDC bus indicates 0 volts.<br>
&nbsp;&nbsp;- 24 SPT de-energizes on fault protection.<br><br>
Based on the above condition, which ONE of the following describes the effect on the 2C 4KV Vital Bus?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Energized from the 2C Emergency Diesel Generator.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> De-energized with ALL infeed breakers tripped.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Energized from 23 SPT (23CSD breaker is closed).</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> De-energized with the infeed breaker 24CSD closed.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; D. Correct.</strong> DC power is required to operate relays and contacts for the 4KV Vital Bus breakers. When DC power is lost, breakers will remain "as-is". The EDG breaker cannot close even though it is de-energized because one of the interlocks to close the EDG output breaker is both infeed breakers open. The other (23) SPT cannot close its infeed breaker to the bus (fast transfer scheme) because it has an interlock which requires the other SPTs infeed breaker (24CSD) to be open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> With a loss of 2C 125 VDC, the 2C EDG will not start and the output breaker cannot close to energize the 2C bus. Plausible because the operator may believe that the EDG still has the capability to start and re-energize the bus.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> The 24CSD breaker will remain in the closed position. Plausible because the operator may believe that the 24CSD breaker will still open on loss of 125 VDC.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> The other (23) SPT cannot close its infeed breaker to the bus (fast transfer scheme) because it has an interlock which requires the other SPTs infeed breaker to be open. Plausible because the operator may believe the fast transfer scheme can still energize the bus.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05DCELEC-11, S2.OP-AR.ZZ-0002 (R38) | LO: NOS05DCELEC-11, Obj 14 — Given a DC Electrical System failure, predict the effect of the DC Electrical System failure on the following: Emergency Diesel Generators &amp; Components using DC control power | Source: Bank — Salem 2011 NRC RO56 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[DC Power]], [[4KV]], [[EDGs]]
- Related exam: [[2022 NRC Written Exam]]
