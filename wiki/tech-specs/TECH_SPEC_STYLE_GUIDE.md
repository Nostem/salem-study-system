---
title: "Tech Spec Wiki Style Guide"
category: tech-specs
status: edited
publish: false
---

# Tech Spec Wiki Style Guide

Use this guide when creating or revising Salem Tech Spec wiki articles. The goal is a consistent operator-study format that preserves source authority while making LCO entry, actions, bases, traps, and exam relevance fast to review.

## Required article structure

For each Tech Spec subsection, use this order:

1. `## TS number — Plain-language title`
2. LCO callout:
   ```html
   <div class="callout callout-important">
   <div class="callout-label">LCO x.x.x</div>
   Source-faithful LCO summary with exact limits and required equipment.
   </div>
   ```
3. `**Applicability:**` with Modes or condition.
4. `**Actions:**` as a table when there is more than one condition. Use `**Action:**` only for a single simple action.
5. `**Surveillance:**` or key SR bullets when the SR is exam-relevant.
6. `**Basis:**` or a collapsible Bases callout. Include the why, accident-analysis assumption, and common traps.
7. Exam/JPM/scenario callouts after the spec/basis block, not before the governing LCO.
8. Source PDF links near the bottom of the article.
9. Connections block at the end.

## Source authority

- The PDFs are the authority. Do not invent setpoints, action times, or basis language.
- Keep exact numerical values, units, inequality direction, and Modes from the source PDF.
- When OCR text is ambiguous, verify visually from the PDF or use a second extraction method before editing.
- If the wiki uses a simplified table, preserve the controlling condition and completion time from the source.

## Setpoint direction rules

- Do not normalize inequalities by intuition. Preserve the source direction.
- High protective functions trip at/above their setpoint unless the source explicitly says otherwise.
- Low protective functions trip at/below their setpoint unless the source explicitly says otherwise.
- Add a “Direction matters” trap when a high/low direction is easy to reverse.

## Operator-study conventions

- Prefer “why it matters” basis paragraphs over raw legal copy.
- Highlight exam traps with `<span class="hi-trap">` and high-yield facts with `<span class="hi-exam">`.
- Keep internal implementation terms out of learner-facing prose.
- Use plain titles: “Fuel Storage Pool Boron” is better than only “3.7.11.”
- When a source PDF covers multiple subsections, split homepage PDF links and labels so learners can jump directly to the right subsection.

## Review checklist

Before committing a Tech Spec content change:

- [ ] Source PDF link exists and opens.
- [ ] LCO, Applicability, Actions, and Basis are present for every TS subsection that has an LCO.
- [ ] Setpoint directions match the source PDF.
- [ ] Action times and Mode applicability match the source PDF.
- [ ] Bases explain the accident-analysis purpose or operational reason.
- [ ] Exam/JPM/scenario callouts do not replace the source LCO/action content.
- [ ] `python3 -m pytest tests/test_tech_spec_content.py -q` passes.
- [ ] Site build passes.
