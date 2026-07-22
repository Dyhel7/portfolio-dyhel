import Link from "next/link";
import styles from "./portfolio-shell.module.css";

type PortfolioFooterProps = {
  nextPage: "work" | "info";
};

export default function PortfolioFooter({
  nextPage,
}: PortfolioFooterProps) {
  const isWorkNext = nextPage === "work";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLead}>
        <p>// NEXT_DESTINATION</p>

        <h2>
          {isWorkNext
            ? "See the systems I’m building."
            : "Read more about my journey."}
        </h2>

        <Link
          className={styles.nextLink}
          href={isWorkNext ? "/" : "/info"}
        >
          <span>{isWorkNext ? "Open Work" : "Open Info"}</span>
          <i>↗</i>
        </Link>
      </div>

      <div className={styles.footerMeta}>
        <div>
          <p>MAIN</p>
          <Link href="/">Work</Link>
          <Link href="/info">Info</Link>
        </div>

        <div>
          <p>CONTACT</p>
          <a href="mailto:heldy@salam.net.id">Email</a>
          <a
            href="https://github.com/dyhel7"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Dyhel — dyhel.my.id</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
