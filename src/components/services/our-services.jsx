import Image from "next/image";
import classNames from "classnames";
// import { HashLink } from "react-router-hash-link";
import Link from "next/link";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import styles from "./our-services.module.scss";
import { services } from "@/data/data";

export default function OurServices() {
  return (
    <Section>
      <Container>
        <div className={styles.content}>
          <SectionTitle
            className="js-fade-el-translate"
            subtitle="Together we can overcome the problems in a way that is convenient for you "
          >
            Our services
          </SectionTitle>
          <ul className={classNames(styles.services, "js-fade-stagger-w")}>
            {services.map(({ img, href, title }) => (
              <li
                className={classNames(styles.serviceItem, "js-fade-stagger")}
                key={title}
              >
                <Link className={styles.service} href={href}>
                  <div className={styles.imgWrapper}>
                    <Image
                      className={styles.img}
                      src={img}
                      alt={title}
                      width="70%"
                      height="70%"
                    />
                  </div>
                  <h3 className={styles.title}>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
