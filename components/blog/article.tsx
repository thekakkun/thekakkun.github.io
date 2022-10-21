import React from "react";
import PostInformation from "./postInfo";
import styles from "./article.module.scss";

export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.article}>
      <PostInformation {...arguments[0]}></PostInformation>
      <div className={styles.article__body}> {children}</div>
    </article>
  );
}
