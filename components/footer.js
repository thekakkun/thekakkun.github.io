import Container from "./ui/container";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <p>&copy; 2022 Hiroto Kaku</p>
          <a
            href="https://github.com/thekakkun/thekakkun.github.io"
            className={styles.footer__textlink}
          >
            View site source
          </a>
        </div>
      </Container>
    </footer>
  );
}
