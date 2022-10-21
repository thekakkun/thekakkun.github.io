import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

import { useOnClickOutside } from "../../hooks";
import styles from "./header.module.scss";

type HeaderProps = { home: boolean };

export default function Header({ home }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef<HTMLElement>(null);
  useOnClickOutside(node, () => setMenuOpen(false));

  function MenuItem({ route, text }: { route: string; text: string }) {
    return (
      <li
        className={`
          ${styles.menu__item}
          ${route === useRouter().route && styles["menu__item--current"]}
        `}
      >
        <Link href={route}>
          <a onClick={() => setMenuOpen(false)}>{text}</a>
        </Link>
      </li>
    );
  }

  return (
    <header className={styles.header}>
      <nav
        ref={node}
        className={`
          ${styles.nav}
          ${menuOpen && styles["nav--open"]}
        `}
      >
        <div className={styles.main}>
          <Link href="/">
            <a
              onClick={() => setMenuOpen(false)}
              className={`
                ${styles.main__home}
                ${home && styles["main__home--home"]}
              `}
            >
              <h1>Hiroto Kaku</h1>
            </a>
          </Link>
          <button
            className={`
              ${styles.main__button}
              ${home && styles["main__button--home"]}
            `}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>

        <ul
          className={`
          ${styles.menu}
          ${menuOpen && styles["menu--open"]}
          `}
        >
          <hr className={styles.menu__item}></hr>

          <MenuItem route="/about-me" text="About Me"></MenuItem>
          <MenuItem route="/blog" text="Blog"></MenuItem>

          <hr className={styles.menu__item}></hr>

          <li className={styles.menu__item}>
            <ul className={styles.menu__socials}>
              <li className={styles.socials__item}>
                <a
                  href="https://github.com/thekakkun/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className={styles.socials__item}>
                <a
                  href="https://www.linkedin.com/in/hirotokaku/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className={styles.socials__item}>
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
    </header>
  );
}
