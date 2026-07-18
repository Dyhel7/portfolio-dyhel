const projects = [
  {
    code: "noc#26-mikrotik",
    title: "MikroTik CHR Network Lab",
    description:
      "Simulasi konfigurasi router, DHCP, firewall, routing, dan PPPoE menggunakan MikroTik CHR, VirtualBox, serta Winbox.",
    tags: ["RouterOS", "MikroTik", "VirtualBox", "Networking"],
    status: "Learning",
  },
  {
    code: "noc#26-ftth",
    title: "FTTH Network Documentation",
    description:
      "Dokumentasi alur jaringan ISP dari router core, distribusi, OLT, OTB, ODC, ODP hingga ONU pelanggan.",
    tags: ["FTTH", "GPON", "OLT", "Fiber Optic"],
    status: "In Progress",
  },
  {
    code: "noc#26-monitoring",
    title: "Network Device Monitoring",
    description:
      "Mempelajari monitoring router, OLT, dan ONU menggunakan RConfig serta sistem monitoring jaringan.",
    tags: ["Monitoring", "RConfig", "SNMP", "NOC"],
    status: "Learning",
  },
];

const skills = [
  "TCP/IP",
  "OSI Model",
  "MikroTik RouterOS",
  "Routing",
  "Switching",
  "Firewall",
  "DHCP",
  "DNS",
  "PPPoE",
  "GPON",
  "FTTH",
  "OLT ZTE C320",
  "Fiber Optic",
  "RConfig",
];

const experiences = [
  {
    period: "2026 — Sekarang",
    role: "NOC Support Intern",
    company: "PT. Swajasa Lintas Media",
    description:
      "Mempelajari monitoring jaringan, troubleshooting pelanggan, konfigurasi MikroTik, perangkat GPON, serta dokumentasi infrastruktur FTTH.",
    activities: [
      "Monitoring router, OLT, dan ONU pelanggan",
      "Mempelajari konfigurasi MikroTik RouterOS",
      "Memahami alur jaringan FTTH dari OLT sampai ONU",
      "Mempelajari troubleshooting koneksi pelanggan",
    ],
  },
];

const learningLogs = [
  {
    date: "18 Jul 2026",
    title: "OLT ZTE C320",
    description:
      "Mempelajari dasar CLI, pengecekan status perangkat, serta monitoring ONU.",
  },
  {
    date: "17 Jul 2026",
    title: "GPON dan Optical Budget",
    description:
      "Mempelajari Tx Power, Rx Power, redaman splitter, konektor, dan fusion splice.",
  },
  {
    date: "16 Jul 2026",
    title: "MikroTik Firewall",
    description:
      "Mempelajari chain input, forward, output, dan fungsi firewall filter.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a
  href="#"
  className="font-mono text-lg font-black uppercase tracking-[0.2em]"
>
  DYHEL.
</a>

          <nav className="flex gap-5 font-mono text-sm">
  <a
  href="#work"
  className="text-neutral-500 transition-colors hover:text-white"
>
  Work
</a>

  <a
  href="#experience"
  className="text-neutral-500 transition-colors hover:text-white"
>
  Experience
</a>

  <a
  href="#about"
  className="text-neutral-500 transition-colors hover:text-white"
>
  About
</a>

  <a
  href="#contact"
  className="text-neutral-500 transition-colors hover:text-white"
>
  Contact
</a>
</nav>
        </div>
      </header>

      <section className="border-b border-white/20">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
  // 2026_NETWORK_ACTIVITY
</p>

          <div className="overflow-hidden border border-white/25 bg-black text-white shadow-[8px_8px_0_rgba(255,255,255,0.10)]">
       <div className="flex items-center justify-between border-b border-white/20 bg-white/[0.035] px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-400">
              <span>/Dyhel /portfolio — Network Operations</span>
              <span>● ● ●</span>
            </div>

            <div className="terminal-grid grid gap-10 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div>
                <p className="fade-up mb-5 font-mono text-sm text-neutral-400">
                  Opening MikroTik Winbox
                </p>

                <h1 className="fade-up-delay-1 max-w-3xl text-4xl font-black leading-tight md:text-7xl">
                  I am passionate about network engineering and ISP
                  infrastructure.
                </h1>

                <p className="fade-up-delay-2 mt-7 max-w-2xl font-mono leading-7 text-neutral-300">
                  Saya merupakan Fresh Graduate Lulusan Politeknik Negeri Samarinda. saat ini saya bekerja sebagai NOC Support yang sedang
                  mempelajari MikroTik, routing, switching, monitoring,
                  GPON, FTTH, dan OLT ZTE C320.
                </p>

                <div className="fade-up-delay-3 mt-8 flex flex-wrap gap-4">
  <a
    href="#work"
    className="border border-white px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-black"
  >
    View Project
  </a>

  <a
    href="#contact"
    className="bg-white px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-75"
  >
    Contact Me
  </a>
</div>
              </div>

              <div className="border border-white/20 bg-white/[0.025] p-5 font-mono text-sm text-neutral-300">
                <p className="text-white">welcome.asc</p>
                <br />
                <p>Currently busy doing:</p>
                <br />
                <p>- Learning MikroTik</p>
                <p>- Monitoring network devices</p>
                <p>- Studying GPON and FTTH</p>
                <p>- Practicing troubleshooting</p>
                <br />
                <p className="mt-2 text-white">
  dyhel@portfolio:~$ <span className="cursor" />
</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-white/20">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="section-label">// RECENT_WORK</p>
          <h2 className="mt-2 text-5xl font-black">Projects</h2>

          <div className="mt-12 divide-y divide-white/20 border-y border-white/20">
            {projects.map((project) => (
              <article
                 key={project.code}
                  className="project-row grid gap-5 py-9 md:grid-cols-[180px_1fr]"
                > 
                <div className="font-mono text-sm">
                  <p>{project.code}</p>
                  <p className="mt-2">{project.status}</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black">{project.title}</h3>

                  <p className="mt-4 max-w-3xl leading-7">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
  key={tag}
  className="border border-white/25 bg-white/[0.025] px-3 py-1 font-mono text-xs text-neutral-300"
>
  {tag}
</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

<section id="experience" className="border-b border-white/20">
  <div className="mx-auto max-w-6xl px-5 py-20">
    <p className="section-label">// WORK_EXPERIENCE</p>

    <h2 className="mt-2 text-5xl font-black">
      Experience
    </h2>

    <div className="mt-12 border-y-2 border-white/20">
      {experiences.map((experience) => (
        <article
          key={experience.role}
          className="grid gap-8 py-10 md:grid-cols-[220px_1fr]"
        >
          <div className="font-mono text-sm">
            <p>{experience.period}</p>
            <p className="mt-2 text-neutral-500">
              Internship
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              {experience.role}
            </h3>

            <p className="mt-2 font-mono">
              {experience.company}
            </p>

            <p className="mt-6 max-w-3xl leading-8">
              {experience.description}
            </p>

            <ul className="mt-6 space-y-3 font-mono text-sm">
              {experience.activities.map((activity) => (
                <li key={activity}>
                  <span className="mr-3">→</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="border-b border-white/20 bg-black">
  <div className="mx-auto max-w-6xl px-5 py-20">
    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="section-label">// LEARNING_ARCHIVE</p>

        <h2 className="mt-2 text-5xl font-black">
          What I&apos;m Learning
        </h2>

        <p className="mt-6 max-w-md leading-8 text-neutral-400">
          Dokumentasi singkat tentang materi jaringan yang sedang saya
          pelajari selama menjalani PKL sebagai NOC Support.
        </p>
      </div>

      <div className="divide-y-2 divide-white/20 border-y-2 border-white/20">
        {learningLogs.map((log) => (
          <article
            key={`${log.date}-${log.title}`}
            className="project-row grid gap-3 py-6 md:grid-cols-[130px_1fr]"
          >
            <p className="font-mono text-xs">
              {log.date}
            </p>

            <div>
              <h3 className="text-xl font-black">
                {log.title}
              </h3>

              <p className="mt-2 leading-7 text-neutral-400">
                {log.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="about" className="border-b border-white/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="section-label">// ABOUT_ME</p>

            <h2 className="mt-2 text-5xl font-black">
              Learning how reliable networks are built.
            </h2>

            <p className="mt-7 leading-8">
              Saya tertarik dengan dunia jaringan ISP dan ingin berkembang
              menjadi Network Engineer. Saat ini saya bekerja sebagai  NOC Support dan memperdalam troubleshooting, MikroTik, GPON,
              FTTH, serta monitoring perangkat jaringan.
            </p>
          </div>

          <div>
            <p className="section-label">// NETWORKING_SKILLS</p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
  key={skill}
  className="skill-tag border border-white/25 bg-white/[0.025] px-3 py-2 font-mono text-sm text-neutral-300"
>
  {skill}
</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
          id="contact"
          className="border-t border-white/20 bg-black text-white"
          >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="section-label">// INITIATE_CONNECTION</p>

          <h2 className="mt-3 max-w-3xl text-5xl font-black md:text-7xl">
            Let&apos;s build reliable networks.
          </h2>

          <div className="mt-10 flex flex-wrap gap-5 font-mono">
            <a
                       href="mailto:heldy@salam.net.id"
                        className="border-b border-white/40 pb-1 font-mono text-neutral-400 transition-colors hover:border-white hover:text-white"
                >
                            Email
</a>

            <a
  href="https://github.com/dyhel7"
  target="_blank"
  rel="noreferrer"
  className="border-b border-white/40 pb-1 font-mono text-neutral-400 transition-colors hover:border-white hover:text-white"
>
  GitHub
</a>

            <a
  href="#"
  className="border-b border-white/40 pb-1 font-mono text-neutral-400 transition-colors hover:border-white hover:text-white"
>
  LinkedIn
</a>
          </div>

          <p className="mt-20 font-mono text-xs text-neutral-500">
            © 2026 Dyhel — dyhel.my.id
          </p>
        </div>
      </section>
    </main>
  );
}