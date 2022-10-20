import Link from "next/link";

import Tag from "./ui/tag";
import styles from "./postInfo.module.scss";
import { PostData } from "../lib/posts";
import { useFormattedDate } from "../hooks";

export default function PostInfo({ id, title, date, tags }: PostData) {
  const postDate = useFormattedDate(date);

  return (
    <div className={styles.post}>
      <Link href={`/blog/${id}`}>
        <a className={styles.post__link}>
          {postDate && (
            <time className={styles.post__pubdate} dateTime={date}>
              {postDate}
            </time>
          )}
          <h1 className={styles.post__title}>{title}</h1>
        </a>
      </Link>
      {tags && <Tag tags={tags}></Tag>}
    </div>
  );
}
