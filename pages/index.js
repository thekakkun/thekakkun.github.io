import Head from "next/head";

import styles from "../styles/index.module.scss";

styles["intro--bold--underline"] = [
  styles["intro--underline"],
  styles["intro--bold"],
].join(" ");

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hiroto Kaku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.intro}>
        <h1 className={styles.intro__title}>
          <em className={styles["intro--bold--underline"]}>Software dev</em>{" "}
          &amp;{" "}
          <em className={styles["intro--bold--underline"]}>UX researcher</em>
        </h1>
        <p className={styles.intro__blurb}>
          5 years&apos; experience working as a consultant at an agency out of
          Tokyo.
        </p>
        <p className={styles.intro__blurb}>
          <em className={styles["intro--bold"]}>
            I&apos;m now looking for a{" "}
            <em className={styles["intro--underline"]}>
              software developer position
            </em>{" "}
            so that I can take a more hands-on role in creating products with
            great UX
          </em>
          .
        </p>
      </div>
    </>
  );
}
