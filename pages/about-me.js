import Head from "next/head";

import styles from "../styles/about-me.module.scss";

export default function aboutMe() {
  return (
    <div>
      <Head>
        <title>Hiroto Kaku - About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <h1>Hi, I&apos;m Hiroto!</h1>
      <p>Dummy about me</p>
    </div>
  );
}
