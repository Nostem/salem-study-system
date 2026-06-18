---
title: "OP-AA-109-115 — Equipment Tagging"
category: admin
status: draft
aliases:
  - OP-AA-109-115
  - equipment tagging
  - red blocking tag
---

# OP-AA-109-115 — Equipment Tagging

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides requirements for the equipment tagging program, including Red Blocking Tags (RBTs), caution tags, and information tags.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q69</div>
A Bezel Red Blocking Tag (RBT) may be used as the <span class="hi-exam">SOLE isolation point ONLY when no other means to isolate are practical to establish a Test Boundary, as long as a hazard to personnel or equipment does not exist due to energized sources</span> (page 72). <span class="hi-trap">It may NOT be used as the sole isolation point just because the tagged position is fail-safe, because the component is inside another tagging request's boundary, or because the location "ensures it won't be operated locally" (a normally inaccessible overhead component could still be accessed).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q70</div>
Breaker Tagging (Attachment 2, section 11.4): If the <span class="hi-exam">bus is energized</span> and the breaker is being removed from the cubicle, the <span class="hi-exam">RBT is removed from the breaker racking mechanism</span>, a <span class="hi-exam">red danger rope, tape or FME device</span> is hung inside the cabinet across the cubicle opening with a warning sign stating the bus is energized, and the <span class="hi-exam">same RBT is transferred to the red rope or tape</span>. <span class="hi-trap">The RBT cannot stay on the breaker (breaker is being removed). A White Caution Tag is NOT an acceptable substitute. An additional RBT on the cubicle door is NOT acceptable — the RBT must go on the danger rope.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q70</div>
Attachment 3, Tagging Rules: In an emergency, the <span class="hi-exam">Shift Manager</span> can authorize the repositioning of a component with a Red Blocking Tag (RBT) attached if it presents an immediate challenge to safety of personnel or plant equipment. <span class="hi-trap">The CRS can approve tagouts and releases but does NOT have authority to authorize repositioning of a Red Blocking Tag component in an emergency.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 RO-A2</div>
Prepare a manual tagout (Form 4) to repair the 11 SI pump. The discriminating element is the <span class="hi-exam">tagging sequence: 1. Bezels (INFO) → 2. Electrical Isolation (RBT OFF/D1) → 3. Mechanical Isolation (RBT SHUT) → 4. Vents and Drains (RBT OPEN)</span>. Per Attachment 2: a minimum of one vent and one drain must be opened inside the boundary (all vents/drains share sequence #16). MOVs may be used as blocking points — 11SJ113 AND 12SJ113 may substitute for the single manual valve 1SJ114, but then the 11/12SJ113 breakers (RBT-OFF), bezels (INFO), and handwheels (RBT-SHUT) must also be tagged. Electrical power must be cleared/tagged before a component's manual operator is tagged.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A2</div>
Alternate-path review of a tagging list for repair of an instrument connection on 21 SI pump. Three errors the SRO must catch: (1) <span class="hi-exam">2SJ30 (RWST to SI Pump Stop Valve) used as a blocking point would render BOTH 21 and 22 SI pumps inoperable — the correct boundary is 21SJ33</span>. (2) <span class="hi-exam">A check valve (21SJ64) is relied upon for the recirc line, but check valves are NOT used for personnel protection — isolation valve 21SJ65 must be tagged closed</span>. (3) <span class="hi-exam">The ECCS cross-connect (21/22SJ113, or 2SJ114) is not tagged</span> (on a different print, drawing 205334 Sheet 1). Return the request to WCC with corrections.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A3</div>
Tagging review for 11 Charging pump removal (Unit 1): review DWG 205228 Sheet 2 for adequate blocking points. Three missing blocking points: (1) <span class="hi-exam">1CV81 (11 CHG PUMP DISCH VALVE) — not listed, must be CLOSED</span> per S1.OP-SO.CVC-0002 step 4.9.4.2. Both 1CV48 and 1CV81 required to isolate discharge. (2) <span class="hi-exam">1CV136 (11 CHG PUMP RECIRC STOP VALVE) — not listed, must be CLOSED</span> per step 4.9.4.4. 1CV135 is a check valve — insufficient for isolation. (3) <span class="hi-exam">1CV356 (CHG PUMP SUCT VENT) — not listed, must be OPEN</span> per step 4.9.4.7. Both 1CV356 and 1CV45 needed for proper vent/drain. <span class="hi-trap">Attachment 2, page 71: liquid systems shall have a minimum of one vent and drain tagged. Applicable Tech Spec: TS 3.5.2 (ECCS — charging pump is an ECCS component, not just a CVCS component).</span>
</div>

## Connections

- Related systems: [[460/230V AC]], [[CVCS]], [[ECCS]]
- Related procedures: [[OP-AA-108-116 — Protected Equipment Program]]
- Related exam questions: [[2022 Q70]], [[2020 Q70]], [[2014 Q69]]
- Related JPMs: [[2018 JPM SRO-A3]], [[2014 JPM RO-A2]], [[2014 JPM SRO-A2]]
- Related exam: [[2022 NRC Written Exam]], [[2020 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]]
