import Head from "next/head";

import Layout from "../components/card/layout";
import styles from "./works.module.scss";

const worksData = [
  {
    href: "https://github.com/thekakkun/over-yonder",
    image: "works/over-yonder.png",
    title: "Over Yonder",
    subtitle: "smartphone game, 2023",
    info: "Location-based geography game for smartphones with map visualizations powered by D3.js.",
  },
  {
    href: "https://github.com/thekakkun/speed-snek",
    image: "works/speed-snek.png",
    title: "Speed Snek",
    subtitle: "HTML canvas game, 2022",
    info: "A spin-off of the classic game Snake, coded in vanilla TypeScript using OOP patterns to manage game objects and state.",
  },
  {
    href: "https://github.com/thekakkun/thekakkun.github.io",
    image: "works/homepage.png",
    title: "Personal Website",
    subtitle: "This website, 2022",
    info: "My personal website (you're looking at it!), built with Next.js.",
  },
  {
    href: "https://github.com/thekakkun/Callisto",
    image: "works/callisto.jpg",
    title: "Callisto",
    subtitle: "IoT VFD clock, 2021",
    info: "Electrical, hardware, and software design for a desk clock that uses a Russian IV-18 VFD tube .",
  },
  {
    href: "https://github.com/thekakkun/Hyperion/",
    image: "works/hyperion.jpg",
    title: "Hyperion",
    subtitle: "nixie tube clock, 2016",
    info: "Custom case and  electronics to add GPS time syncing fuctionality to a nixie clock kit.",
  },
];

export default function Works() {
  return (
    <>
      <Head>
        <title>Hiroto Kaku - Works</title>
      </Head>

      <div className={styles.works}>
        <Layout cards={worksData}></Layout>
      </div>
    </>
  );
}
