export type ContactIssueInput = {
  id: string;
  category: string;
  message: string;
  name: string | null;
  email: string | null;
  pageUrl: string | null;
  createdAt: string;
};

export type GitHubIssue = {
  number: number;
  html_url: string;
  created_at: string;
  title: string;
};

export type GitHubIssueRequest = {
  repo: string;
  token: string;
  title: string;
  body: string;
  labels: string[];
};

const DEFAULT_LABEL = "contact-feedback";
const CATEGORY_LABEL_PREFIX = "contact";

function cleanInline(value: unknown, fallback = "not provided"): string {
  if (value === null || value === undefined) return fallback;
  const text = String(value).trim();
  return text || fallback;
}

function clipInline(value: unknown, limit: number): string {
  const text = String(value ?? "").trim().replace(/\s+/g, " ");
  if (text.length <= limit) return text;
  return `${text.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
}

export function slugLabel(value: string): string {
  const slug = value.toLowerCase().trim().replace(/[^a-z0-9_-]+/g, "-").replace(
    /^-+|-+$/g,
    "",
  );
  return slug || "feedback";
}

export function buildIssueTitle(input: ContactIssueInput): string {
  const category = cleanInline(input.category, "feedback");
  const message = clipInline(input.message || "Contact form submission", 90);
  return clipInline(`[Contact: ${category}] ${message}`, 120);
}

export function buildIssueBody(input: ContactIssueInput): string {
  const category = cleanInline(input.category, "feedback");
  const submitted = cleanInline(input.createdAt, "unknown");
  const pageUrl = cleanInline(input.pageUrl);
  const name = cleanInline(input.name);
  const emailPresent = cleanInline(input.email, "") ? "yes" : "no";
  const message = String(input.message || "").trim();

  return [
    "## Contact Form Submission",
    "",
    `**Category:** ${category}`,
    `**Submitted:** ${submitted}`,
    `**Page:** ${pageUrl}`,
    "",
    "## Message",
    "",
    message,
    "",
    "## Submitter",
    "",
    `Name: ${name}`,
    `Reply email present: ${emailPresent}`,
    "",
    "Reply email is intentionally not copied into this GitHub issue. Check Supabase if a direct reply is needed.",
    "",
    "---",
    "",
    "Source: Salem Study contact form",
    `contact_message_id:${input.id}`,
    "",
  ].join("\n");
}

export function buildLabels(
  input: Pick<ContactIssueInput, "category">,
): string[] {
  return [
    DEFAULT_LABEL,
    `${CATEGORY_LABEL_PREFIX}:${slugLabel(input.category)}`,
  ];
}

function githubHeaders(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
    "User-Agent": "salem-study-contact-feedback",
  };
}

async function readGitHubResponse(
  response: Response,
): Promise<Record<string, unknown>> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { message: text };
  }
}

function githubErrorMessage(
  action: string,
  response: Response,
  body: Record<string, unknown>,
): string {
  const message = typeof body.message === "string"
    ? body.message
    : JSON.stringify(body).slice(0, 500);
  return `${action}:${response.status}:${message.slice(0, 500)}`;
}

async function ensureGitHubLabel(
  repo: string,
  token: string,
  label: string,
): Promise<void> {
  const encodedLabel = encodeURIComponent(label);
  const getResponse = await fetch(
    `https://api.github.com/repos/${repo}/labels/${encodedLabel}`,
    {
      method: "GET",
      headers: githubHeaders(token),
    },
  );
  if (getResponse.ok) return;
  if (getResponse.status !== 404) {
    const body = await readGitHubResponse(getResponse);
    throw new Error(
      githubErrorMessage("github_label_lookup_failed", getResponse, body),
    );
  }

  const createResponse = await fetch(
    `https://api.github.com/repos/${repo}/labels`,
    {
      method: "POST",
      headers: githubHeaders(token),
      body: JSON.stringify({
        name: label,
        color: label === DEFAULT_LABEL ? "0e8a16" : "5319e7",
        description: label === DEFAULT_LABEL
          ? "Imported from Salem Study contact form"
          : "Contact form category",
      }),
    },
  );
  if (createResponse.ok || createResponse.status === 422) return;
  const body = await readGitHubResponse(createResponse);
  throw new Error(
    githubErrorMessage("github_label_create_failed", createResponse, body),
  );
}

async function postGitHubIssue(
  request: GitHubIssueRequest,
  labels: string[],
): Promise<GitHubIssue> {
  const response = await fetch(
    `https://api.github.com/repos/${request.repo}/issues`,
    {
      method: "POST",
      headers: githubHeaders(request.token),
      body: JSON.stringify({
        title: request.title,
        body: request.body,
        labels,
      }),
    },
  );
  const body = await readGitHubResponse(response);
  if (!response.ok) {
    throw new Error(
      githubErrorMessage("github_issue_create_failed", response, body),
    );
  }
  return body as unknown as GitHubIssue;
}

export async function createGitHubIssue(
  request: GitHubIssueRequest,
): Promise<GitHubIssue> {
  const labels: string[] = [];
  for (const label of request.labels) {
    try {
      await ensureGitHubLabel(request.repo, request.token, label);
      labels.push(label);
    } catch (error) {
      console.warn(
        `Skipping GitHub label ${label}: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  try {
    return await postGitHubIssue(request, labels);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (
      labels.length > 0 && message.includes("github_issue_create_failed:422")
    ) {
      return await postGitHubIssue(request, []);
    }
    throw error;
  }
}
