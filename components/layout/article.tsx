import PostInfo from "../postInfo";
import styles from "./article.module.scss";

export default function Article({ children }) {
  return (
    <article className={styles.article}>
      <PostInfo {...arguments[0]}></PostInfo>
      <div className={styles.article__body}> {children}</div>
    </article>
  );
}
