import Link from "next/link";

import styles from "./tag.module.scss";

export default function Tag({ tags }: { tags: string[] }) {
  return (
    <ul className={styles.tags}>
      {tags.sort().map((tag) => (
        <li key={tag}>
          <Link
            href={{
              pathname: "/blog",
              query: { tag: tag },
            }}
          >
            <a>{tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
