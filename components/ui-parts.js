import styles from "./ui-parts.module.scss";

export function Button({ text, href, color, newWindow }) {
  const buttonClass = `button--${color}`;

  return (
    <a
      className={styles[buttonClass]}
      href={href}
      target={newWindow ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

export function List({ items }) {
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
