import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type ReviewRating = 'again' | 'hard' | 'good' | 'easy';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function normalizeRating(value: unknown): ReviewRating | null {
  return value === 'again' || value === 'hard' || value === 'good' || value === 'easy' ? value : null;
}

function intervalDays(rating: ReviewRating, totalCorrect: number): number {
  if (rating === 'again') return 1;
  if (rating === 'hard') return 2;
  if (rating === 'good') return totalCorrect >= 2 ? 7 : 3;
  return totalCorrect >= 2 ? 21 : 7;
}

function masteryState(attempts: number, correct: number, incorrect: number): 'new' | 'learning' | 'shaky' | 'mastered' {
  if (attempts <= 0) return 'new';
  if (attempts >= 3 && correct >= 3 && incorrect === 0) return 'mastered';
  if (incorrect > correct) return 'shaky';
  return 'learning';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) return jsonResponse({ error: 'server_not_configured' }, 500);

  const authorization = req.headers.get('Authorization') ?? '';
  const accessToken = authorization.replace(/^Bearer\s+/i, '').trim();
  if (!accessToken) return jsonResponse({ error: 'missing_authorization' }, 401);

  let body: { slug?: unknown; rating?: unknown };
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  const slug = typeof body.slug === 'string' ? body.slug.trim() : '';
  const rating = normalizeRating(body.rating);
  if (!slug) return jsonResponse({ error: 'slug_required' }, 400);
  if (!rating) return jsonResponse({ error: 'rating_required' }, 400);

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return jsonResponse({ error: 'invalid_authorization' }, 401);

  const { data: question, error: questionError } = await admin
    .from('questions')
    .select('id, slug')
    .eq('slug', slug)
    .eq('quiz_eligible', true)
    .eq('is_redacted', false)
    .single();
  if (questionError || !question) return jsonResponse({ error: 'question_not_found' }, 404);

  const { data: existing, error: lookupError } = await admin
    .from('user_question_state')
    .select('attempts_count, correct_count, incorrect_count, last_correct_at, flagged')
    .eq('user_id', userData.user.id)
    .eq('question_id', question.id)
    .maybeSingle();
  if (lookupError) return jsonResponse({ error: 'review_state_lookup_failed' }, 500);

  const now = new Date();
  const isSuccess = rating === 'good' || rating === 'easy';
  const attemptsCount = Number(existing?.attempts_count ?? 0) + 1;
  const correctCount = Number(existing?.correct_count ?? 0) + (isSuccess ? 1 : 0);
  const incorrectCount = Number(existing?.incorrect_count ?? 0) + (isSuccess ? 0 : 1);
  const next = new Date(now.toISOString());
  next.setUTCDate(next.getUTCDate() + intervalDays(rating, correctCount));

  const row = {
    user_id: userData.user.id,
    question_id: question.id,
    attempts_count: attemptsCount,
    correct_count: correctCount,
    incorrect_count: incorrectCount,
    last_attempt_at: now.toISOString(),
    last_correct_at: isSuccess ? now.toISOString() : (existing?.last_correct_at ?? null),
    flagged: Boolean(existing?.flagged ?? false),
    mastery_state: masteryState(attemptsCount, correctCount, incorrectCount),
    next_review_at: next.toISOString(),
    updated_at: now.toISOString(),
  };

  const { error: upsertError } = await admin
    .from('user_question_state')
    .upsert(row, { onConflict: 'user_id,question_id' });
  if (upsertError) return jsonResponse({ error: 'review_state_upsert_failed' }, 500);

  return jsonResponse({
    ok: true,
    slug,
    rating,
    nextReviewAt: row.next_review_at,
    masteryState: row.mastery_state,
  });
});
