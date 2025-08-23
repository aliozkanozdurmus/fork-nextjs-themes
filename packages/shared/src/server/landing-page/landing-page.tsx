import { ReactNode } from "react";
import styles from "./landing-page.module.scss";
import { Logo } from "../logo";
import rebrandConfig from "@repo/scripts/rebrand.config.json";
import { TypeOut } from "typingfx";

interface LandingPageProps {
  title: string;
  children?: ReactNode;
}

const { owner, repo } = rebrandConfig;

/**
 * # LandingPage
 * library&#x27;s landing page
 */
export function LandingPage({ title, children }: LandingPageProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={[styles.center, styles.hero].join(" ")}>
        <TypeOut componentAnimation={{ wrapper: "div", props: { style: { margin: "auto" } } }}>
          <h2>Craft your next amazing library using</h2>
          <Logo href={`https://github.com/${owner}/${repo}`} />
          <br />
          <strong>Harness the full potential of React 18 Server Components!{3000}</strong>
        </TypeOut>
      </div>
      {children}
    </main>
  );
}
