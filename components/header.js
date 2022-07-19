import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Container from "./UI/container";

import styles from "./header.module.scss";

export default function Header({}) {
  const [menu, setMenu] = useState(false);

  const navStyle = {
    closed: `${styles.nav}`,
    open: `${styles.nav} ${styles["nav--open"]}`,
  };
  const menuStyle = {
    closed: `${styles.menu}`,
    open: `${styles.menu} ${styles["menu--open"]}`,
  };

  return (
    <header className={styles.header}>
      <Container>
        <nav className={menu ? navStyle.open : navStyle.closed}>
          <div className={styles.main}>
            <Link href="/">
              <a className={styles.main__home}>
                <h1>Hiroto Kaku</h1>
              </a>
            </Link>
            <button
              className={styles.main__button}
              onClick={() => setMenu(!menu)}
            >
              <FontAwesomeIcon icon={menu ? faXmark : faBars} />
            </button>
          </div>

          <ul className={menu ? menuStyle.open : menuStyle.closed}>
            <li className={styles.menu__item}>
              <Link href="/about-me">
                <a>About Me</a>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>

            <hr className={styles.menu__item}></hr>

            <li className={styles.menu__item}>
              <ul className={styles.menu__socials}>
                <li className={styles.socials__item}>
                  <a href="https://github.com/thekakkun/">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className={styles.socials__item}>
                  <a href="https://www.linkedin.com/in/hirotokaku/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className={styles.socials__item}>
                  <a href="mailto:kaku.hiroto@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
