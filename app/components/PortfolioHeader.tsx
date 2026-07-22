import Link from "next/link";
import styles from "./portfolio-shell.module.css";

type PortfolioHeaderProps = {
  active: "work" | "info";
};

export default function PortfolioHeader({
  active,
}: PortfolioHeaderProps) {
  return (
    <header className={styles.header}>
      <Link
        className={styles.brand}
        href="/"
        aria-label="Buka halaman Work"
      >
        DYHEL.
      </Link>

      <nav className={styles.nav} aria-label="Navigasi utama">
        <Link
          className={active === "work" ? styles.active : ""}
          href="/"
        >
          Work
        </Link>

        <Link
          className={active === "info" ? styles.active : ""}
          href="/info"
        >
          Info
        </Link>
      </nav>

      <div className={styles.headerLinks}>
        <a
          href="https://github.com/dyhel7"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:heldy@salam.net.id">
          Email
        </a>
      </div>
    </header>
  );
}
