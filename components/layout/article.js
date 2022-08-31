import styles from "./article.module.scss";

export default function Article({ title, date, tags, children }) {
  return (
    <article className={styles.article}>
      <div className={styles.article__head}>
        <h1>{title}</h1>
        {tags && (
          <ul className={styles.head__tags}>
            {Array.from(tags.entries()).map(([i, tag]) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        )}
        {date && (
          <span className={styles.head__pubdate}>
            Published: <time dateTime={date}>{date}</time>
          </span>
        )}
      </div>
      
      {children}
    </article>
  );
}
