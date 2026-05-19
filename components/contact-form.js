"use client";

import { useState } from "react";

const services = [
  "Emergency Website Fix",
  "VPS & Docker Setup",
  "AI Business Chatbot",
  "Security Audit",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-10">
        <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-300 uppercase">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Send a message
        </h2>
        <p className="mt-3 text-base text-slate-400">
          Prefer email? Fill in the form below and I&apos;ll get back to you shortly.
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-[1.5rem] border border-emerald-400/30 bg-emerald-400/10 p-8 text-center">
            <p className="text-lg font-semibold text-emerald-300">Message sent successfully.</p>
            <p className="mt-2 text-sm text-slate-400">I&apos;ll reply to your email within 24 hours.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white transition hover:bg-white/[0.08]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-[0.2em] text-slate-400 uppercase">Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-[0.2em] text-slate-400 uppercase">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06]"
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-xs tracking-[0.2em] text-slate-400 uppercase">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="rounded-[1rem] border border-white/10 bg-[#0d1117] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/40"
              >
                <option value="">Select a service (optional)</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-xs tracking-[0.2em] text-slate-400 uppercase">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your issue or what you need help with..."
                className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06] resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400 sm:col-span-2">
                Something went wrong. Please try again or contact via WhatsApp.
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-cyan-200/90 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-white disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
