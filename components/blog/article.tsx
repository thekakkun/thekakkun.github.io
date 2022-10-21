import React from "react";
import PostInformation from "./postInfo";
import styles from "./article.module.scss";

type ArticleProps = { children: React.ReactNode };

export default function Article({ children }: ArticleProps) {
  return (
    <article className={styles.article}>
      <PostInformation {...arguments[0]}></PostInformation>
      <div className={styles.article__body}> {children}</div>
    </article>
  );
}
