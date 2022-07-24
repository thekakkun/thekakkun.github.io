import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../footer";
import Container from "./container";
import Header from "../header";

import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const currentRoute = useRouter().pathname;

  return (
    <div className={styles.body}>
      <Header menu={menu} setMenu={setMenu} />

      <main className={styles.main}>
        <Container>
          {children}
          {currentRoute != "/" ? (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          ) : null}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
