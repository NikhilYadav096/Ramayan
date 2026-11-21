import { useCallback, useEffect, useRef, useState } from "react";
import { ask, hasRemote, type BotReply } from "../chatbot/engine";
import { suggestedQuestions } from "../chatbot/knowledge";

interface Msg {
  id: number;
  from: "user" | "bot";
  text: string;
  reply?: BotReply;
}

const GREETING: Msg = {
  id: 0,
  from: "bot",
  text: "Namaste. I can explain the characters, events, Sanskrit terms and teachings of the Ramayana. Ask me anything, or pick a question below.",
};

export default function RamayanaChatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const idRef = useRef(1);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const send = useCallback(async (q: string) => {
    const text = q.trim();
    if (!text || busy) return;
    setMsgs((m) => [...m, { id: idRef.current++, from: "user", text }]);
    setInput("");
    setBusy(true);
    const reply = await ask(text);
    setMsgs((m) => [...m, { id: idRef.current++, from: "bot", text: reply.text, reply }]);
    setBusy(false);
  }, [busy]);

  // open from anywhere on the page (e.g. suggested-question chips)
  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const q = (e as CustomEvent<{ question?: string }>).detail?.question;
      if (q) void send(q);
    };
    window.addEventListener("open-chat", onOpen);
    return () => window.removeEventListener("open-chat", onOpen);
  }, [send]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const close = () => {
    setOpen(false);
    btnRef.current?.focus();
  };

  return (
    <>
      <button
        ref={btnRef}
        className={`chat-fab ${open ? "is-hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open Ask Ramayana chat"
        aria-expanded={open}
        aria-controls="chat-panel"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        </svg>
        <span>Ask Ramayana</span>
      </button>

      <section
        id="chat-panel"
        className={`chat ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="Ask Ramayana"
        aria-hidden={!open}
        inert={!open}
        onKeyDown={(e) => e.key === "Escape" && close()}
      >
        <header className="chat__head">
          <div>
            <h2 className="chat__title">Ask Ramayana</h2>
            <p className="chat__sub">
              {hasRemote ? "AI guide, grounded in a curated knowledge base" : "A guide based on a curated knowledge base, not a live AI"}
            </p>
          </div>
          <button className="chat__close" onClick={close} aria-label="Close chat">×</button>
        </header>

        <div className="chat__log" ref={logRef} role="log" aria-live="polite" data-lenis-prevent>
          {msgs.map((m) => (
            <div key={m.id} className={`msg msg--${m.from}`}>
              <p>{m.text}</p>
              {m.reply?.source && (
                <p className="msg__meta">
                  Source tradition: {m.reply.source}
                  {m.reply.note && <><br />{m.reply.note}</>}
                </p>
              )}
              {m.reply?.followUps && (
                <div className="msg__follow">
                  {m.reply.followUps.map((f) => (
                    <button key={f} className="chip chip--sm" onClick={() => void send(f)} disabled={busy}>{f}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {busy && (
            <div className="msg msg--bot msg--typing" aria-label="The guide is thinking">
              <i /><i /><i />
            </div>
          )}
        </div>

        {msgs.length < 3 && (
          <div className="chat__suggest" aria-label="Suggested questions">
            {suggestedQuestions.map((q) => (
              <button key={q} className="chip chip--sm" onClick={() => void send(q)} disabled={busy}>{q}</button>
            ))}
          </div>
        )}

        <form
          className="chat__form"
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
        >
          <label className="sr-only" htmlFor="chat-input">Your question about the Ramayana</label>
          <input
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Rama, Sita, dharma…"
            autoComplete="off"
            maxLength={300}
          />
          <button type="submit" disabled={busy || !input.trim()} aria-label="Send question">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M3 20v-6l11-2L3 10V4l19 8z" /></svg>
          </button>
        </form>
      </section>
    </>
  );
}
