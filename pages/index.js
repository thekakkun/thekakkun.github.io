import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          Hi, I&apos;m a<br></br>
          <em className={styles["intro--bold--underline"]}>
            Software&nbsp;dev
          </em>{" "}
          &amp;&nbsp;
          <em className={styles["intro--bold--underline"]}>UX&nbsp;researcher</em>
        </h1>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav__item}>
              <Link href="/about-me">
                <a>
                  <span>About me</span>→
                </a>
              </Link>
            </li>
            {/* <li className={styles.nav__item}>
              <Link href="/blog">
                <a>
                  <span>Blog</span>→
                </a>
              </Link>
            </li> */}
            <li className={styles.nav__item}>
              <ul className={styles.nav__social}>
                <li>
                  <a
                    href="https://github.com/thekakkun/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hirotokaku/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kaku.hiroto@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
