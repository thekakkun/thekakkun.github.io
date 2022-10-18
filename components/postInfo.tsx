import Link from "next/link";

import Tag from "./ui/tag";
import styles from "./postInfo.module.scss";

export default function PostInfo({ id, title, date, tags }) {
  return (
    <div className={styles.post}>
      <Link href={`/blog/${id}`}>
        <a className={styles.post__link}>
          {date && (
            <time
              suppressHydrationWarning={true}
              className={styles.post__pubdate}
              dateTime={date}
            >
              {new Date(date).toLocaleDateString()}
            </time>
          )}
          <h1 className={styles.post__title}>{title}</h1>
        </a>
      </Link>
      {tags && <Tag tags={tags}></Tag>}
    </div>
  );
}
