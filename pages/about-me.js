import Head from "next/head";
import Image from "next/image";

import styles from "../styles/about-me.module.scss";
import { Button, List } from "../components/ui-parts";

const imageLoader = require("../loader");
const logo_size = 35;

const interests = [
  "Music (into drum & bass)",
  "Food (both eating and cooking)",
  "Reading (70% through with Malazan Book of the Fallen)",
  "Games (PC and Switch)",
];

export default function AboutMe() {
  return (
    <article className={styles["about-me"]}>
      <Head>
        <title>Hiroto Kaku - About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className={styles["about-me__section"]}>
        <h1 className={styles["about-me__h1"]}>About me</h1>
        <h2 className={styles["about-me__h2"]}>Skills and expertise</h2>
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
      </section>

      <section className={styles["about-me__section"]}>
        <h2 className={styles["about-me__h2"]}>Me, as a person</h2>
        <p className={styles["about-me__description"]}>
          Born in Germany and raised in Japan and the US. I&apos;m now living in
          Toronto, Canada.
        </p>
        <p className={styles["about-me__description"]}>
          Day to day, I&apos;m always looking for new things to discover and
          learn about. My hobbies always give me a wide range of things to dig
          into and enjoy.
        </p>
        <List items={interests}></List>
      </section>

      {/* <section className={styles["about-me__section"]}>
        <h2 className={styles["about-me__h2"]}>Learn more and get in touch</h2>
        <ul className={styles["about-me__links"]}>
          <li>
            <Button
              styles="display:inline"
              text="Get my resume"
              href="https://1drv.ms/b/s!ArWlmhrt2oGHoPYm8rqagHabuS_4RA?e=1K1yhx"
              color="blue"
              newWindow
            />
          </li>
          <li>
            <a href="https://github.com/thekakkun/">
              <Image
                loader={imageLoader}
                src="icon-github.svg"
                alt="GitHub logo"
                width={logo_size}
                height={logo_size}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hirotokaku/">
              <Image
                loader={imageLoader}
                src="icon-linkedin.svg"
                alt="LinkedIn logo"
                width={logo_size}
                height={logo_size}
              />
            </a>
          </li>
          <li>
            <a href="mailto:kaku.hiroto@gmail.com">
              <Image
                loader={imageLoader}
                src="icon-email.svg"
                alt="Email me"
                width={logo_size}
                height={logo_size}
              />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
}
