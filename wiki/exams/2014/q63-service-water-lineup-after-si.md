---
title: "2014 Q63 — Service Water System Lineup After SI / LOOP"
category: exams
status: draft
aliases:
  - 2014 Q63
  - 2014-Q63
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q63 — Service Water System Lineup After SI / LOOP</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">076 K4.01 (RO 3.8 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power<br>
- A large earthquake 5 miles from the site causes a loss of off-site power.<br>
- The reactor trips, and a MANUAL Safety Injection is initiated.<br>
- 2B EDG output breaker does NOT close.<br><br>
With NO other operator action, which choice contains the system lineup for the Service Water System 5 minutes after the SI?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2SW26-TURB AREA SW MOV STOP VLV OPEN, 22SW122-CC HX SW INLET VALVE SHUT, 23SW223-CV FANS SW OUTLET V OPEN.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 2SW26 -TURB AREA SW MOV STOP VLV OPEN, 21SW122-CC HX SW INLET VALVE OPEN, 22SW223-CV FANS SW OUTLET V SHUT.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2SW26 -TURB AREA SW MOV STOP VLV SHUT, 22SW122-CC HX SW INLET VALVE SHUT, 25SW223-CV FANS SW OUTLET V OPEN.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 2SW26 -TURB AREA SW MOV STOP VLV SHUT, 21SW122-CC HX SW INLET VALVE SHUT, 24SW223-CV FANS SW OUTLET V SHUT.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#fef3c7;border-left:3px solid #f59e0b;border-radius:0 4px 4px 0;margin-bottom:10px;color:#78350f;"><strong>⚠ Answer-key vs explanation disagreement:</strong> The worksheet keys the answer as <strong>A</strong>. The written Explanation of Answers concludes with "D is the only answer that has the correct combination of valves." The keyed letter (A) is retained per source; the disagreement is flagged here and in the ingestion report.</div>
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> Losing power to B 4KV, 460, and 230V bus will result in loss of power to 2SW26. 2SW26 is always open at 100% power, so loss of power to it will prevent it from closing. 21 and 22SW 122s are AOVs whose control circuits will not lose power as long as 115VAC is available. They will CLOSE on a MODE 3. CFCU 223 valves will open on MODE 3. 22 and 24 CFCU's will not start in slow speed due to loss of 460 volt power.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Per the explanation, the 21/22SW122 CC HX SW inlet valves CLOSE on a MODE 3 (SI), so 21SW122 OPEN is incorrect; 22SW223 SHUT is also inconsistent with CFCU 223 valves opening on MODE 3.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> 2SW26 will not close because loss of power prevents it from closing (it remains OPEN), so 2SW26 SHUT is incorrect.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The written explanation states "D is the only answer that has the correct combination of valves," but the keyed answer is A; 2SW26 SHUT contradicts the stated behavior that 2SW26 cannot close on loss of power, and CFCU 223 outlet SHUT contradicts the 223 valves opening on MODE 3.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Service Water System (NOS05SW0NUC-12, Rev 12); Safeguards Equipment Controller (NOS05SEC000-06, p 13,17, Rev 6) | LO: SW0NUCE006 | Source: Facility Exam Bank (Q80618, Editorially Modified, added valve noun names) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[SECs]], [[CFCUs]]
- Related exam: [[2014 NRC Written Exam]]
