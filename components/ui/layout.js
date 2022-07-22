import { useState } from "react";

import Footer from "../footer";
import Container from "./container";
import Header from "../header";

import styles from './layout.module.scss'


export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.body}>
      <Header menu={menu} setMenu={setMenu} />

      <main className={styles.main}>
        <Container>{children} </Container>
      </main>

      <Footer />
    </div>
  );
}
