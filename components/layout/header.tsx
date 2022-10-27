import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { useOnClickOutside } from "../../hooks";
import styles from "./header.module.scss";

type HeaderProps = { home: boolean };

export default function Header({ home }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef<HTMLElement>(null);
  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <header
      ref={node}
      className={
        home
          ? styles.header_home
          : menuOpen
          ? styles.header_open
          : styles.header
      }
    >
      <nav className={styles.nav}>
        <button
          className={home ? styles.button_home : styles.button}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        <Link
          href="/"
          className={home ? styles.home_home : styles.home}
          onClick={() => setMenuOpen(false)}
        >
          Hiroto Kaku
        </Link>

        <ul
          className={
            home
              ? styles.links_home
              : menuOpen
              ? styles.links_open
              : styles.links
          }
        >
          <li>
            <Link href="/about-me" onClick={() => setMenuOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/works" onClick={() => setMenuOpen(false)}>
              Works{" "}
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>

          <ul className={styles.social}>
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
        </ul>
      </nav>
    </header>
  );
}
