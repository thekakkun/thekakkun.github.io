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
