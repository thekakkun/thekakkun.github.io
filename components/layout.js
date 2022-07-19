import Footer from "./footer";
import Container from "./UI/container";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="body">
      <Header />

      <main>
        <Container>{children} </Container>
      </main>

      <Footer />
    </div>
  );
}
