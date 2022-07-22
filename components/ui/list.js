import styles from "./list.module.scss";

export default function List({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li className={styles.list__item} key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
}
