import styles from './button.module.scss'

export default function Button({ text, href, color, newWindow }) {
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