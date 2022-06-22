import Head from "next/head";

import Intro from "../components/intro";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Hiroto Kaku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Intro></Intro>
    </div>
  );
}

export default HomePage;
