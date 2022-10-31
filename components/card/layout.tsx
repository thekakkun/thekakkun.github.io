import Card, { CardProps } from "./card";
import styles from "./layout.module.scss";

type LayoutProps = {
  cards: CardProps[];
};

export default function Layout({ cards }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {cards.map((card) => {
        return <Card {...card} key={card.title}></Card>;
      })}
    </div>
  );
}
