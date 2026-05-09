---
title: "2016 Q39 — SEC BLOCK switches fail — must deenergize 2A/2B/2C VIBs to start 21 Charging, 21 SI, #2 ECAC"
category: exams
status: draft
aliases:
  - 2016 Q39
  - 2016-Q39
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q39 — SEC BLOCK switches fail — must deenergize 2A/2B/2C VIBs to start 21 Charging, 21 SI, #2 ECAC</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013000K201 K2.01 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 2 is operating at 100% power.<br>
- 21 and 22 CCW pumps are in service.<br>
- 23 Charging pump is in service.<br>
- A Safety Injection is initiated.<br><br>
When performing SEC loading verification in TRIP-1, the PO reports the following equipment is not running:<br><br>
- 21 Charging pump<br>
- 21 Safety Injection pump<br>
- #2 Emergency Air Compressor<br><br>
Assuming the SEC BLOCK switches on 2RP1 DO NOT WORK, which of the following identifies ONLY the power supplies which must be deenergized in order to start the above equipment?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2AVIB24, 2BVIB27.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 2AVIB24, 2CVIB9.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 2BVIB27, 2CVIB9.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 2AVIB24, 2BVIB27, 2CVIB9.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> 55.41.b(7) The A, B, C SEC's are powered from their respective vital instrument buses (VIB), and control the equipment powered from the respective 4KV and 460 Volt buses. 21 Charging pump is powered from B vital bus. 21 SI pump is powered from A vital bus. #2 ECAC is powered from C vital bus. <em>(Source-doc note: the question's Answer form box shows "c"; the official RO Answer Key on PDF p2 shows "d", and the explanation enumerates all three buses A+B+C — choice D is the only choice that lists all three. D is correct per the answer key and the explanation.)</em></div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Source explanation does not separately address — see correct-answer block above (#2 ECAC is powered from C vital bus).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Source explanation does not separately address — see correct-answer block above (21 Charging pump is powered from B vital bus).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Source explanation does not separately address — see correct-answer block above (21 SI pump is powered from A vital bus).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Rx Trip or Safety Injection 2-EOP-TRIP-1 p.1 rev 30; 4KV Vital buses one line 203061 rev 35; 2C 460V vital bus one line 601392 rev 24 | LO: SEC000E011 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[SECs]], [[ECCS]], [[CVCS]], [[115V AC]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2016 NRC Written Exam]]
