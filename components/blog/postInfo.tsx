import Link from "next/link";

import { useFormattedDate } from "../../hooks";
import { PostInfo } from "../../lib/posts";
import styles from "./postInfo.module.scss";
import Tag from "./tag";

export default function PostInformation({ id, title, date, tags }: PostInfo) {
  const postDate = useFormattedDate(date);

  return (
    <div className={styles.post}>
      <Link href={`/blog/${id}`} className={styles.post__link}>
        {postDate && (
          <time className={styles.post__pubdate} dateTime={date}>
            {postDate}
          </time>
        )}
        <h1 className={styles.post__title}>{title}</h1>
      </Link>
      {tags && <Tag tags={tags}></Tag>}
    </div>
  );
}
