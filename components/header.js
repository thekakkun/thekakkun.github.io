import { useRef } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Container from "./UI/container";
import { useOnClickOutside } from "../hooks";

import styles from "./header.module.scss";

export default function Header({ menu, setMenu }) {
  const closeMenu = () => setMenu(false);
  const toggleMenu = () => setMenu(!menu);
  const navStyle = {
    closed: `${styles.nav}`,
    open: `${styles.nav} ${styles["nav--open"]}`,
  };
  const menuStyle = {
    closed: `${styles.menu}`,
    open: `${styles.menu} ${styles["menu--open"]}`,
  };

  const node = useRef();
  useOnClickOutside(node, () => setMenu(false));

  return (
    <header className={styles.header}>
      <Container>
        <nav ref={node} className={menu ? navStyle.open : navStyle.closed}>
          <div className={styles.main}>
            <Link href="/">
              <a onClick={closeMenu} className={styles.main__home}>
                <h1>Hiroto Kaku</h1>
              </a>
            </Link>
            <button className={styles.main__button} onClick={toggleMenu}>
              <FontAwesomeIcon icon={menu ? faXmark : faBars} />
            </button>
          </div>

          <ul className={menu ? menuStyle.open : menuStyle.closed}>
            <li className={styles.menu__item}>
              <Link href="/about-me">
                <a onClick={closeMenu}>About Me</a>
              </Link>
            </li>

            {/* <li className={styles.menu__item}>
              <Link href="/blog">
                <a onClick={closeMenu} >Blog</a>
              </Link>
            </li> */}

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
      </Container>
    </header>
  );
}
