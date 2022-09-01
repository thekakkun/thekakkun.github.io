import styles from "./tag.module.scss";

export default function Tag({ tags }) {
  console.log(tags);
  return (
    <ul className={styles.tags}>
      {tags.sort().map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
