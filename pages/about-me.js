import Head from "next/head";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/about-me.module.scss";
import List from "../components/ui/list";
import Button from "../components/ui/button";
import Article from "../components/ui/article";

const imageLoader = require("../loader");

const interests = ["Music", "Eating and cooking", "Reading", "Video games"];

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Hiroto Kaku - About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Article>
        <div className={styles["about-me__layout"]}>
          <div className={styles["about-me__photo"]}>
            <Image
              loader={imageLoader}
              src="portrait.jpg"
              alt="face"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className={styles["about-me__content"]}>
            <h1>About me</h1>
            <div className={styles["about-me__text"]}>
              <section>
                <h2>Skills and expertise</h2>
                <p className={styles["about-me__description"]}>
                  Hi, I&apos;m Hiroto Kaku!
                </p>
                <p className={styles["about-me__description"]}>
                  I&apos;ve had a life-long interested in making things, which
                  led me to study engineering in college.
                </p>
                <p className={styles["about-me__description"]}>
                  As a UX research consultant, I worked with both domestic and
                  international clients from a wide range of industries, helping
                  them improve their products for the Japanese market.
                </p>
              </section>

              <section>
                <h2>Me, as a person</h2>
                <p className={styles["about-me__description"]}>
                  Born in Germany, raised in Tokyo and Los Angeles. I&apos;m now
                  living in Toronto, Canada.
                </p>
                <p className={styles["about-me__description"]}>
                  I&apos;m a curious person, and I&apos;m always looking for new
                  things to discover and learn about. My hobbies always give me
                  a wide range of things to dig into and enjoy.
                </p>
                <List items={interests}></List>
              </section>

              <section>
                <h2>
                  Learn more and get in touch
                </h2>
                <ul className={styles.links}>
                  <li>
                    <Button
                      styles="display:inline"
                      text="Get my resume"
                      href="https://onedrive.live.com/download?cid=8781DAED1A9AA5B5&resid=8781DAED1A9AA5B5%21539430&authkey=AMUNkvnFPSgxaUU"
                      color="blue"
                      newWindow
                    />
                  </li>
                  <li className={styles.links__icon}>
                    <a
                      href="https://github.com/thekakkun/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li className={styles.links__icon}>
                    <a
                      href="https://www.linkedin.com/in/hirotokaku/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className={styles.links__icon}>
                    <a
                      href="mailto:kaku.hiroto@gmail.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Article>
    </>
  );
}
