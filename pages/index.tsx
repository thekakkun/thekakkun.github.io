import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next/types";

import Tag from "../components/blog/tag";
import { useFormattedDate } from "../hooks";
import { getSortedPostsData, PostData } from "../lib/posts";
import styles from "./index.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = JSON.parse(await getSortedPostsData());
  return {
    props: {
      allPostsData,
    },
  };
};

export default function HomePage({
  allPostsData,
}: {
  allPostsData: PostData[];
}) {
  const latestPost = allPostsData[0];

  return (
    <>
      <Head>
        <title>Hiroto Kaku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.intro}>
        <h1 className={styles.intro__title}>
          Hi, I&apos;m a<br></br>
          <em>Software&nbsp;dev</em> &amp;&nbsp;
          <em>UX&nbsp;researcher</em>
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.nav__item}>
            <Link href="/about-me">About me</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/works">Works</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/blog">Blog</Link>
            <div className={styles.blogpost}>
              <div className={styles.blogpost__pubdate}>
                <em>Latest Post</em>:{" "}
                <time dateTime={latestPost.date}>
                  {useFormattedDate(latestPost.date)}
                </time>
              </div>
              <Link
                href={`/blog/${latestPost.id}`}
                className={styles.blogpost__title}
              >
                {latestPost.title}
              </Link>
              <Tag tags={latestPost.tags}></Tag>
            </div>
          </li>
          <li className={styles.nav__item}>
            <ul className={styles.nav__social}>
              <li>
                <a
                  href="https://github.com/thekakkun/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hirotokaku/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:kaku.hiroto@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
