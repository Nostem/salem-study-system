---
title: "2019 Q86 — Loss of RHR EAL CA4.1"
category: exams
status: draft
reference: no
type: SRO
aliases:
  - 2019 Q86
  - 2019-Q86
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q86 — Loss of RHR EAL CA4.1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">005 RHR System - G2.4.41 (4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong><span class="val-normal">REFERENCES PROVIDED</span></strong><br><br>
<strong>Given:</strong><br>
&bull; Unit 2 has entered MODE 3 for a planned refueling outage on October 15 at 0700<br><br>
On October 17 at 0700<br>
&bull; Containment is OPEN<br>
&bull; TAVG is 150 &deg;F<br>
&bull; PZR Level is 10%<br>
&bull; BOTH RHR Pumps have tripped<br>
&bull; The crew has just entered S2.OP-AB.RHR-0001 (Loss Of RHR)<br><br>
Which ONE of the following completes the statements below?<br><br>
If the RHR Pumps remain tripped, ___ is the EARLIEST time that the criteria for declaring an Alert per EAL# CA4.1 will be met.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 0710</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 0715</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 0810</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 0815</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> Using the provided references, the operator should determine a heat up of 5 &deg;F per minute (2 days after shutdown per before offload curve). Unit 2 will be in MODE 4 (&gt;200 &deg;F) in 10 minutes ((200 - 150) / 5). The RCS is intact. IAW EAL#CA4.1, to meet the criteria of CA4.1 with the RCS intact, RCS must be &gt; 200 &deg;F for 60 minutes. This will occur at 0810.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect but plausible. 0710 would be the time if the candidate correctly calculated the heatup to 200 &deg;F with a 5 &deg;F / minute heatup rate and incorrectly used a 0 minute duration to meet EAL# CA4.1 criteria (by misinterpreting CA4.1 EAL Table).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect but plausible. 0715 would be the time if the candidate incorrectly calculated the heatup to 200 &deg;F with a 3.4 &deg;F / minute heatup rate and incorrectly used a 0 minute duration to meet EAL# CA4.1 criteria (by misinterpreting CA4.1 EAL Table).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect but plausible. If the candidate used the wrong heatup curve (after offload curve), then the heatup rate would be 3.4 &deg;F / hr. Therefore, it would then take 15 minutes ((200-150) / 3.4) for the RCS to reach 200 &deg;F. If the candidate then correctly applied 60 minute criteria for meeting CA4.1, this would equate to 0815.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.RHR-0001 (Loss Of RHR), EP-SA-111-27, AB.RHR-0001 Attachment 5 (HEATUP RATE FOR LOSS OF RHR COOLING), EA-SA-111-127 EAL# CA4.1 | LO: EMERGENCY COORDINATOR AND DIRECT SUPPORT PERSONNEL DUTIES — Given plant conditions for an emergency, CLASSIFY the event in accordance with the ECG | Source: New | Cognitive: Higher</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]]
- Related abnormals: [[AB.RHR-0001 — Loss of RHR]]
- Related admin: [[EP-SA-325 — Emergency Plan Implementing Procedures]]
- Related exam: [[2019 NRC Written Exam]]
