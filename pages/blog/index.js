import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout/layout";
import Tag from "../../components/ui/tag";
import { getSortedPostsData } from "../../lib/posts";
import styles from "../../styles/blog.module.scss";

export async function getStaticProps() {
  const allPostsData = JSON.parse(await getSortedPostsData());
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Blog({ allPostsData }) {
  console.log(allPostsData);
  return (
    <div className={styles.blog}>
      <Head>
        <title>Hiroto Kaku - Blog</title>
      </Head>
      <ol className={styles.blog__list}>
        {allPostsData.map(({ id, title, date, tags }) => {
          const pubDate = new Date(date).toLocaleDateString();
          return (
            <li className={styles.list__item} key={id}>
              <Link href={`/blog/${id}`}>
                <a className={styles.item__link}>
                  <time className={styles.item__pubdate} dateTime={date}>
                    {pubDate}
                  </time>
                  <span className={styles.item__title}>{title}</span>
                </a>
              </Link>
              <Tag tags={tags}></Tag>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
