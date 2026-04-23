---
title: "2022 Q89 — EDG Common Mode Failure TS 3.8.1.1"
category: exams
status: draft
reference: yes
aliases:
  - 2022 Q89
  - 2022-Q89
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q89 — EDG Common Mode Failure TS 3.8.1.1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">064 G2.2.36 (4.2) SRO</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 1 is at 100% power.<br>
• During the performance of the 1A Emergency Diesel Generator (EDG) surveillance run, the 1A EDG failed to start.<br>
• The 1A EDG was declared INOPERABLE today (Monday) at 0600.<br>
• Troubleshooting determined that the K1C relay in the diesel start circuit failed to actuate.<br>
• The 1B and 1C EDGs have these same relay models installed.<br><br>
In accordance with Technical Specification, which ONE of the following is the required action(s)?<br><br>
<span class="val-normal">[REFERENCE PROVIDED]</span>
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Restore the 1A EDG to OPERABLE status by 0600 Thursday ONLY.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Perform an operability run on the 1B and 1C EDGs by 0600 Tuesday AND restore 1A EDG by 0600 Thursday.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> The unit must be in at least HOT STANDBY by 1300 today.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Restore two of the inoperable EDGs to OPERABLE status by 0800 today AND restore the remaining inoperable EDG by 0600 Thursday.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> Based on 1A EDG being declared inoperable due to the K1C relay failure and the same relay models installed on the 1B and 1C EDGs, the SRO should conclude that a common mode failure exists or cannot be ruled out. As a result the SRO should apply TS 3.8.1.1 action "b.3" and "b.4", which requires performing a surveillance run within 24 hours on the two operable EDGs. In any case, restore the inoperable EDG to operable status within 72 hours or be in Hot Standby in the next 6 hours. So in this case the 1B and 1C EDGs require operability runs by 0600 Tuesday and the 1A EDG needs to be restored to operability status by 0600 Thursday.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Plausible because the SRO may believe that a common mode failure does not exist from the information in the stem and that only TS 3.8.1.1 action "b.4" applies to require restoring the 1A EDG to operable status by 0600 Thursday.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. Plausible because the SRO may believe that the common mode failure makes all EDGs inoperable and that TS 3.0.3 now applies requiring the unit to be in Hot Standby by 1300 today (Monday). TS 3.0.3 would not apply here because action "e" exists for two or more diesels inoperable.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Plausible because the SRO may misinterpret implementing TS 3.8.1.1 action "b.3" and "b.4" and believe that since all EDGs are inoperable, that action "e" is required to restore two inoperable diesels to operable status within 2 hours and then implement action "b.4" to restore the remaining EDG within 72 hours or 0600 Thursday.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: TS LCOs 3.8.1.1 and 3.0.3 | LO: NOS05TECHSPEC-14, Objective 14 | Source: Modified Bank — DC Cook 2018 SRO89 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]]
- Related tech specs: [[TS 3/4.8 — Electrical]]
- Related exam: [[2022 NRC Written Exam]]
