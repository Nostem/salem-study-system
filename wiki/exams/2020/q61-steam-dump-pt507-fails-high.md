---
title: "2020 Q61 — Steam Dump PT-507 Fails High"
category: exams
status: draft
reference: no
aliases:
  - 2020 Q61
  - 2020-Q61
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q61 — Steam Dump PT-507 Fails High</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">041000K3.05 (2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
<ul style="margin:0;padding-left:20px;">
<li>Unit 2 is operating at 100% Power.</li>
<li>The Steam Dumps are in Main Steam Pressure Control Mode - AUTO due to a previous failure of 2PT-506, Main Turbine Steam Line Inlet Pressure Channel II.</li>
</ul>
<br>
A Reactor Trip and a malfunction causing 2PT-507, Main Steam Header Pressure, to fail high have just occurred.<br><br>
With 2PT-507 failed HIGH, which ONE of the following describes how the Steam Dump System and the plant will respond, assuming no operator action is taken?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Steam Dumps remain CLOSED.  RCS temperature rises until the MS10s, Atmospheric Dump valves, open to control RCS temperature.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Steam Dumps remain CLOSED.  RCS temperature rises until Main Steam Safety Valves open to control RCS temperature.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Steam Dumps OPEN.  RCS temperature rapidly lowers until 543°F when Main Steam Line Isolation (MSLI) and Safety Injection (SI) actuate.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Steam Dumps OPEN.  RCS temperature rapidly lowers until steam dumps close at 543°F.  Steam Dumps will then cycle and maintain RCS temperature at 547°F.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> Following the Rx Trip, all steam dumps will fully open due to the failure of 2PT-507.  This will result in high steam flows on each SG and rapidly lowering RCS temperatures.  When Tavg is < 543°F, a Main Steam Line Isolation (MSLI) and Safety Injection (SI) signal will actuate based on high steam flow coincident with low-low Tavg signal.  At the same time, all the steam dumps will close due to low-low Tavg of 543°F and Tavg will be below 543°F.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Plausible because the candidate might believe that the steam dumps are not armed due to the previous failure of PT-506 or may confuse the response with that of a low failure of PT-507.  Incorrect as the steam dumps are automatically armed in the pressure control mode and this is a failure high, resulting in the dumps opening.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Plausible for the same reasons as A above, but the candidate may also believe the MS10s will not open or handle the loss of load by themselves.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Plausible because the steam dumps will close on the P-12 Tavg Low-Low Tavg Block signal.  Incorrect because when Tavg lowers to < 543°F, the steam dumps will all close and not maintain steam header pressure due to P-12 block signal.  The steam dumps (Group 1 only cooldown valves) will not re-open until the operator manually selects BYPASS TAVG on both trains on 2CC3.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05STDUMP-12, Steam Dump System | LO: ELO 8 | Source: Bank – Salem Vision Database | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Dumps]], [[Main Steam]], [[ECCS]]
- Related exam: [[2020 NRC Written Exam]]
