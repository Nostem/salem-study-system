---
title: "Exam Formatting Mockup"
category: exams
status: draft
aliases: []
---

# Exam Formatting Mockup

Three formatting options for exam questions. Answers hidden by default — click to reveal.

---

## Option A — Card Style with Reveal

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:13px;font-weight:600;">Q1 — RCS Low Flow / P-7 and P-8 Logic</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">K/A: EPE 7 EA2.08 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:12px;">

**Given:**
- Salem Unit 2 is at 25% reactor power.
- The RO reports the following flow indications on 21 RC loop:
  - Channel 1 - 89%
  - Channel 2 - 89%
  - Channel 3 - 92%

Which of the following describes the expected response?

</div>

<div style="margin-bottom:12px;">
<div style="padding:8px 12px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;">A. Per the Alarm Response Procedure, manually trip the reactor, stop 21 RCP, and enter 2-EOP-TRIP-1.</div>
<div style="padding:8px 12px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;">B. RC flows are degraded but above the RPS setpoint for low RCS flow; power operation may continue.</div>
<div style="padding:8px 12px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;">C. Automatic reactor trip based on 2/3 low flow channels on one RC loop with power greater than P-7.</div>
<div style="padding:8px 12px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;">D. Automatic reactor trip based on 1/3 low flow channels on one RC loop with power greater than P-7.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">Show Answer & Explanation</summary>
<div style="margin-top:8px;padding:12px;background:#0d1220;border-radius:6px;font-size:12px;">
<div style="color:#22c55e;font-weight:600;margin-bottom:8px;">Answer: A</div>
<div style="color:#9ca3af;line-height:1.7;">Two out of three channels ≤90% of design loop flow indicates degraded RCP. Since reactor power is above P-7 (10%) and below P-8 (36%), no automatic reactor trip will occur with a loss of only one RC loop low flows. However, per S2.OP-AR.ZZ-0004 for OHA D-28, with a degraded RCP flow, the RCP must be stopped, the reactor manually tripped, and enter 2-EOP-TRIP-1 since Tech Specs does not allow for three loop operation in Mode 1.</div>
<div style="margin-top:8px;font-size:11px;color:#6b7280;">Ref: Logic drawing 221054 | LO: NOS05RXPROT-15, Obj 12.a | Source: New | Cognitive: Fundamental/Memory</div>
</div>
</details>
</div>

---

## Option B — Minimal with Colored Answer Pill

### Q1 — RCS Low Flow / P-7 and P-8 Logic
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">EPE 7 EA2.08 (3.0) | Fundamental/Memory</span>

**Given:**
- Salem Unit 2 is at 25% reactor power.
- The RO reports the following flow indications on 21 RC loop:
  - Channel 1 - 89%, Channel 2 - 89%, Channel 3 - 92%

Which of the following describes the expected response?

- **A.** Per the Alarm Response Procedure, manually trip the reactor, stop 21 RCP, and enter 2-EOP-TRIP-1.
- **B.** RC flows are degraded but above the RPS setpoint for low RCS flow; power operation may continue.
- **C.** Automatic reactor trip based on 2/3 low flow channels on one RC loop with power greater than P-7.
- **D.** Automatic reactor trip based on 1/3 low flow channels on one RC loop with power greater than P-7.

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;">Reveal Answer</summary>

<span style="display:inline-block;margin-top:8px;padding:4px 12px;background:#052e16;color:#22c55e;border-radius:4px;font-size:13px;font-weight:600;">A</span>

Two out of three channels ≤90% of design loop flow indicates degraded RCP. Above P-7 (10%) but below P-8 (36%), no automatic trip on one loop low flow. Per alarm response, manually trip reactor, stop RCP, enter EOP-TRIP-1.

*Ref: Logic drawing 221054 | Source: New*
</details>

---

## Option C — Compact Cards with Category Tags

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;overflow:hidden;margin-bottom:16px;">
<div style="padding:12px 16px;border-bottom:1px solid #1a2035;display:flex;justify-content:space-between;align-items:center;">
<span style="color:#e0e4ea;font-size:13px;font-weight:600;">Q1 — RCS Low Flow / P-7 and P-8 Logic</span>
<div>
<span style="font-size:9px;padding:2px 6px;background:rgba(96,165,250,0.15);color:#93bbfc;border-radius:3px;margin-left:4px;">RPS</span>
<span style="font-size:9px;padding:2px 6px;background:rgba(96,165,250,0.15);color:#93bbfc;border-radius:3px;margin-left:4px;">RCP</span>
</div>
</div>
<div style="padding:16px;font-size:12px;color:#9ca3af;line-height:1.7;">

**Given:** Unit 2 at 25% power. 21 RC loop flows: Ch1 89%, Ch2 89%, Ch3 92%.

Which describes the expected response?

<div style="margin:12px 0;">
<div style="padding:6px 12px;border-left:3px solid #1a2035;margin-bottom:3px;color:#c8cdd5;font-size:12px;"><strong>A.</strong> Manually trip reactor, stop 21 RCP, enter EOP-TRIP-1.</div>
<div style="padding:6px 12px;border-left:3px solid #1a2035;margin-bottom:3px;color:#c8cdd5;font-size:12px;"><strong>B.</strong> Flows degraded but above setpoint; continue operation.</div>
<div style="padding:6px 12px;border-left:3px solid #1a2035;margin-bottom:3px;color:#c8cdd5;font-size:12px;"><strong>C.</strong> Auto trip on 2/3 low flow, one loop, above P-7.</div>
<div style="padding:6px 12px;border-left:3px solid #1a2035;margin-bottom:3px;color:#c8cdd5;font-size:12px;"><strong>D.</strong> Auto trip on 1/3 low flow, one loop, above P-7.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:11px;font-weight:600;">Show Answer & Explanation ▾</summary>
<div style="margin-top:10px;padding:12px;background:#0a0e17;border-radius:6px;">
<span style="display:inline-block;padding:3px 10px;background:#052e16;color:#22c55e;border-radius:4px;font-size:12px;font-weight:600;margin-bottom:8px;">Answer: A</span>

<div style="color:#9ca3af;font-size:12px;line-height:1.7;">2/3 channels ≤90% design flow = degraded RCP. Above P-7 but below P-8 → no auto trip on single loop low flow. Per OHA D-28 alarm response: stop RCP, manually trip reactor, enter EOP-TRIP-1. TS does not allow 3-loop Mode 1 operation.</div>

<div style="margin-top:8px;display:flex;gap:12px;flex-wrap:wrap;font-size:10px;color:#6b7280;">
<span>📋 Logic dwg 221054</span>
<span>🎯 NOS05RXPROT-15</span>
<span>🆕 New question</span>
<span>🧠 Fund/Memory</span>
</div>
</div>
</details>

</div>
</div>

---

Pick one, or mix elements from different options. I'll delete this page after.
