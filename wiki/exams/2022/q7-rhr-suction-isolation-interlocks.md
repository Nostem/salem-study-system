---
title: "2022 Q7 — RHR Suction Isolation Interlocks"
category: exams
status: draft
aliases:
  - 2022 Q7
  - 2022-Q7
  - 2022 Q07
  - 2022-Q07
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q7 — RHR Suction Isolation Interlocks</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE 25 AK3.02 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is in MODE 4 with RCS heat up in progress IAW S2.OP-IO.ZZ-0002, Cold Shutdown to Hot Standby.<br>
• 2RH1 and 2RH2, RHR Suction Isolation Valves, are OPEN.<br>
• Pressurizer Overpressure Protection System (POPS) Channels are ARMED.<br>
• 21 RHR Pump is in shutdown cooling mode.<br>
• 22 RHR Pump is aligned for ECCS injection.<br><br>
Subsequently, the following events occurs;<br>
• 21 RHR Pump trips.<br>
• 22 RHR Pump fails to start.<br>
• RCS pressure is 350 psig and rising.<br><br>
Which ONE of the following completes both statements?<br><br>
1. 2RH1 and 2RH2 <span class="blank">_(1)_</span> close automatically when RCS pressure exceeds 375 psig.<br><br>
2. Closing the 2RH1 and 2RH2 is required to prevent exceeding the design pressure of the RHR system <span class="blank">_(2)_</span>.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">(1)</span> will<br><span class="blank">(2)</span> suction piping ONLY</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">(1)</span> will<br><span class="blank">(2)</span> suction AND discharge piping</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">(1)</span> will NOT<br><span class="blank">(2)</span> suction AND discharge piping</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">(1)</span> will NOT<br><span class="blank">(2)</span> suction piping ONLY</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 2RH1 and 2RH2 do not automatically close if RCS pressure exceeds 375 psig. The 2RH1 and 2RH2 are interlocked to prevent opening until PT-403 and PT-405 are less than 375 psig. POPs will actuate when RCS pressure exceeds 375 psig (PT-403 or PT-405) and open both PZR PORVs. By station procedures (S2.OP.IO-ZZ-0002) 2RH1 and 2RH2 will be manually closed during RCS heat up to prevent exceeding the design pressure rating of the RHR system piping (discharge pipe rating 600 psig and suction pipe rating 450 psig, design temperature is 400 °F). The RHR system has relief valves at the discharge and suction line. These relief valves will lift to prevent exceeding the system design limit if RCS pressure continued to increase with RH1 and RH2 open. In this case, based on the condition in the stem with the RCS pressure at 350 psig, closing the RH1 and RH2 is necessary to prevent exceeding the design limits of the suction piping. If RCS pressure continues to increase the suction relief valve will lift at 350 psig to prevent overpressurizing the suction piping and exceeding its design limit of 450 psig. The discharge piping is not affected in this case because the RCS pressure is well below its design rating of 650 psig. (Note: choices C and D were mislabeled/swapped on the as-administered exam.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> First part is incorrect. Plausible because POPs does automatically open the PR1 and PR2 PZR PORVs when RCS pressure is greater than 375 psig, but could confuse the RH1 and RH2 interlock that keeps them closed if RCS > 375 psig. Second part is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> First part is incorrect. Plausible because POPs does automatically open the PR1 and PR2 PZR PORVs when RCS pressure is greater than 375 psig, but could confuse the RH1 and RH2 interlock that keeps them closed if RCS > 375 psig. Second part is incorrect. Plausible if the operator believes that the RHR discharge piping is rated at the same design pressure as the suction piping.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> First part is correct. Second part is incorrect. Plausible if the operator believes that the RHR discharge piping is rated at the same design pressure as the suction piping.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-IO.ZZ-0002 | LO: NOS05RHR00, Objective 2 | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Residual Heat Removal]], [[Pressurizer]]
- Related exam: [[2022 NRC Written Exam]]
