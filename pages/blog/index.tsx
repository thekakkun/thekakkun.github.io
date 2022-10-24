import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import React from "react";

import PostInformation from "../../components/blog/postInfo";
import Tag from "../../components/blog/tag";
import { getSortedPostsData, PostData } from "../../lib/posts";
import styles from "./blog.module.scss";

type BlogProps = { allPostsData: PostData[] };

export default function Blog({ allPostsData }: BlogProps) {
  const router = useRouter();
  let query = router.query.tag;
  const allTags = [...new Set(allPostsData.map((post) => post.tags).flat())];

  let relevantPostsData: PostData[];
  if (query) {
    if (typeof query === "object") {
      query = query[0];
    }
    relevantPostsData = allPostsData.filter((post) =>
      post.tags.includes(query as string)
    );
  } else {
    relevantPostsData = allPostsData;
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
          {relevantPostsData.map(({ id, title, date, tags }) => {
            return (
              <li className={styles.list__item} key={id}>
                <PostInformation
                  id={id}
                  title={title}
                  date={date}
                  tags={tags}
                ></PostInformation>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = JSON.parse(await getSortedPostsData());
  return {
    props: {
      allPostsData,
    },
  };
};
