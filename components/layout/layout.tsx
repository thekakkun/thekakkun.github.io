import React, { useState } from "react";
import { useRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";

import styles from "./layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div
      className={`
      ${styles.body}
      ${router.route === "/" && styles["body--home"]}
    `}
    >
      <Header home={router.route === "/"} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
