---
title: "2022 Q38 — RTB B Opens Only / Turbine Trip Component"
category: exams
status: draft
aliases:
  - 2022 Q38
  - 2022-Q38
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q38 — RTB B Opens Only / Turbine Trip Component</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">012 K3.02 (3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power<br>
• The reactor automatically trips<br>
• ONLY Reactor Trip Breaker "B" OPENS<br><br>
Based on the above condition, which ONE of the following components will trip the Main Turbine?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 20-AST</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 20-2AST</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 20-ET</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 2EH61</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> Trip of RTB "B" will energize the Emergency Trip Fluid Solenoid valve (20-ET) dumping EH fluid directly to the reservoir causing all turbine steam valves to close and tripping the turbine. The 20-ET serves as a backup to the interface valve (2EH61). The 2EH61 interface valve will open when either the 20-AST or 20-2AST solenoids energize to dump ASO oil from the top of the 2EH61 valve resulting in the 2EH61 valve opening and dumping EH fluid to the reservoir. Trip of RTB "A" will energize either the 20-AST or 20-2AST solenoids. Since RTB "A" did not open, the only component that will actuate to cause a turbine trip will be the actuation of the 20-ET solenoid.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. The 20-AST energizes from RTB "A" which failed to open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. The 20-2AST energizes from RTB "A" which failed to open.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. The 2EH61 opens when the 20-AST or the 20-2AST energizes from RTB A which failed to open.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05DEHC00-16, Logic drawings 221065, 205318, 604273 | LO: NOS05RXPROT-15, Obj 27 — Given an RPS failure, predict the effect on the Main Turbine/Generator | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Main Turbine]]
- Related exam: [[2022 NRC Written Exam]]
