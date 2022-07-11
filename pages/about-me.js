import Head from "next/head";

import styles from "../styles/about-me.module.scss";
import { Button, List } from "../components/ui-parts";

const interests = [
  "Music (into drum & bass)",
  "Food (both eating and cooking)",
  "Reading (70% through with Malazan Book of the Fallen)",
  "Games (PC and Switch)",
];

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>Hiroto Kaku - About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles["about-me"]}>
        <h1 className={styles["about-me__h1"]}>About me</h1>
        <h2 className={styles["about-me__h2"]}>Skills &amp; Expertise</h2>
        <p className={styles["about-me__description"]}>
          Hi, I&apos;m Hiroto Kaku!
        </p>
        <p className={styles["about-me__description"]}>
          I&apos;ve had a life-long interested in making things, which led me to
          study engineering in college.
        </p>
        <p className={styles["about-me__description"]}>
          As a UX research consultant, I worked with both domestic and
          international clients from a wide range of industries, helping them
          improve their products for the Japanese market.
        </p>

        <h2 className={styles["about-me__h2"]}>My interests</h2>
        <p className={styles["about-me__description"]}>
          Day to day, I&apos;m always looking for new things to discover and
          learn about. My hobbies always give me a wide range of things to dig
          into and enjoy.
        </p>
        <List items={interests}></List>
      </div>

      <h2 className={styles["about-me__h2"]}>Learn more and get in touch</h2>
      <Button
        text="Get my resume"
        href="https://1drv.ms/b/s!ArWlmhrt2oGHoPYm8rqagHabuS_4RA?e=1K1yhx"
        color="blue"
        newWindow
      />
    </div>
  );
}
