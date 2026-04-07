---
title: "2023 Q21 — Containment Spray Logic / Channel Removed from Service"
category: exams
status: draft
aliases:
  - 2023 Q21
  - 2023-Q21
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q21 — Containment Spray Logic / Channel Removed from Service</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">W E14 EA1.08 (4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 at 100%<br>
• Containment Pressure Channel III out of service (properly removed)<br>
• Then trip + SI due to LOCA<br>
• Containment pressures: Ch I 15.2, Ch II 14.7, Ch III 0.0, Ch IV 14.5 psig<br><br>
Are CS/Phase B setpoints met, and what opens the CS2 valves?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> CS/Phase B NOT met, CS2s open on CS signal</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> CS/Phase B NOT met, CS2s open on Phase B signal</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> CS/Phase B ARE met, CS2s open on Phase B signal</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> CS/Phase B ARE met, CS2s open on CS signal</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> With Ch III removed from service (bypassed), logic goes from 2/4 to 2/3. Only Channel I is above 15 psig. 1/3 does not meet 2/3 coincidence — CS and Phase B NOT actuated. CS pump discharge valves (CS2s) open on CS actuation signal only, not Phase B.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Phase B and CS actuate at the same pressure, but CS2s open on CS signal specifically, not Phase B signal.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Only 1/3 channels above 15 psig, 2/3 coincidence not met. CS and Phase B are NOT actuated.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Only 1/3 channels above 15 psig, 2/3 coincidence not met. CS and Phase B are NOT actuated.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-TRIP-1 (R42), NOS05CSPRAY-07 | LO: NOS05CSPRAY-07, Obj 15.a | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Containment Spray]], [[Instrumentation and Controls]]
- Related procedures: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2023 NRC Written Exam]]
