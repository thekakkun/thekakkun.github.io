import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { imageLoader } from "../../loader";
import styles from "./card.module.scss";

export type CardProps = {
  href: string;
  image: string;
  title: string;
  subtitle: string;
  info: string;
  cols?: number;
};

export default function Card({
  href,
  image,
  subtitle,
  title,
  info,
  cols,
}: CardProps) {
  const [top, setTop] = useState<number>(0);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // useEffect(() => {
  //   function handleResize() {
  //     if (!cardRef.current) {
  //       throw Error("cardRef is not assigned.");
  //     } else if (cols) {
  //       let cardAbove: HTMLElement = cardRef.current;

  //       for (let i = 0; i < cols; i++) {
  //         if (cardAbove.previousElementSibling) {
  //           cardAbove = cardAbove.previousElementSibling as HTMLElement;
  //         } else {
  //           setTop(0);
  //           return;
  //         }
  //       }
  //       console.log(cardRef.current, cardAbove);

  //       const gapBetween =
  //         cardRef.current.offsetTop -
  //         (cardAbove.offsetTop + cardAbove.offsetHeight);
  //       setTop(-gapBetween);
  //     }
  //   }

  //   addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     removeEventListener("resize", handleResize);
  //   };
  // }, [cols]);

  return (
    <a className={styles.card} href={href} ref={cardRef} style={{ top: top }}>
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
