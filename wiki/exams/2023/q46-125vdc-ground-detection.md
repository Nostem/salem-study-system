---
title: "2023 Q46 — 125VDC Ground Detection"
category: exams
status: draft
aliases:
  - 2023 Q46
  - 2023-Q46
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q46 — 125VDC Ground Detection</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T2G1 063 K1.01 (2.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Salem Unit 2 was at 100% power<br>
• During control room log taking, the operator observes the 2A 125 VDC Bus ground ohmmeter reading 40K &#937; (ohms)<br><br>
Based on the above condition, which of the following completes both statements?<br><br>
1. The reading indicates that a ground on the bus <strong>_(1)_</strong> detected.<br>
2. If a ground is detected, S2.OP-SO.125-0004, 125VDC Ground Detection, will <strong>_(2)_</strong>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) is NOT (2) open all breakers in the panel, then reclose them one at a time, if no change to ground readings then continue</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) is NOT (2) open one breaker at a time, evaluate ground readings, leave open if ground clears</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) is (2) open one breaker at a time, evaluate ground readings, leave open if ground clears</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) is (2) open all breakers in the panel, then reclose them one at a time, if no change to ground readings then continue</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> Per S2.OP-SO.125-0004, a resistance reading of 50K ohms or less indicates a ground is detected. A resistance of greater than 50K ohms is normal indicating no grounds are present. Therefore, a ground reading of 0 ohms indicates a hard ground is present. Per S2.OP-SO.125-0004, breakers on the bus will be opened one at a time until the resistance indicates greater than 50K ohms.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. First part is incorrect. Plausible because the operator can incorrectly recall and confuse which resistance reading indicates a ground present and believe that the 0 ohms indicates no grounds. Incorrect in that resistance reading less than 50K ohms is a ground. Second part is incorrect. Plausible again if the operator confuses how to interpret resistance readings and believes a lower resistance is good.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. First part is incorrect. Plausible because the operator can incorrectly recall and confuse which resistance reading indicates a ground present and believe that the 0 ohms indicates no grounds. Incorrect in that resistance reading less than 50K ohms is a ground. Second part is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. First part is correct. Second part is incorrect. Plausible because the operator can incorrectly recall and confuse which resistance reading indicates a ground present and believe that the 0 ohms indicates no grounds. Incorrect in that resistance reading less than 50K ohms is a ground.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05DCELECT-11 | Source: New | Cognitive: Fundamental/Memory<br>K/A: 063 K1.01 — Knowledge of the physical connections and/or cause and effect relationships between the DC Electrical Distribution System and the following systems: Ground detection system.</div>
</div>
</details>
</div>

## Connections

- Related systems: [[DC Power]]
- Related procedures: [[S2.OP-SO.125-0004 — 125VDC Ground Detection]]
- Related exam: [[2023 NRC Written Exam]]
