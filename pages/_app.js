import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../components/layout";

import "../styles/reset.css";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  console.log(
    "Hi there 👋, you can see my source code at https://github.com/thekakkun/thekakkun.github.io"
  );
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
