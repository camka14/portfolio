"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormStatus = {
  tone: "success" | "error";
  text: string;
} | null;

const fieldClass =
  "min-h-12 w-full rounded-2xl border border-zinc-950/15 bg-[#f5f7ef] px-4 py-3 text-base text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-lime-500 focus:ring-4 focus:ring-lime-300/35 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);

    if (!form.current) {
      setIsLoading(false);
      setStatus({
        tone: "error",
        text: "The form was not ready. Please refresh and try again.",
      });
      return;
    }

    emailjs
      .sendForm("personal_email", "template_f7ttfo5", form.current, "znJRojsfaXicH1TvH")
      .then(
        () => {
          setStatus({
            tone: "success",
            text: "Message sent. I will reply as soon as I can.",
          });
          setIsLoading(false);
          form.current?.reset();
        },
        () => {
          setStatus({
            tone: "error",
            text: "The message did not send. Please email me directly.",
          });
          setIsLoading(false);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm font-semibold text-zinc-950 dark:text-white">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm font-semibold text-zinc-950 dark:text-white">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-semibold text-zinc-950 dark:text-white">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-lime-300 px-6 text-sm font-semibold text-zinc-950 transition duration-300 ease-out hover:bg-lime-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Sending" : "Send Message"}
      </button>

      {status ? (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-2xl px-4 py-3 text-sm ${
            status.tone === "success"
              ? "bg-lime-100 text-lime-950 dark:bg-lime-300/15 dark:text-lime-100"
              : "bg-red-100 text-red-900 dark:bg-red-500/15 dark:text-red-100"
          }`}
        >
          {status.text}
        </p>
      ) : null}
    </form>
  );
}
