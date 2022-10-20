import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "highlight.js/scss/base16/solarized-light.scss";
import "katex/dist/katex.min.css";
import { AppProps } from "next/app";
config.autoAddCss = false;

import "../styles/reset.css";
import "../styles/_base.scss";

console.log(
  "Hi there 👋, you can see my source code at https://github.com/thekakkun/thekakkun.github.io"
);
export default function MyApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return getLayout(<Component {...pageProps} />);
}
