import { useRouter } from "next/router";
import React from "react";

import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className={router.route === "/" ? styles.homeBody : styles.body}>
      <Header home={router.route === "/"} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
