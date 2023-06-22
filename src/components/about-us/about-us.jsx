import Image from "next/image";
import classNames from "classnames";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import styles from "./about-us.module.scss";
import { about } from "@/data/data";

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <SectionTitle className="js-fade-el-translate">About us</SectionTitle>
        <div className={styles.content}>
          {about.map(
            ({ id, img, photo, name, position, descr, listTitle, list }) => (
              <div
                className={classNames(styles.row, "js-fade-el")}
                id={id}
                key={id}
              >
                <div
                  className={classNames(styles.imgWrapper, {
                    [styles.arch]: photo === "arch",
                    [styles.leaf]: photo === "leaf",
                  })}
                >
                  <Image
                    className={classNames(styles.img, {
                      [styles.imgArch]: photo === "arch",
                      [styles.imgLeaf]: photo === "leaf",
                    })}
                    src={img}
                    alt={name}
                    fill
                  />
                </div>
                <div className={styles.text}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.position}>{position}</p>
                  <p className={styles.descr}>{descr}</p>
                  {listTitle && (
                    <p className={styles.listTitle}>
                      Member of professional organizations:
                    </p>
                  )}
                  {list && (
                    <ul
                      className={classNames(styles.list, "js-fade-stagger-w")}
                    >
                      {list.map((item) => (
                        <li
                          className={classNames(styles.item, "js-fade-stagger")}
                          key={item}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </Section>
  );
}
