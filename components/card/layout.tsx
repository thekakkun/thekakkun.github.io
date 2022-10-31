import { useLayoutEffect, useRef, useState } from "react";

import Card, { CardProps } from "./card";
import styles from "./layout.module.scss";

type LayoutProps = {
  cards: CardProps[];
};

export default function Layout({ cards }: LayoutProps) {
  const [cols, setCols] = useState<number>({} as number);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function handleResize() {
      if (!gridRef.current) throw Error("gridRef is not assigned.");

      setCols(
        getComputedStyle(gridRef.current).gridTemplateColumns.split(" ").length
      );
    }

    addEventListener("resize", handleResize);
    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [cols]);

  return (
    <div className={styles.layout} ref={gridRef}>
      {cards.map((card) => {
        return <Card {...card} cols={cols} key={card.title}></Card>;
      })}
    </div>
  );
}
