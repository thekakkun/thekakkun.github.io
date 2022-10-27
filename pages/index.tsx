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
        <h1 className={styles.about}>
          <em>Software&nbsp;dev</em> &amp;&nbsp;
          <em>UX&nbsp;researcher</em>
        </h1>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.item}>
            <Link href="/about-me" className={styles.link}>
              About me
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/works" className={styles.link}>
              Works
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog" className={styles.link}>
              Blog
            </Link>
            {/* <div className={styles.blogpost}>
              <div className={styles.pubdate}>
                <em>Latest Post</em>:{" "}
                <time dateTime={latestPost.date}>
                  {useFormattedDate(latestPost.date)}
                </time>
              </div>
              <Link href={`/blog/${latestPost.id}`} className={styles.title}>
                {latestPost.title}
              </Link>
              <Tag tags={latestPost.tags}></Tag>
            </div> */}
          </li>
          <li className={styles.item}>
            <ul className={styles.social}>
              <li>
                <a
                  className={styles.link}
                  href="https://github.com/thekakkun/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/hirotokaku/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
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
