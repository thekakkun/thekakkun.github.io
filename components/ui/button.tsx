import styles from "./button.module.scss";

type ButtonProps = {
  text: string;
  href: string;
  color: string;
  newWindow: boolean;
};

export default function Button({ text, href, color, newWindow }: ButtonProps) {
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
