import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type ReferenceMode = 'include' | 'exclude' | 'only';

type NormalizedFilters = {
  years: number[];
  tracks: string[];
  statuses: string[];
  topicSlugs: string[];
  questionSlugs: string[];
  referenceMode: ReferenceMode;
  quizEligibleOnly: boolean;
  count: number | null;
};

type CreatePayload = {
  schemaVersion: 1;
  seed: string;
  filters: Partial<NormalizedFilters>;
};

type QuestionRow = {
  id: string;
  slug: string;
  exam_year: number;
  track: string | null;
  status: string;
  quiz_eligible: boolean;
  requires_reference: boolean | null;
  question_topics?: Array<{ topics: { slug: string } | null }>; 
};

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

function uniqueSortedStrings(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.map((value) => String(value).trim()).filter(Boolean))].sort();
}

function uniqueSortedNumbers(values: unknown): number[] {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.map((value) => Number(value)).filter((value) => Number.isFinite(value)))]
    .sort((a, b) => a - b);
}

function normalizeFilters(input: Partial<NormalizedFilters> | undefined): NormalizedFilters {
  const referenceMode = input?.referenceMode === 'exclude' || input?.referenceMode === 'only'
    ? input.referenceMode
    : 'include';
  const count = typeof input?.count === 'number' && Number.isFinite(input.count) && input.count > 0
    ? Math.floor(input.count)
    : null;
  return {
    years: uniqueSortedNumbers(input?.years),
    tracks: uniqueSortedStrings(input?.tracks),
    statuses: uniqueSortedStrings(input?.statuses),
    topicSlugs: uniqueSortedStrings(input?.topicSlugs),
    questionSlugs: uniqueSortedStrings(input?.questionSlugs),
    referenceMode,
    quizEligibleOnly: input?.quizEligibleOnly !== false,
    count,
  };
}

function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function mulberry32(seedInt: number): () => number {
  let a = seedInt >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const out = [...items];
  const rand = mulberry32(xmur3(seed)());
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return '[' + value.map(stableStringify).join(',') + ']';
  const keys = Object.keys(value as Record<string, unknown>).sort();
  return '{' + keys.map((key) => JSON.stringify(key) + ':' + stableStringify((value as Record<string, unknown>)[key])).join(',') + '}';
}

function fnv1aHex(str: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

function questionTopicSlugs(question: QuestionRow): string[] {
  return (question.question_topics ?? [])
    .map((link) => link.topics?.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0);
}

function matchesFilters(question: QuestionRow, filters: NormalizedFilters): boolean {
  if (filters.quizEligibleOnly && !question.quiz_eligible) return false;
  if (filters.questionSlugs.length > 0 && !filters.questionSlugs.includes(question.slug)) return false;
  if (filters.years.length > 0 && !filters.years.includes(question.exam_year)) return false;
  if (filters.tracks.length > 0 && !filters.tracks.includes(question.track ?? '')) return false;
  if (filters.statuses.length > 0 && !filters.statuses.includes(question.status)) return false;
  if (filters.referenceMode === 'exclude' && question.requires_reference === true) return false;
  if (filters.referenceMode === 'only' && question.requires_reference !== true) return false;
  if (filters.topicSlugs.length > 0) {
    const slugs = questionTopicSlugs(question);
    if (!filters.topicSlugs.some((slug) => slugs.includes(slug))) return false;
  }
  return true;
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

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return jsonResponse({ error: 'invalid_authorization' }, 401);
  const userId = userData.user.id;

  let body: CreatePayload;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }
  if (body?.schemaVersion !== 1) return jsonResponse({ error: 'unsupported_schema_version' }, 400);
  const seed = typeof body.seed === 'string' && body.seed.trim() ? body.seed.trim() : 'salem-quiz-v2-default';
  const filters = normalizeFilters(body.filters);

  await admin.from('profiles').upsert({ id: userId }, { onConflict: 'id' });

  const { data: questionData, error: questionError } = await admin
    .from('questions')
    .select('id, slug, exam_year, track, status, quiz_eligible, requires_reference, question_topics(topics(slug))');
  if (questionError) return jsonResponse({ error: 'question_lookup_failed' }, 500);

  const eligible = ((questionData ?? []) as unknown as QuestionRow[])
    .filter((question) => matchesFilters(question, filters))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const shuffled = seededShuffle(eligible, seed);
  const selected = filters.count != null ? shuffled.slice(0, filters.count) : shuffled;
  const selectedSlugs = selected.map((question) => question.slug);
  const sessionPayload = 'seed=' + seed + '|filters=' + stableStringify(filters) + '|slugs=' + selectedSlugs.join(',');
  const stableSessionId = 'qv2-' + fnv1aHex(sessionPayload);

  const { data: insertedSession, error: insertSessionError } = await admin
    .from('quiz_sessions')
    .insert({
      user_id: userId,
      title: 'Quiz v2 generated session',
      quiz_type: 'custom',
      feedback_mode: 'immediate',
      config: {
        schemaVersion: 1,
        source: 'quiz-v2',
        stableSessionId,
        seed,
        filters,
        questionSlugs: selectedSlugs,
        totalEligible: eligible.length,
      },
    })
    .select('id, started_at')
    .single();

  if (insertSessionError || !insertedSession) return jsonResponse({ error: 'session_insert_failed' }, 500);

  if (selected.length > 0) {
    const snapshotRows = selected.map((question, index) => ({
      quiz_session_id: insertedSession.id,
      question_id: question.id,
      position: index + 1,
      choice_order: null,
    }));
    const { error: insertQuestionsError } = await admin
      .from('quiz_session_questions')
      .insert(snapshotRows);
    if (insertQuestionsError) return jsonResponse({ error: 'session_questions_insert_failed' }, 500);
  }

  return jsonResponse({
    ok: true,
    source: 'backend',
    session: {
      schemaVersion: 1,
      sessionId: stableSessionId,
      backendSessionId: insertedSession.id,
      seed,
      filters,
      questionSlugs: selectedSlugs,
      totalEligible: eligible.length,
      generatedAt: insertedSession.started_at,
    },
  });
});
