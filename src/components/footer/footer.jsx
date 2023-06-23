import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container/container";
import Social from "../social/social";
import styles from "./footer.module.scss";
import logo from "../../images/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <Link href="/" className={styles.logoWrapper}>
            <Image
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
              quality={100}
              fill
            />
          </Link>
          <Social />
        </div>
        <p className={styles.policy}>
          © Self Love Space. 2023.
          <a
            className={styles.link}
            target="_blank"
            href="https://www.docdroid.net/XuAybtL/privacy-policy-valentyna-bukovska-psychological-services-pdf"
            rel="noreferrer"
          >
            Privacy policy
          </a>
          .
          <a
            className={styles.link}
            target="_blank"
            href="https://www.docdroid.net/XuAybtL/privacy-policy-valentyna-bukovska-psychological-services-pdf"
            rel="noreferrer"
          >
            Terms and conditions
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}
