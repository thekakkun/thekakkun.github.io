import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/layout/layout";
import Tag from "../../components/ui/tag";
import PostInfo from "../../components/postInfo";
import { getSortedPostsData, PostData } from "../../lib/posts";
import styles from "../../styles/blog.module.scss";
import React from "react";

export async function getStaticProps() {
  const allPostsData = JSON.parse(await getSortedPostsData());
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Blog({ allPostsData }: { allPostsData: PostData[] }) {
  const router = useRouter();
  let query = router.query.tag;
  const allTags = [...new Set(allPostsData.map((post) => post.tags).flat())];

  if (query) {
    if (typeof query === "object") {
      allPostsData = allPostsData.filter((post) =>
        post.tags.includes(query[0])
      );
    } else {
      allPostsData = allPostsData.filter((post) => post.tags.includes(query));
    }
  }

  return (
    <>
      <Head>
        <title>Hiroto Kaku - Blog</title>
      </Head>
      <div className={styles.blog}>
        <div className={styles.blog__filter}>
          <p className={styles.filter__title}>Tags</p>
          {query && (
            <a
              className={styles.filter__current}
              onClick={() =>
                router.replace("/blog", undefined, { shallow: true })
              }
            >
              <FontAwesomeIcon icon={faXmark} />{" "}
              <p>
                Remove current selected tag: <span>{query}</span>
              </p>
            </a>
          )}
          <Tag tags={allTags}></Tag>
        </div>
        <ol className={styles.blog__list}>
          {allPostsData.map(({ id, title, date, tags }) => {
            return (
              <li className={styles.list__item} key={id}>
                <PostInfo
                  id={id}
                  title={title}
                  date={date ?? ""}
                  tags={tags}
                ></PostInfo>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

Blog.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
