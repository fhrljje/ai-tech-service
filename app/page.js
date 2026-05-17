import Image from "next/image";

const services = [
  {
    title: "Emergency Website Fix",
    description:
      "Perbaikan cepat untuk website error, down, blank page, bug produksi, atau deploy yang gagal saat momen kritis."
  },
  {
    title: "VPS Deployment & Docker Setup",
    description:
      "Setup VPS rapi dengan Docker, reverse proxy, SSL, pipeline deploy, dan monitoring dasar agar aplikasi lebih stabil."
  },
  {
    title: "AI Chatbot Bisnis",
    description:
      "Bangun chatbot untuk lead capture, FAQ, dan support bisnis yang terhubung ke workflow operasional Anda."
  },
  {
    title: "Website Security Audit",
    description:
      "Audit permukaan serangan, hardening dasar, validasi konfigurasi, serta rekomendasi teknis yang bisa langsung dijalankan."
  }
];

const pricing = [
  {
    name: "Website Error Fix",
    price: "Rp300k",
    note: "Mulai dari",
    features: [
      "Bug produksi ringan",
      "Blank page atau error mendadak",
      "Cocok untuk kebutuhan rescue cepat"
    ]
  },
  {
    name: "VPS Setup",
    price: "Rp750k",
    note: "Mulai dari",
    features: [
      "Setup environment server",
      "Deploy aplikasi ke VPS",
      "Bisa dilanjutkan ke Docker stack"
    ]
  },
  {
    name: "AI Chatbot Bisnis",
    price: "Rp2.500k",
    note: "Mulai dari",
    features: [
      "Chatbot untuk FAQ atau lead capture",
      "Integrasi knowledge base sederhana",
      "Flow bisa disesuaikan kebutuhan bisnis"
    ]
  },
  {
    name: "Security Audit",
    price: "Rp1.500k",
    note: "Mulai dari",
    features: [
      "Review dasar konfigurasi dan exposure",
      "Temuan risiko prioritas",
      "Rekomendasi teknis yang actionable"
    ]
  }
];

const portfolio = [
  {
    title: "Anteiku Project",
    result: "Portfolio live yang bisa dibuka langsung untuk melihat gaya implementasi dan kualitas hasil akhir.",
    link: "https://anteiku.my.id",
    cta: "Buka anteiku.my.id"
  },
  {
    title: "Migrasi aplikasi klien ke VPS Docker",
    result: "Deploy jadi repeatable, downtime turun, dan rollback lebih aman."
  },
  {
    title: "Chatbot lead qualification untuk jasa",
    result: "Pertanyaan awal tersaring otomatis sebelum masuk ke tim sales."
  }
];

const caseStudies = [
  {
    title: "Perbaikan OAuth Google kampus",
    summary:
      "Menangani integrasi login Google yang gagal setelah perubahan kredensial, redirect URI, dan konfigurasi environment produksi.",
    metric: "1 stack login dipulihkan",
    impact: "Akses pengguna kembali normal tanpa perubahan alur penggunaan."
  },
  {
    title: "Recovery file dan database production",
    summary:
      "Melakukan identifikasi sumber kerusakan, validasi backup, dan recovery terkontrol untuk mengembalikan layanan inti secepat mungkin.",
    metric: "Downtime ditekan",
    impact: "File penting dan data operasional berhasil dipulihkan dengan prioritas integritas data."
  },
  {
    title: "Deployment Docker multi-service",
    summary:
      "Menyusun layanan aplikasi, database, reverse proxy, dan environment variable agar deployment lebih repeatable dan mudah dikelola.",
    metric: "Multi-service siap deploy",
    impact: "Proses rilis lebih stabil dan rollback lebih aman dibanding setup manual."
  },
  {
    title: "Audit keamanan website",
    summary:
      "Meninjau konfigurasi umum, permission, header, eksposur endpoint, dan celah implementasi dasar yang sering terlewat.",
    metric: "Temuan prioritas dipetakan",
    impact: "Owner mendapatkan daftar risiko teknis yang bisa langsung ditindaklanjuti."
  },
  {
    title: "Troubleshooting Laravel production",
    summary:
      "Menangani kasus error deployment, queue, permission storage, cache config, hingga masalah integrasi database di server live.",
    metric: "Akar masalah diisolasi",
    impact: "Aplikasi kembali berjalan dengan langkah perbaikan yang lebih terstruktur."
  }
];

const stats = [
  { value: "< 2 Jam", label: "Respons awal untuk kasus darurat" },
  { value: "24/7", label: "Fokus pada insiden prioritas" },
  { value: "100%", label: "Stack disusun agar mudah di-maintain" }
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
  "Halo kak, saya ingin konsultasi terkait website/server saya.";
const whatsappLink = `https://wa.me/6289693727848?text=${encodeURIComponent(whatsappMessage)}`;

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
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#010307_0%,_#040812_28%,_#02040a_100%)] text-white"
    >
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
                Konsultasi via WhatsApp
              </a>
            </div>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-6 lg:pb-8">
            <div className="relative">
              <p className="font-[family:var(--font-display)] text-base tracking-[0.42em] text-cyan-200/80 uppercase sm:text-xl">
                PHIRK IT SOLUTION
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-cyan-50/65 sm:text-2xl">
                Solusi cepat untuk website bermasalah, deployment berantakan, dan kebutuhan automasi AI bisnis.
              </p>

              <div className="mt-10 inline-flex rounded-full border border-cyan-300/12 bg-cyan-300/[0.07] px-6 py-3 text-sm tracking-[0.15em] text-cyan-100/80 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                Incident response, deployment, AI integration, dan audit keamanan
              </div>

              <h1 className="hero-title mt-12 max-w-5xl text-5xl leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.35rem]">
                Website error
                <span className="block mt-2">tengah malam?</span>
                <span className="hero-title-accent mt-5 block">Saya bantu bereskan</span>
                <span className="hero-title-accent block">dengan cepat dan rapi.</span>
              </h1>

              <p className="mt-10 max-w-3xl text-base leading-8 text-slate-300/80 sm:text-xl sm:leading-9">
                Layanan ini dibuat untuk bisnis, kampus, agency, dan tim kecil yang butuh orang teknis yang bisa langsung masuk ke problem produksi, membaca pola error, lalu mengeksekusi solusi dengan rapi.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/90 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(125,255,249,0.25)] transition hover:bg-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Hubungi via WhatsApp
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Lihat Pricing
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
                    <p className="mt-3 text-3xl font-semibold text-white/95">Mode Rescue Aktif</p>
                  </div>
                  <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.08] px-4 py-2 text-sm font-medium text-cyan-100/85">
                    Available
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    "Diagnosa downtime dan error produksi",
                    "Deploy VPS dan container lebih tertata",
                    "Audit keamanan website dan server",
                    "Integrasi chatbot untuk kebutuhan bisnis"
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
                    Cocok untuk founder, agency, atau tim kecil yang butuh partner teknis siap eksekusi.
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
                Kombinasi web engineering, security, dan riset yang jarang dimiliki dalam satu profile
              </h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              Ini yang membedakan layanan ini dari jasa web biasa: tidak hanya bisa membangun, tapi juga menganalisis, mengamankan, dan menstabilkan sistem produksi.
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
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Harga sederhana yang mudah dipahami dari awal</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Orang Indonesia biasanya lebih nyaman melihat range harga lebih dulu. Angka di bawah ini adalah harga mulai dari, dan finalnya mengikuti tingkat kompleksitas kasus.
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
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Contoh hasil kerja yang fokus ke dampak nyata</h2>
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
              Pengalaman teknis yang dekat dengan kebutuhan rescue dan produksi
            </h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Section ini disusun untuk menampilkan pola masalah yang umum terjadi di lapangan: autentikasi, recovery data, deployment, security, dan troubleshooting aplikasi live.
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
            Siap Eksekusi
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Jika website sedang bermasalah atau Anda ingin menata stack dengan lebih profesional, mulai dari WhatsApp.
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
              Kembali ke atas
            </a>
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
          Chat WhatsApp
        </span>
      </a>
    </main>
  );
}
