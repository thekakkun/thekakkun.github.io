import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "highlight.js/scss/base16/solarized-light.scss";
import "katex/dist/katex.min.css";
import { AppProps } from "next/app";

import Layout from "../components/layout/layout";
import "../styles/_base.scss";
import "../styles/reset.css";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export default function MyApp({ Component, pageProps }: AppProps) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout || ((page: ReactNode) => page);

//   return getLayout(<Component {...pageProps} />);
// }
