const siteUrl = "https://phirk-itsolution.my.id";
const whatsappMessage =
  "Hi, I'd like to consult about your IT Solution services.";
const whatsappLink = `https://wa.me/6289693727848?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "IT Solution Services",
  description:
    "IT Solution services for emergency website rescue, VPS setup, Docker deployment, AI business chatbot, website security audit, and technical solutions for operational needs.",
  keywords: [
    "IT Solution",
    "IT solution service",
    "website rescue",
    "VPS deployment",
    "Docker setup",
    "emergency website fix",
  ],
  alternates: {
    canonical: "/it-solution",
  },
  openGraph: {
    title: "IT Solution Services | Phirk IT Solution",
    description:
      "IT Solution for website errors, VPS deployment, Docker, AI business chatbot, and website security audit.",
    url: `${siteUrl}/it-solution`,
  },
};

const solutionItems = [
  {
    title: "Website Rescue",
    description:
      "Fast fixes for website errors, blank pages, broken login, failed deployments, or production bugs affecting your business."
  },
  {
    title: "VPS & Docker Deployment",
    description:
      "Server setup, containers, reverse proxy, SSL, and deployment workflow so your application runs more stably and repeatably."
  },
  {
    title: "AI Business Chatbot",
    description:
      "Build chatbots for lead capture, FAQ, and business support with a flow tailored to your operational needs."
  },
  {
    title: "Security Review",
    description:
      "Basic configuration and exposure audit so your website and server aren't left running without minimum controls."
  },
];

const benefits = [
  "Technical solutions built around your real problem — not generic templates.",
  "Start with a consultation, then move directly into technical implementation.",
  "Suitable for business owners, agencies, universities, and small teams.",
];

export default function ITSolutionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IT Solution Services",
    serviceType: "IT Solution",
    provider: {
      "@type": "ProfessionalService",
      name: "Phirk IT Solution",
      url: siteUrl,
    },
    areaServed: "Worldwide",
    url: `${siteUrl}/it-solution`,
    description:
      "IT Solution services for website rescue, VPS deployment, Docker, AI chatbot, and website security audit.",
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#03060d_0%,_#081324_42%,_#02040a_100%)] px-6 py-12 text-white sm:px-10 lg:px-12">
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
            IT Solution
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            IT Solution for businesses that need a cleaner website, server, and technical workflow.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This service focuses on solving real operational needs: website rescue, VPS deployment,
            Docker setup, AI business chatbot, and security audits relevant to real-world conditions.
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
              href="/it-consultant"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              View IT Consultant services
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {solutionItems.map((item) => (
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
          <p className="text-sm tracking-[0.35em] text-cyan-200 uppercase">Why This Page Exists</p>
          <h2 className="mt-4 text-3xl font-semibold">So search intent is clearer</h2>
          <div className="mt-8 grid gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-5"
              >
                <p className="text-base leading-8 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
