import { bearerToken, createAdminClient, jsonResponse, readJsonBody, requestIp, requireAllowedOrigin, requirePost, sha256Hex } from '../_shared/http.ts';
import { buildIssueBody, buildIssueTitle, buildLabels, createGitHubIssue } from './github.ts';

type ContactFeedbackBody = {
  category?: string;
  name?: string;
  email?: string;
  message?: string;
  pageUrl?: string;
  userAgent?: string;
  website?: string;
};

const allowedCategories = new Set(['feedback', 'bug', 'question', 'content_issue']);

function cleanText(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().replace(/\s+/g, ' ');
  if (!normalized) return null;
  return normalized.slice(0, maxLength);
}

function cleanMessage(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  if (normalized.length < 10 || normalized.length > 5000) return null;
  return normalized;
}

function cleanEmail(value: unknown): string | null {
  const email = cleanText(value, 254);
  if (!email) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

function cleanUrl(value: unknown): string | null {
  const raw = cleanText(value, 2048);
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { body, error: bodyError } = await readJsonBody<ContactFeedbackBody>(req);
  if (bodyError || !body) return bodyError;

  // Honeypot: pretend success so basic bots do not get a useful signal.
  if (cleanText(body.website, 200)) {
    return jsonResponse({ ok: true, feedbackId: null }, 200, req);
  }

  const category = typeof body.category === 'string' && allowedCategories.has(body.category) ? body.category : 'feedback';
  const message = cleanMessage(body.message);
  if (!message) return jsonResponse({ error: 'message_required' }, 400, req);

  const name = cleanText(body.name, 120);
  const email = cleanEmail(body.email);
  if (body.email && !email) return jsonResponse({ error: 'invalid_email' }, 400, req);
  const pageUrl = cleanUrl(body.pageUrl);
  const userAgent = cleanText(body.userAgent ?? req.headers.get('User-Agent'), 512);

  const rateKey = await sha256Hex(`${requestIp(req)}:${userAgent ?? 'unknown'}`);
  const rateWindow = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const { count: recentCount, error: rateError } = await admin
    .from('contact_messages')
    .select('id', { count: 'exact', head: true })
    .eq('metadata->>rate_key', rateKey)
    .gte('created_at', rateWindow);
  if (rateError) return jsonResponse({ error: 'rate_limit_check_failed' }, 500, req);
  if ((recentCount ?? 0) >= 3) return jsonResponse({ error: 'rate_limited' }, 429, req);

  const anonKey = req.headers.get('apikey') ?? '';
  const accessToken = bearerToken(req);
  let userId: string | null = null;
  if (accessToken && accessToken !== anonKey) {
    const { data } = await admin.auth.getUser(accessToken);
    userId = data.user?.id ?? null;
  }

  const { data: inserted, error: insertError } = await admin
    .from('contact_messages')
    .insert({
      user_id: userId,
      name,
      email,
      category,
      page_url: pageUrl,
      message,
      user_agent: userAgent,
      metadata: { rate_key: rateKey },
    })
    .select('id, created_at')
    .single();

  if (insertError || !inserted) return jsonResponse({ error: 'feedback_insert_failed' }, 500, req);

  const githubToken = Deno.env.get('GITHUB_TOKEN')?.trim();
  const githubRepo = Deno.env.get('GITHUB_REPO')?.trim() || 'Nostem/salem-study-system';
  const githubIssuesEnabled = !['0', 'false', 'no'].includes((Deno.env.get('GITHUB_ISSUES_ENABLED') ?? 'true').toLowerCase());

  if (!githubIssuesEnabled || !githubToken) {
    const attemptedAt = new Date().toISOString();
    await admin
      .from('contact_messages')
      .update({
        metadata: {
          rate_key: rateKey,
          github_issue_error: {
            attempted_at: attemptedAt,
            message: githubIssuesEnabled ? 'github_token_missing' : 'github_issues_disabled',
          },
        },
      })
      .eq('id', inserted.id);
    return jsonResponse({ ok: true, feedbackId: inserted.id }, 200, req);
  }

  try {
    const issueInput = {
      id: inserted.id,
      category,
      message,
      name,
      email,
      pageUrl,
      createdAt: inserted.created_at,
    };
    const issue = await createGitHubIssue({
      repo: githubRepo,
      token: githubToken,
      title: buildIssueTitle(issueInput),
      body: buildIssueBody(issueInput),
      labels: buildLabels(issueInput),
    });
    const archivedAt = new Date().toISOString();
    await admin
      .from('contact_messages')
      .update({
        status: 'archived',
        reviewed_at: archivedAt,
        metadata: {
          rate_key: rateKey,
          github_issue: {
            number: issue.number,
            url: issue.html_url,
            created_at: issue.created_at,
            archived_at: archivedAt,
          },
        },
      })
      .eq('id', inserted.id);

    return jsonResponse({ ok: true, feedbackId: inserted.id, issueUrl: issue.html_url }, 200, req);
  } catch (error) {
    const attemptedAt = new Date().toISOString();
    await admin
      .from('contact_messages')
      .update({
        status: 'new',
        metadata: {
          rate_key: rateKey,
          github_issue_error: {
            attempted_at: attemptedAt,
            message: (error instanceof Error ? error.message : String(error)).slice(0, 500),
          },
        },
      })
      .eq('id', inserted.id);

    return jsonResponse({ ok: true, feedbackId: inserted.id }, 200, req);
  }
});
