import Image from "next/image";
import Link from "next/link";

import Container from "./container";

import styles from "./header.module.scss";

const imageLoader = require("../loader");
const logo_size = 25;

export default function Header({}) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <nav className={styles.nav}>
            <Link href="/">
              <a className={styles.nav__home}>
                <h1>Hiroto Kaku</h1>
              </a>
            </Link>
            {/* <ul className={styles.nav__links}>
              <li>
                <Link href="/about_me">
                  <a className={styles.nav__item}>About Me</a>
                </Link>
              </li>
            </ul> */}
          </nav>
          <nav>
            <ul className={styles.socials}>
              <li className={styles.socials__item}>
                <a href="https://github.com/thekakkun/">
                  <Image
                    loader={imageLoader}
                    src="logo-github.png"
                    alt="GitHub logo"
                    width={logo_size}
                    height={logo_size}
                  />
                </a>
              </li>
              <li className={styles.socials__item}>
                <a href="https://www.linkedin.com/in/hirotokaku/">
                  <Image
                    loader={imageLoader}
                    src="logo-linkedin.png"
                    alt="LinkedIn logo"
                    width={logo_size}
                    height={logo_size}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
