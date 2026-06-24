import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  buildIssueBody,
  buildIssueTitle,
  buildLabels,
  slugLabel,
} from "./github.ts";

const feedback = {
  id: "44444444-4444-4444-8444-444444444444",
  category: "content_issue",
  message: "This page needs a note about a confusing training reference.",
  name: "Beta Tester",
  email: "tester@example.invalid",
  pageUrl:
    "https://salem-study-system.vercel.app/systems/reactor-coolant-system",
  createdAt: "2026-06-24T12:00:00.000Z",
};

Deno.test("buildIssueBody omits reply email but preserves marker and context", () => {
  const body = buildIssueBody(feedback);

  assert(body.includes("Reply email present: yes"));
  assert(
    body.includes("contact_message_id:44444444-4444-4444-8444-444444444444"),
  );
  assert(
    body.includes(
      "https://salem-study-system.vercel.app/systems/reactor-coolant-system",
    ),
  );
  assert(
    body.includes(
      "This page needs a note about a confusing training reference.",
    ),
  );
  assert(!body.includes("tester@example.invalid"));
});

Deno.test("buildIssueTitle and labels follow the existing contact issue format", () => {
  assertEquals(
    buildIssueTitle(feedback),
    "[Contact: content_issue] This page needs a note about a confusing training reference.",
  );
  assertEquals(buildLabels(feedback), [
    "contact-feedback",
    "contact:content_issue",
  ]);
});

Deno.test("slugLabel normalizes unknown category text safely", () => {
  assertEquals(slugLabel("Content Issue!!"), "content-issue");
  assertEquals(slugLabel("   "), "feedback");
});
