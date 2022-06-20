import styles from "./intro.module.scss";

export default function Intro() {
  styles["intro--bold--underline"] = [
    styles["intro--underline"],
    styles["intro--bold"],
  ].join(" ");

  return (
    <div className={styles.intro}>
      <h1 className={styles.intro__title}>
        <em className={styles["intro--bold--underline"]}>Software dev</em> &amp;{" "}
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
  );
}
