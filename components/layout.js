import { useState } from "react";

import Footer from "./footer";
import Container from "./UI/container";
import Header from "./header";


export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="body">
      <Header menu={menu} setMenu={setMenu} />

      <main>
        <Container>{children} </Container>
      </main>

      <Footer />
    </div>
  );
}
