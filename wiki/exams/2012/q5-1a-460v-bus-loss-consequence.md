---
title: "2012 Q5 — 1A 460/230V Bus Loss Consequence"
category: exams
status: draft
aliases:
  - 2012 Q5
  - 2012-Q5
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q5 — 1A 460/230V Bus Loss Consequence</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000022K103 / AK1.03 (RO 3.0 / SRO 3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is operating at 100% power.<br>
- 13 Charging pump is in service.<br>
- Normal letdown is in service.<br>
- The 1A 4KV to 460V bus feeder breaker opens, deenergizing the 1A 460/230V bus.<br><br>
With NO operator action, which of the following identifies a consequence, if any, of this event?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> PZR level will remain stable.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> VCT level will be rising at ~ 1% per minute.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> PZR level will be lowering at ~ 1% per minute.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> VCT level will be lowering at ~ 4% per minute.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> Normal power operation has the Positive Displacement charging pump in service (13), which is powered from 1A 460 volt bus. The two centrifugal charging pumps (11 and 12) are powered from B and C 4KV buses respectively. The thumbrule for PZR level is NOT 75 gallons per % of level. (Page 15 of Lesson Plan) When the 1A 460 volt bus is deenergized, the breaker for the 13 charging pump does NOT trip, it does NOT have a UV trip. Therefore, the interlock for automatically closing the 3 letdown orifice isolation valves is not satisfied (all 3 charging pump breakers open.) Letdown remains in service at 75 gpm, which is normal at power letdown flow. This will cause PZR level to lower at 1% per minute. PZR level would remain stable if it is thought that a charging pump remains in operation because of not knowing correct power supplies. The VCT rule of thumb is 20 gallons per % level. With letdown flow still entering the VCT at 75 gpm and no charging pump taking suction and pumping from VCT, VCT level will be RISING at ~4% per minute, not lowering. The 1% VCT distracter is if there is confusion about which (VCT or PZR) will be changing at 1% per minute.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> PZR level would remain stable only if a charging pump remained in operation; the 13 PD charging pump is lost with the 1A 460V bus, so level is not stable.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> VCT level changes at ~4% per minute (20 gal/% rule), not ~1%. The 1% value applies to PZR level, not VCT.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> With letdown still entering the VCT at 75 gpm and no charging pump taking suction from the VCT, VCT level is RISING at ~4% per minute, not lowering.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AB.CVC-0001 Loss of Charging; Pressurizer and PRT Lesson Plan NOS05PZRPRT06 (Rev 6) | LO: ABCVC1E001 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[460/230V AC]], [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2012 NRC Written Exam]]
