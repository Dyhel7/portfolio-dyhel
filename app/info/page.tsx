"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import PortfolioFooter from "../components/PortfolioFooter";
import PortfolioHeader from "../components/PortfolioHeader";
import styles from "./info.module.css";

const experiences = [
  {
    company: "PT. Swajasa Lintas Media",
    role: "NOC Support",
    period: "2026 — Present",
    description:
      "Monitoring router, OLT, dan ONU pelanggan; membuat tiket gangguan; membantu provisioning ONU baru; serta melakukan koordinasi penanganan dengan tim terkait.",
  },
  {
    company: "Personal Network Lab",
    role: "Network Engineering Learner",
    period: "2026 — Present",
    description:
      "Membangun lab MikroTik CHR untuk mempraktikkan routing, switching, firewall, DHCP, DNS, PPPoE, VPN, dan troubleshooting jaringan.",
  },
  {
    company: "Politeknik Negeri Samarinda",
    role: "Fresh Graduate",
    period: "Completed",
    description:
      "Membangun dasar teknis dan pola berpikir sistematis yang menjadi fondasi untuk belajar jaringan ISP dan infrastruktur telekomunikasi.",
  },
];

const skills = [
  "MikroTik RouterOS",
  "Routing & Switching",
  "Firewall",
  "TCP/IP",
  "DNS & DHCP",
  "PPPoE",
  "GPON",
  "FTTH",
  "OLT ZTE C320",
  "Fiber Optic",
  "RConfig",
  "Troubleshooting",
];

const learning = [
  "Fundamental Networking",
  "MikroTik MTCNA",
  "Monitoring NOC",
  "GPON & Optical Budget",
  "OLT ZTE C320",
  "OSPF",
  "BGP — Next",
];

export default function InfoPage() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    document
      .querySelectorAll<HTMLElement>("[data-info-reveal]")
      .forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.progress}>
        <span ref={progressRef} />
      </div>

      <PortfolioHeader active="info" />

      <section id="top" className={styles.intro}>
        <div className={styles.introHeader} data-info-reveal>
          <p>ABOUT ME</p>

          <h1>
            I&apos;m passionate about building reliable systems that{" "}
            <em>keep people connected.</em>
          </h1>
        </div>

        <div className={styles.introGrid}>
          <article className={styles.portrait} data-info-reveal>
            <div className={styles.portraitGrid} />
            <span className={styles.orbit} />
            <span className={styles.letter}>D</span>
            <span className={styles.signal}>)))</span>
            <p>NETWORK / NOC / FTTH</p>
          </article>

          <article className={styles.introStory} data-info-reveal>
            <p className={styles.label}>CURRENTLY</p>

            <p>
              Saya merupakan Fresh Graduate Politeknik Negeri Samarinda dan
              saat ini bekerja sebagai NOC Support. Fokus saya adalah memahami
              bagaimana jaringan ISP dibangun, dimonitor, dan dipulihkan saat
              terjadi gangguan.
            </p>

            <p>
              Saya sedang memperdalam MikroTik, routing, switching, GPON,
              FTTH, optical power, OLT ZTE C320, serta proses troubleshooting
              pelanggan dari sisi NOC sampai tim lapangan.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.storySection}>
        <article className={styles.storyBlock} data-info-reveal>
          <div className={styles.storyIndex}>01</div>

          <div className={styles.storyCopy}>
            <p className={styles.label}>MY BACKGROUND IN NETWORKING</p>

            <h2>Starting from fundamentals.</h2>

            <p>
              Perjalanan saya dimulai dari memahami LAN, WAN, TCP/IP, OSI,
              subnetting, DNS, DHCP, ARP, router, switch, firewall, dan
              perangkat jaringan lainnya. Fundamental tersebut membantu saya
              membaca masalah bukan hanya dari gejalanya, tetapi dari alur
              komunikasi antarperangkat.
            </p>
          </div>

          <div className={`${styles.storyVisual} ${styles.topologyVisual}`}>
            <span>CORE</span>
            <i />
            <span>DIST</span>
            <i />
            <span>OLT</span>
            <i />
            <span>ONU</span>
          </div>
        </article>

        <article className={styles.storyBlock} data-info-reveal>
          <div className={styles.storyIndex}>02</div>

          <div className={styles.storyCopy}>
            <p className={styles.label}>THIS THING CALLED NOC?</p>

            <h2>Turning alarms into actions.</h2>

            <p>
              Di NOC, saya belajar bahwa status LOS, Dying Gasp, Offline, atau
              redaman tinggi bukan sekadar tulisan di layar. Setiap status
              perlu dikaitkan dengan daya perangkat, jalur fiber, konektor,
              splitter, ODP, ONU, serta riwayat gangguan pelanggan.
            </p>
          </div>

          <div className={`${styles.storyVisual} ${styles.consoleVisual}`}>
            <div>
              <span>08:12:04</span>
              <b>ONU-128 / LOS</b>
            </div>
            <div>
              <span>08:13:42</span>
              <b>TICKET CREATED</b>
            </div>
            <div>
              <span>09:01:18</span>
              <b>FIELD CHECK</b>
            </div>
            <div>
              <span>10:24:33</span>
              <b>STATUS ONLINE</b>
            </div>
          </div>
        </article>

        <article className={styles.storyBlock} data-info-reveal>
          <div className={styles.storyIndex}>03</div>

          <div className={styles.storyCopy}>
            <p className={styles.label}>MAKING IT ALL HAPPEN</p>

            <h2>Learning by building.</h2>

            <p>
              Saya menggunakan MikroTik CHR, VirtualBox, Winbox, RConfig,
              MixRadius, dan dokumentasi OLT untuk mengubah teori menjadi
              praktik. Saya membangun lab, melakukan konfigurasi, menguji
              koneksi, membaca log, dan mendokumentasikan hasilnya.
            </p>
          </div>

          <div className={`${styles.storyVisual} ${styles.labVisual}`}>
            <span className={styles.labCenter}>LAB</span>
            <span className={styles.labNodeA}>CHR</span>
            <span className={styles.labNodeB}>WINBOX</span>
            <span className={styles.labNodeC}>RCONFIG</span>
            <span className={styles.labNodeD}>OLT</span>
          </div>
        </article>

        <article className={styles.storyBlock} data-info-reveal>
          <div className={styles.storyIndex}>04</div>

          <div className={styles.storyCopy}>
            <p className={styles.label}>IN MY SPARE TIME</p>

            <h2>Still exploring technology.</h2>

            <p>
              Di luar pekerjaan, saya mengembangkan portofolio ini, mencoba
              simulasi jaringan, mempelajari materi baru, memperbaiki desain
              web, serta mendokumentasikan progres agar dapat melihat sejauh
              mana kemampuan saya berkembang.
            </p>
          </div>

          <div className={`${styles.storyVisual} ${styles.spareVisual}`}>
            <span>LEARN</span>
            <span>BUILD</span>
            <span>TEST</span>
            <span>DOCUMENT</span>
            <span>REPEAT</span>
          </div>
        </article>
      </section>

      <section className={styles.experienceSection}>
        <div className={styles.sectionTitle} data-info-reveal>
          <p>EXPERIENCE</p>
          <h2>Where I&apos;ve been learning.</h2>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((experience, index) => {
            const delay = {
              "--delay": `${index * 90}ms`,
            } as CSSProperties;

            return (
              <article
                key={`${experience.company}-${experience.role}`}
                data-info-reveal
                style={delay}
              >
                <p>{experience.period}</p>

                <div>
                  <h3>{experience.company}</h3>
                  <span>{experience.role}</span>
                </div>

                <p>{experience.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.capabilities}>
        <article className={styles.skillPanel} data-info-reveal>
          <p className={styles.label}>CAPABILITIES</p>

          <div>
            {skills.map((skill, index) => (
              <span key={skill}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {skill}
                <b>↗</b>
              </span>
            ))}
          </div>
        </article>

        <article className={styles.learningPanel} data-info-reveal>
          <p className={styles.label}>LEARNING PATH</p>

          <div>
            {learning.map((item, index) => (
              <span key={item}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <PortfolioFooter nextPage="work" />
    </main>
  );
}
