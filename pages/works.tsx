import Head from "next/head";

import Card from "../components/ui/card";
import styles from "./works.module.scss";

export default function Works() {
  return (
    <>
      <Head>
        <title>Hiroto Kaku - Works</title>
      </Head>

      <div className={styles.works}>
        <Card
          href="https://github.com/thekakkun/speed-snek"
          image="works/speed-snek.png"
          title="Speed Snek"
          subtitle="A HTML canvas game, 2022"
          info="A mash-up of the classic computer game Snake and the 1994 movie Speed starring Keanu Reeves and Sandra Bullock."
        ></Card>
        <Card
          href="https://github.com/thekakkun/thekakkun.github.io"
          image="works/homepage.png"
          title="Personal Website"
          subtitle="This website, 2022"
          info="My personal website (you're looking at it!), built with Next.js."
        ></Card>
        <Card
          href="https://github.com/thekakkun/Callisto"
          image="works/callisto.jpg"
          title="Callisto"
          subtitle="An IoT VFD clock, 2021"
          info="Electrical, hardware, and software design for a desk clock that uses a Russian IV-18 VFD tube ."
        ></Card>
        <Card
          href="https://github.com/thekakkun/Hyperion/"
          image="works/hyperion.jpg"
          title="Hyperion"
          subtitle="A nixie tube clock, 2016"
          info="Custom case and  electronics to add GPS time syncing fuctionality to a nixie clock kit."
        ></Card>
      </div>
    </>
  );
}
