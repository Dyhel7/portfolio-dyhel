import PortfolioFooter from "./components/PortfolioFooter";
import PortfolioHeader from "./components/PortfolioHeader";
import styles from "./page.module.css";

const projects = [
  {
    code: "01",
    title: "MikroTik CHR Network Lab",
    year: "2026",
    company: "Personal Lab",
    summary:
      "Simulasi routing, DHCP, firewall, NAT, dan PPPoE menggunakan MikroTik CHR, VirtualBox, serta Winbox.",
    tags: ["RouterOS", "MikroTik", "Routing"],
    visual: "router",
  },
  {
    code: "02",
    title: "FTTH Network Documentation",
    year: "2026",
    company: "ISP Infrastructure",
    summary:
      "Dokumentasi alur jaringan dari router core, distribusi, OLT, OTB, ODC, ODP hingga ONU pelanggan.",
    tags: ["FTTH", "GPON", "OLT ZTE C320"],
    visual: "fiber",
  },
  {
    code: "03",
    title: "Network Device Monitoring",
    year: "2026",
    company: "NOC Operations",
    summary:
      "Monitoring router, OLT, dan ONU menggunakan RConfig untuk membantu identifikasi LOS, Dying Gasp, dan gangguan jaringan.",
    tags: ["RConfig", "Monitoring", "NOC"],
    visual: "monitor",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "fiber") {
    return (
      <div
        className={`${styles.visual} ${styles.visualFiber}`}
        aria-hidden="true"
      >
        <div className={styles.fiberPath} />
        <span className={`${styles.node} ${styles.nodeA}`}>CORE</span>
        <span className={`${styles.node} ${styles.nodeB}`}>OLT</span>
        <span className={`${styles.node} ${styles.nodeC}`}>ODP</span>
        <span className={`${styles.node} ${styles.nodeD}`}>ONU</span>
        <span className={styles.visualCaption}>FTTH / GPON TOPOLOGY</span>
      </div>
    );
  }

  if (type === "monitor") {
    return (
      <div
        className={`${styles.visual} ${styles.visualMonitor}`}
        aria-hidden="true"
      >
        <div className={styles.monitorWindow}>
          <div className={styles.monitorBar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.chart}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className={styles.statusRows}>
            <span>OLT-01</span>
            <b>ONLINE</b>
            <span>ONU-128</span>
            <b>SYNC</b>
            <span>ROUTER-DIST</span>
            <b>ACTIVE</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.visual} ${styles.visualRouter}`}
      aria-hidden="true"
    >
      <div className={styles.routerWindow}>
        <div className={styles.routerTop}>
          <span>MIKROTIK CHR</span>
          <span>v7</span>
        </div>
        <div className={styles.routerGrid}>
          <div className={styles.routerMenu}>
            <span>Interfaces</span>
            <span>IP</span>
            <span>Routing</span>
            <span>System</span>
          </div>
          <div className={styles.routerContent}>
            <div className={styles.command}>/ip address print</div>
            <div className={styles.command}>/ip route print</div>
            <div className={styles.command}>/interface bridge print</div>
            <div className={styles.command}>/system resource print</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <PortfolioHeader active="work" />

      <section id="top" className={styles.heroSection}>
        <article className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <div className={styles.browserDots}>
              <span />
              <span />
              <span />
            </div>
            <p>dyhel.my.id — work</p>
            <span className={styles.browserStatus}>ONLINE</span>
          </div>

          <div className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>NETWORK ENGINEER / NOC SUPPORT</p>

              <h1>
                I build reliable
                <br />
                networks, systems
                <br />
                &amp; <em>stories.</em>
              </h1>
            </div>

            <div className={styles.heroMeta}>
              <p>
                NOC Support based in Indonesia.
                <br />
                Learning MikroTik, routing, GPON,
                <br />
                FTTH, and ISP infrastructure.
              </p>
            </div>

            <a
              className={styles.scrollCue}
              href="#selected-work"
              aria-label="Lihat project"
            >
              <span>SEE WORK</span>
              <i>↓</i>
            </a>
          </div>
        </article>
      </section>

      <section id="selected-work" className={styles.workSection}>
        <article className={styles.sectionShell}>
          <div className={styles.sectionHeading}>
            <p>Selected Work</p>
            <span>&apos;26</span>
          </div>

          <div className={styles.projects}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.code}>
                <div className={styles.projectTop}>
                  <div>
                    <p className={styles.projectNumber}>{project.code}</p>
                    <h2>{project.title}</h2>
                  </div>
                  <span className={styles.projectArrow}>↗</span>
                </div>

                <div className={styles.projectMeta}>
                  <p>
                    {project.company}, &apos;{project.year.slice(-2)}
                  </p>
                  <p>{project.summary}</p>
                </div>

                <ProjectVisual type={project.visual} />

                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <PortfolioFooter nextPage="info" />
    </main>
  );
}