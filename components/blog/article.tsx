import React from "react";

import styles from "./article.module.scss";
import PostInformation from "./postInfo";

type ArticleProps = { children: React.ReactNode };

export default function Article({ children }: ArticleProps) {
  return (
    <article className={styles.article}>
      <PostInformation {...arguments[0]}></PostInformation>
      <div className={styles.article__body}> {children}</div>
    </article>
  );
}
