import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../components/ui/layout";
import { useRouter } from "next/router";

import "../styles/reset.css";
import "../styles/_base.scss";

console.log(
  "Hi there 👋, you can see my source code at https://github.com/thekakkun/thekakkun.github.io"
);
export default function MyApp({ Component, pageProps }) {
  const currentRoute = useRouter().pathname;
  return (
    <Layout currentRoute={currentRoute}>
      <Component {...pageProps} />
    </Layout>
  );
}
