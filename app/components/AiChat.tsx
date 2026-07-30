"use client";

import { useEffect, useRef, useState } from "react";
import type {
  FormEvent,
  KeyboardEvent,
} from "react";
import styles from "./ai-chat.module.css";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const WELCOME: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Halo, saya Dyhel AI berbasis Gemini. Tanyakan tentang project, skill jaringan, MikroTik, FTTH, GPON, atau pengalaman NOC di portofolio ini.",
};

const QUICK_PROMPTS = [
  "Apa skill utama Dyhel?",
  "Jelaskan project FTTH",
  "Apa tugas NOC Support?",
];

const STORAGE_KEY = "dyhel-gemini-chat-v2";
const MAX_LOCAL_MESSAGES = 20;

function makeMessage(
  role: Message["role"],
  content: string,
): Message {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [storageReady, setStorageReady] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved) as Message[];

        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed.slice(-MAX_LOCAL_MESSAGES));
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setStorageReady(true);
    }
  }, []);

  useEffect(() => {
    if (!storageReady) return;

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages.slice(-MAX_LOCAL_MESSAGES)),
    );
  }, [messages, storageReady]);

  useEffect(() => {
    if (!open) return;

    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    const timer = window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 180);

    return () => window.clearTimeout(timer);
  }, [open, loading, messages]);

  async function send(text: string) {
    const clean = text.trim();

    if (!clean || loading) return;

    const userMessage = makeMessage("user", clean);
    const next = [...messages, userMessage].slice(
      -MAX_LOCAL_MESSAGES,
    );

    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          data.error ?? "Chatbot gagal menjawab.",
        );
      }

      setMessages((current) => [
        ...current,
        makeMessage(
          "assistant",
          data.message?.trim() ||
            "Gemini tidak mengembalikan jawaban.",
        ),
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        makeMessage(
          "assistant",
          `Koneksi bermasalah: ${
            error instanceof Error
              ? error.message
              : "Silakan coba lagi."
          }`,
        ),
      ]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(input);
  }

  function keyDown(
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      void send(input);
    }
  }

  function reset() {
    setMessages([WELCOME]);
    setInput("");
    window.localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <aside
      className={`${styles.chat} ${open ? styles.open : ""}`}
      aria-label="Dyhel AI chatbot berbasis Gemini"
    >
      <button
        type="button"
        className={styles.launcher}
        aria-expanded={open}
        aria-controls="dyhel-ai-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.signal} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>

        <span className={styles.launcherText}>
          <b>DYHEL AI</b>
          <small>
            {open ? "CLOSE CHAT" : "POWERED BY GEMINI"}
          </small>
        </span>

        <span
          className={styles.launcherIcon}
          aria-hidden="true"
        >
          {open ? "×" : "↗"}
        </span>
      </button>

      <section
        id="dyhel-ai-panel"
        className={styles.panel}
        aria-hidden={!open}
      >
        <header className={styles.header}>
          <div className={styles.identity}>
            <span className={styles.online} />

            <div>
              <h2>Dyhel AI</h2>
              <p>GEMINI PORTFOLIO ASSISTANT / ONLINE</p>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={reset}>
              RESET
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup chatbot"
            >
              ×
            </button>
          </div>
        </header>

        <div className={styles.messages} aria-live="polite">
          {messages.map((message) => (
            <article
              key={message.id}
              className={`${styles.message} ${
                message.role === "user"
                  ? styles.user
                  : styles.assistant
              }`}
            >
              <span>
                {message.role === "user"
                  ? "YOU"
                  : "DYHEL_AI"}
              </span>
              <p>{message.content}</p>
            </article>
          ))}

          {loading && (
            <article
              className={`${styles.message} ${styles.assistant}`}
            >
              <span>DYHEL_AI</span>
              <div
                className={styles.typing}
                aria-label="Gemini sedang mengetik"
              >
                <i />
                <i />
                <i />
              </div>
            </article>
          )}

          <div ref={endRef} />
        </div>

        {messages.length === 1 && (
          <div className={styles.prompts}>
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => void send(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        <form className={styles.composer} onSubmit={submit}>
          <textarea
            ref={textareaRef}
            value={input}
            maxLength={800}
            rows={1}
            placeholder="Tulis pertanyaan..."
            aria-label="Pesan untuk Dyhel AI"
            disabled={loading}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={keyDown}
          />

          <button
            type="submit"
            disabled={loading || !input.trim()}
          >
            SEND ↗
          </button>
        </form>

        <footer className={styles.footer}>
          <span>GEMINI CAN MAKE MISTAKES</span>
          <span>{input.length}/800</span>
        </footer>
      </section>
    </aside>
  );
}
