import Image from "next/image";
import ContactForm from "../components/contact-form";

const siteUrl = "https://phirk-itsolution.my.id";

const services = [
  {
    title: "Emergency Website Fix",
    description:
      "Fast fixes for error pages, downtime, blank screens, production bugs, or failed deployments at critical moments."
  },
  {
    title: "VPS Deployment & Docker Setup",
    description:
      "Clean VPS setup with Docker, reverse proxy, SSL, deployment pipelines, and basic monitoring for a more stable application."
  },
  {
    title: "AI Business Chatbot",
    description:
      "Build chatbots for lead capture, FAQ, and business support connected to your operational workflow."
  },
  {
    title: "Website Security Audit",
    description:
      "Attack surface audit, basic hardening, configuration validation, and actionable technical recommendations."
  }
];

const pricing = [
  {
    name: "Website Error Fix",
    price: "$70",
    note: "Starting from",
    features: [
      "Minor production bugs",
      "Blank pages or sudden errors",
      "Ideal for quick rescue needs"
    ]
  },
  {
    name: "VPS Setup",
    price: "$150",
    note: "Starting from",
    features: [
      "Server environment setup",
      "Deploy applications to VPS",
      "Can be extended to Docker stack"
    ]
  },
  {
    name: "AI Business Chatbot",
    price: "$800",
    note: "Starting from",
    features: [
      "Chatbot for FAQ or lead capture",
      "Simple knowledge base integration",
      "Flow tailored to business needs"
    ]
  },
  {
    name: "Security Audit",
    price: "$300",
    note: "Starting from",
    features: [
      "Basic configuration and exposure review",
      "Priority risk findings",
      "Actionable technical recommendations"
    ]
  }
];

const portfolio = [
  {
    title: "Anteiku Project",
    result: "Live portfolio you can visit directly to see the implementation style and quality of final results.",
    link: "https://anteiku.my.id",
    cta: "Visit anteiku.my.id"
  },
  {
    title: "Client app migration to Docker VPS",
    result: "Deployment became repeatable, downtime dropped, and rollback is now safer."
  },
  {
    title: "Lead qualification chatbot for a service business",
    result: "Initial questions are automatically filtered before reaching the sales team."
  }
];

const caseStudies = [
  {
    title: "Google OAuth Campus Fix",
    summary:
      "Handled a failing Google login integration after credential changes, redirect URI issues, and production environment misconfiguration.",
    metric: "1 login stack recovered",
    impact: "User access restored without changing the existing login flow."
  },
  {
    title: "Production File & Database Recovery",
    summary:
      "Identified the source of corruption, validated backups, and performed a controlled recovery to restore core services as quickly as possible.",
    metric: "Downtime minimized",
    impact: "Critical files and operational data recovered with data integrity as the top priority."
  },
  {
    title: "Multi-service Docker Deployment",
    summary:
      "Structured application services, databases, reverse proxy, and environment variables to make deployments more repeatable and manageable.",
    metric: "Multi-service ready to deploy",
    impact: "More stable release process and safer rollback compared to manual setup."
  },
  {
    title: "Website Security Audit",
    summary:
      "Reviewed general configuration, permissions, headers, endpoint exposure, and common implementation gaps that are often overlooked.",
    metric: "Priority findings mapped",
    impact: "Owner received a prioritized list of technical risks ready to be addressed."
  },
  {
    title: "Laravel Production Troubleshooting",
    summary:
      "Handled deployment errors, queue issues, storage permissions, config cache, and database integration problems on a live server.",
    metric: "Root cause isolated",
    impact: "Application restored with a more structured remediation approach."
  }
];

const stats = [
  { value: "< 2 Hours", label: "Initial response for emergency cases" },
  { value: "24/7", label: "Focus on priority incidents" },
  { value: "100%", label: "Stack built for easy maintenance" }
];

const trustSignals = [
  "CEH",
  "Digital Forensics",
  "AI Engineering",
  "Laravel",
  "Docker",
  "VPS",
  "Cybersecurity Research"
];

const whatsappMessage =
  "Hi, I'd like to consult about my website/server.";
const whatsappLink = `https://wa.me/6289693727848?text=${encodeURIComponent(whatsappMessage)}`;

const faqItems = [
  {
    question: "Can you help with sudden production website errors?",
    answer:
      "Yes. The service is focused on rescuing websites with errors, blank pages, failed deployments, and production issues that need fast resolution."
  },
  {
    question: "Do you handle VPS and Docker setup?",
    answer:
      "Yes. Services include VPS deployment, Docker setup, reverse proxy, SSL, and stack configuration for better stability and manageability."
  },
  {
    question: "Can you help with website security audits?",
    answer:
      "Yes. Audits cover basic configuration review, headers, permissions, endpoint exposure, and actionable technical recommendations."
  }
];

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.19 6.4 2.19 11.83c0 1.74.45 3.43 1.31 4.92L2 22l5.41-1.42a9.8 9.8 0 0 0 4.62 1.18h.01c5.42 0 9.83-4.41 9.83-9.84a9.77 9.77 0 0 0-2.82-7.01Zm-7.02 15.19h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.21.84.86-3.13-.2-.32a8.14 8.14 0 0 1-1.25-4.34c0-4.5 3.67-8.16 8.18-8.16 2.18 0 4.22.85 5.76 2.39a8.08 8.08 0 0 1 2.39 5.77c0 4.5-3.67 8.17-8.16 8.17Zm4.48-6.12c-.25-.13-1.49-.73-1.72-.82-.23-.08-.4-.13-.56.13-.17.25-.65.82-.8.99-.15.16-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.07-.12-.56-1.36-.77-1.87-.2-.47-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.12.17 1.76 2.68 4.25 3.76.59.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: "Phirk IT Solution",
        url: siteUrl,
        image: `${siteUrl}/phirk-logo.png`,
        description:
          "IT Consultant and IT Solution services for emergency website rescue, VPS deployment, Docker setup, AI business chatbot, and website security audit.",
        areaServed: "Worldwide",
        serviceType: [
          "IT Consultant",
          "IT Solution",
          "Website Rescue",
          "VPS Deployment",
          "Docker Setup",
          "AI Chatbot",
          "Website Security Audit",
        ],
        sameAs: ["https://wa.me/6289693727848"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-896-9372-7848",
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["en", "id"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Phirk IT Solution",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#010307_0%,_#040812_28%,_#02040a_100%)] text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hero-haze pointer-events-none absolute inset-0" />
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-50" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <section className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-5 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(3,8,18,0.72),rgba(1,4,10,0.65))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_120px_rgba(34,211,238,0.1)] backdrop-blur-[14px] sm:px-8 sm:py-7">
          <div className="mb-8 flex items-center gap-2 border-b border-white/6 pb-5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 h-4 w-4 rounded-full border border-cyan-200/40" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>

          <header className="mb-14 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="max-w-[640px]">
              <div className="logo-stage relative overflow-hidden rounded-[1.9rem] border border-cyan-200/10 bg-[linear-gradient(135deg,rgba(8,16,28,0.86),rgba(7,13,24,0.52))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_60px_rgba(34,211,238,0.08)] sm:px-6">
                <div className="relative h-[112px] sm:h-[132px] lg:h-[152px]">
                  <Image
                    src="/phirk-logo.png"
                    alt="PHIRK IT SOLUTION"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="logo-crop object-cover object-center"
                  />
                </div>
              </div>
              <p className="mt-5 pl-1 font-[family:var(--font-display)] text-sm tracking-[0.42em] text-cyan-100/45 uppercase sm:text-base">
                PHIRK IT SOLUTION
              </p>
            </div>
            <div className="flex items-start justify-start lg:justify-end">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_40px_rgba(125,255,249,0.12)] transition hover:border-cyan-300/30 hover:bg-cyan-300/10 md:inline-flex"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Consult via WhatsApp
              </a>
            </div>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-6 lg:pb-8">
            <div className="relative">
              <p className="font-[family:var(--font-display)] text-base tracking-[0.42em] text-cyan-200/80 uppercase sm:text-xl">
                PHIRK IT SOLUTION
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-cyan-50/65 sm:text-2xl">
                Fast solutions for broken websites, messy deployments, and AI business automation.
              </p>

              <div className="mt-10 inline-flex rounded-full border border-cyan-300/12 bg-cyan-300/[0.07] px-6 py-3 text-sm tracking-[0.15em] text-cyan-100/80 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                Incident response, deployment, AI integration, and security audits
              </div>

              <h1 className="hero-title mt-12 max-w-5xl text-5xl leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.35rem]">
                Website down
                <span className="block mt-2">at midnight?</span>
                <span className="hero-title-accent mt-5 block">I&apos;ll fix it fast</span>
                <span className="hero-title-accent block">and keep it clean.</span>
              </h1>

              <p className="mt-10 max-w-3xl text-base leading-8 text-slate-300/80 sm:text-xl sm:leading-9">
                Phirk IT Solution helps businesses, agencies, and small teams that need an IT Consultant for production issues, website rescue, VPS deployment, and clean technical solutions.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/90 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(125,255,249,0.25)] transition hover:bg-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Contact via WhatsApp
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  View Pricing
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/it-consultant"
                  className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  IT Consultant
                </a>
                <a
                  href="/it-solution"
                  className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  IT Solution
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.7rem] border border-white/8 bg-white/[0.035] p-5 shadow-[0_0_40px_rgba(34,211,238,0.05)] backdrop-blur"
                  >
                    <p className="font-[family:var(--font-display)] text-2xl text-cyan-200">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-300/10 blur-3xl" />
              <div className="relative mt-4 rounded-[2.2rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(10,19,35,0.78),rgba(8,14,27,0.58))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_120px_rgba(34,211,238,0.07)] backdrop-blur-[16px]">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm tracking-[0.34em] text-cyan-200/70 uppercase">Live Ops Panel</p>
                    <p className="mt-3 text-3xl font-semibold text-white/95">Rescue Mode Active</p>
                  </div>
                  <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.08] px-4 py-2 text-sm font-medium text-cyan-100/85">
                    Available
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    "Diagnose downtime and production errors",
                    "Deploy VPS and containers cleanly",
                    "Website and server security audits",
                    "Chatbot integration for business needs"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/8 bg-white/[0.025] px-5 py-5 text-base text-slate-100/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.8rem] border border-cyan-300/12 bg-cyan-300/[0.06] p-5">
                  <p className="text-xs tracking-[0.3em] text-cyan-100/75 uppercase">Priority Support</p>
                  <p className="mt-3 text-lg font-semibold text-white/95">
                    Ideal for founders, agencies, or small teams that need a technical partner ready to execute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-12">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_0_50px_rgba(17,24,39,0.45)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <p className="font-[family:var(--font-display)] text-sm tracking-[0.3em] text-cyan-300 uppercase">
              0{index + 1}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_50px_rgba(8,145,178,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-300 uppercase">
                Trust Signal
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                A rare combination of web engineering, security, and research in a single profile
              </h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              What sets this service apart from typical web agencies: not just building, but analyzing, securing, and stabilizing production systems.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {trustSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-300 uppercase">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Simple pricing, clear from the start</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            The numbers below are starting prices — the final cost depends on the complexity of your case.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {pricing.map((plan, index) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                index === 1
                  ? "border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.12)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <p className="font-[family:var(--font-display)] text-sm tracking-[0.3em] text-cyan-200 uppercase">
                {plan.name}
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-300">{plan.note}</p>
              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                {plan.features.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mb-10">
          <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-300 uppercase">
            Portfolio
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Work samples focused on real-world impact</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-7 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.result}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  {item.cta}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-300 uppercase">
              Case Study
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Technical experience close to real rescue and production needs
            </h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            This section highlights common problem patterns from the field: authentication, data recovery, deployment, security, and live application troubleshooting.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.92))] p-7 shadow-[0_0_60px_rgba(8,145,178,0.08)] transition hover:-translate-y-1 hover:border-cyan-300/35"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%)] opacity-80" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-[family:var(--font-display)] text-sm tracking-[0.3em] text-cyan-300 uppercase">
                      C0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Real-world issue
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-slate-300">{item.summary}</p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/8 p-4">
                    <p className="text-xs tracking-[0.25em] text-cyan-200 uppercase">Metric</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.metric}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs tracking-[0.25em] text-slate-400 uppercase">Impact</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">{item.impact}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(8,145,178,0.28),rgba(17,24,39,0.92))] p-8 shadow-[0_0_100px_rgba(34,211,238,0.12)] sm:p-10">
          <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-100 uppercase">
            Ready to Execute
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
            If your website is having issues or you want to build a more professional stack, start with WhatsApp.
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat via WhatsApp
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to Top
            </a>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-10">
          <p className="font-[family:var(--font-display)] text-sm tracking-[0.35em] text-cyan-300 uppercase">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Common questions before getting started
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-base leading-8 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.4)] transition hover:scale-[1.02] hover:bg-emerald-400 sm:bottom-7 sm:right-7"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <span className="hidden pr-1 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </main>
  );
}
