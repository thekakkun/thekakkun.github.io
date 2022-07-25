import { useState } from "react";

import Link from "next/link";

import Footer from "../footer";
import Article from "./article";
import Container from "./container";
import Header from "../header";

import styles from "./layout.module.scss";

export default function Layout({ children, currentRoute }) {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={
        currentRoute === "/"
          ? `${styles.body} ${styles["body--home"]}`
          : styles.body
      }
    >
      <Header menu={menu} setMenu={setMenu} currentRoute={currentRoute} />

      <main className={styles.main}>
        <Container>
          {children}
          <Article>
            {currentRoute != "/" ? (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            ) : null}
          </Article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
