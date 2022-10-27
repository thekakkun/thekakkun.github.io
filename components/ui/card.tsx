import Image from "next/image";

import { imageLoader } from "../../loader";
import styles from "./card.module.scss";

type CardProps = {
  href: string;
  image: string;
  title: string;
  subtitle: string;
  info: string;
};

export default function Card({
  href,
  image,
  subtitle,
  title,
  info,
}: CardProps) {
  return (
    <a className={styles.card} href={href}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      <Image
        className={styles.image}
        loader={imageLoader}
        width="0"
        height="0"
        src={image}
        alt={`Image of ${title}`}
      ></Image>
      <p className={styles.info}>{info}</p>
    </a>
  );
}
