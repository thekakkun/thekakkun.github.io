import { useState } from "react";
import { useRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";

import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.body}>
      <Header menu={menu} setMenu={setMenu} currentRoute={router.route} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
}
