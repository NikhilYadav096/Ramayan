import { knowledgeBase, type KBEntry, type Source } from "./knowledge";

export interface BotReply {
  text: string;
  source?: Source;
  note?: string;
  followUps?: string[];
  /** "local" = curated knowledge base; "remote" = a connected AI backend; "none" = no answer found */
  origin: "local" | "remote" | "none";
}

const STOP = new Set(["the", "a", "an", "is", "was", "were", "of", "in", "to", "and", "who", "what", "why", "how", "did", "do", "does", "me", "about", "tell", "are", "for", "on", "it", "his", "her", "their", "this", "that", "with", "at"]);

const norm = (s: string) =>
  s.toLowerCase().replace(/[''`]/g, "").replace(/[^a-z0-9ऀ-ॿ\s]/g, " ").replace(/\s+/g, " ").trim();

/** Scores an entry: whole-phrase hits weigh more than single tokens. */
function score(query: string, tokens: Set<string>, e: KBEntry): number {
  let s = 0;
  if (norm(e.question) === query) s += 100;
  for (const k of e.keywords) {
    const kk = norm(k);
    const words = kk.split(" ");
    if (words.length > 1) {
      if (query.includes(kk)) s += 4 + words.length;
    } else if (tokens.has(kk)) {
      s += kk.length <= 3 ? 1.5 : 3;
    }
  }
  return s;
}

export function localAnswer(input: string): BotReply {
  const q = norm(input);
  if (!q) return { origin: "none", text: "Please type a question about the Ramayana." };
  const tokens = new Set(q.split(" ").filter((w) => !STOP.has(w)));
  const ranked = knowledgeBase
    .map((e) => ({ e, s: score(q, tokens, e) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);

  if (!ranked.length || ranked[0].s < 3) {
    return {
      origin: "none",
      text: "I don't have a reliable answer to that in my curated notes, and I'd rather not guess about a text this important. Try asking about a character, an event, a Sanskrit term, or the teachings. Or choose one of the suggestions below.",
      followUps: ["Who was Lord Rama?", "What is the Ramayana?", "What do the Sanskrit terms mean?"],
    };
  }
  const best = ranked[0].e;
  return { origin: "local", text: best.answer, source: best.source, note: best.note, followUps: best.followUps };
}

/**
 * Integration point for a future AI backend.
 * Set VITE_CHAT_ENDPOINT to YOUR server route (never an API key in the browser). The server should
 * hold the provider key, ground the model on knowledgeBase, and return JSON: { answer: string }.
 * If unset or failing, the site falls back to the local knowledge base.
 */
const ENDPOINT = (import.meta.env.VITE_CHAT_ENDPOINT as string | undefined) || "";
export const hasRemote = Boolean(ENDPOINT);

export async function ask(input: string): Promise<BotReply> {
  if (ENDPOINT) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });
      if (res.ok) {
        const data = (await res.json()) as { answer?: string };
        if (data.answer) return { origin: "remote", text: data.answer };
      }
    } catch {
      /* fall through to local */
    }
  }
  // brief, honest "thinking" delay so the loading state is perceptible
  await new Promise((r) => setTimeout(r, 450));
  return localAnswer(input);
}
