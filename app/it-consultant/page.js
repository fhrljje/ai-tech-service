const siteUrl = "https://phirk-itsolution.my.id";
const whatsappMessage =
  "Hi, I'd like to consult about your IT Consultant services.";
const whatsappLink = `https://wa.me/6289693727848?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "IT Consultant Services",
  description:
    "IT Consultant services for system audits, emergency website rescue, VPS infrastructure evaluation, Docker deployment, website security, and actionable technical planning.",
  keywords: [
    "IT Consultant",
    "IT consultant service",
    "website consultant",
    "VPS consultant",
    "Docker consultant",
    "production issue consultant",
  ],
  alternates: {
    canonical: "/it-consultant",
  },
  openGraph: {
    title: "IT Consultant Services | Phirk IT Solution",
    description:
      "IT Consultant for production issues, technical audits, VPS deployment, Docker, website security, and actionable implementation recommendations.",
    url: `${siteUrl}/it-consultant`,
  },
};

const consultingAreas = [
  {
    title: "Production Issue Audit",
    description:
      "Analysis of errors, blank pages, downtime, failed deployments, and bottlenecks disrupting your daily operations."
  },
  {
    title: "Infrastructure Consultation",
    description:
      "Evaluation of VPS setup, reverse proxy, Docker, SSL, backup, and deployment patterns for a more stable stack."
  },
  {
    title: "Basic Security Review",
    description:
      "Mapping of permissions, endpoint exposure, general configuration, and risky implementation gaps."
  },
];

const consultingSteps = [
  "Identify the problem and the business goal you want to achieve.",
  "Audit the current technical state: codebase, server, deployment, or security baseline.",
  "Deliver realistic prioritized recommendations — not generic advice.",
  "If needed, proceed directly to technical execution and fixes.",
];

export default function ITConsultantPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IT Consultant Services",
    serviceType: "IT Consultant",
    provider: {
      "@type": "ProfessionalService",
      name: "Phirk IT Solution",
      url: siteUrl,
    },
    areaServed: "Worldwide",
    url: `${siteUrl}/it-consultant`,
    description:
      "IT Consultant services for system audits, emergency website rescue, VPS evaluation, Docker, and website security.",
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#02040a_0%,_#06101c_38%,_#03060d_100%)] px-6 py-12 text-white sm:px-10 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 transition hover:bg-white/[0.08]"
        >
          Back to homepage
        </a>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur sm:p-10">
          <p className="text-sm tracking-[0.35em] text-cyan-300 uppercase">
            IT Consultant
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            IT Consultant for businesses that need clear technical direction and sensible execution.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Phirk IT Solution helps businesses, agencies, and small teams that need an IT Consultant to understand root causes,
            assess risks, and define technical steps that can be executed immediately.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-white"
            >
              Consult via WhatsApp
            </a>
            <a
              href="/it-solution"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              View IT Solution services
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {consultingAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-white/10 bg-slate-950/50 p-7"
            >
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-8 sm:p-10">
          <p className="text-sm tracking-[0.35em] text-cyan-200 uppercase">How It Works</p>
          <h2 className="mt-4 text-3xl font-semibold">How an IT consultation typically begins</h2>
          <div className="mt-8 grid gap-4">
            {consultingSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-5"
              >
                <p className="text-sm tracking-[0.28em] text-cyan-300 uppercase">Step 0{index + 1}</p>
                <p className="mt-3 text-base leading-8 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
