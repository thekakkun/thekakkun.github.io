import Head from "next/head";
import styles from "./article.module.scss";

export default function Article({ postData, children }) {
  if (postData) {
    return (
      <article className={styles.article}>
        <div className={styles.article__head}>
          <h1>{postData.title}</h1>
          <ul className={styles.head__tags}>
            {Array.from(postData.tags.entries()).map(([i, tag]) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          <span className={styles.head__pubdate}>
            Published: <time dateTime={postData.date}>{postData.date}</time>
          </span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    );
  }
  return <article className={styles.article}>{children}</article>;
}
