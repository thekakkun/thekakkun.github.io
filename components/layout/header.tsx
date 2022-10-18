import { useRef } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useOnClickOutside } from "../../hooks";

import styles from "./header.module.scss";

export default function Header({ menu, setMenu, currentRoute }) {
  const closeMenu = () => setMenu(false);
  const toggleMenu = () => setMenu(!menu);

  const node = useRef();
  useOnClickOutside(node, () => setMenu(false));

  function MenuItem({ route, text }) {
    return (
      <li
        className={`
          ${styles.menu__item}
          ${route === currentRoute && styles["menu__item--current"]}
        `}
      >
        <Link href={route}>
          <a onClick={closeMenu}>{text}</a>
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
          ${menu && styles["nav--open"]}
        `}
      >
        <div className={styles.main}>
          <Link href="/">
            <a
              onClick={closeMenu}
              className={`
                ${styles.main__home}
                ${currentRoute === "/" && styles["main__home--home"]}
              `}
            >
              <h1>Hiroto Kaku</h1>
            </a>
          </Link>
          <button
            className={`
              ${styles.main__button}
              ${currentRoute === "/" && styles["main__button--home"]}
            `}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menu ? faXmark : faBars} />
          </button>
        </div>

        <ul
          className={`
          ${styles.menu}
          ${menu && styles["menu--open"]}
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
