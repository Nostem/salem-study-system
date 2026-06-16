---
title: "2014 Q51 — Automatic Main Steamline Isolation Cause"
category: exams
status: draft
aliases:
  - 2014 Q51
  - 2014-Q51
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q51 — Automatic Main Steamline Isolation Cause</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">039000A3.02 (RO 3.1 / SRO 3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Which of the following would cause an automatic Main Steamline Isolation signal to occur with NO operator action?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> An automatic Safety Injection signal occurs on Steamline D/P.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> All Main Steam Dumps fail full open while operating at 20% power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> NR level on a single SG rises above 67% with the Unit operating at 75% power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> A Phase B Isolation signal is generated during SSPS testing with the Unit operating at 100% power.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> Steam dumps will pass 52% total steam flow. From 0-20% power, the steamflow setpoint is 40%. It also requires Tavg &lt;543°F or steam pressure &lt;600 psig. With 50% load, Tavg would rapidly lower from where it was at 15-18% power (where we normally synch gen) to &lt;543. The steam dumps will turn off at 543°, but not before generating the isolation signal.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> An automatic SI on Steamline D/P would generate Steamline Isolation, but it is itself an automatic signal requiring no operator action; however the question's correct discriminator is the steam dump full-open scenario which generates the Hi Steam Flow + Lo Tavg/Lo Steam Pressure MSI logic. (The SI on Steamline D/P is also the SI signal, not the standalone Hi Steam Flow MSI logic tested here.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> A single SG NR level rising above 67% generates a P-14 / Hi-Hi SG level feedwater isolation and turbine trip, not a Main Steamline Isolation signal.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> A Phase B Isolation signal is a containment isolation actuation; it does not by itself generate a Main Steamline Isolation signal.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Licensed Operator Fluency List (NOS05FLUNCY-09, Rev 9) | LO: MSTEAME015 | Source: Facility Exam Bank (Q40425 made into conditions, not just setpoints, Concept Used) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Steam]], [[Steam Dumps]], [[RPS/SSPS]], [[Steam Generator & Blowdown]]
- Related exam: [[2014 NRC Written Exam]]
