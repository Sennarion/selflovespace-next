import Image from "next/image";
import classNames from "classnames";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import Leaders from "../leaders/leaders";
import styles from "./retreats.module.scss";
import { retreats } from "@/data/data";

export default function Retreats() {
  return (
    <Section id="retreats">
      <Container>
        <SectionTitle className="js-fade-el-translate">Retreats</SectionTitle>
        <div className={styles.content}>
          <ul className={styles.list}>
            {retreats.map(({ title, img, text }) => (
              <li className={classNames(styles.item, "js-fade-el")} key={title}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.row}>
                  <div className={styles.imgWrapper}>
                    <Image
                      className={styles.img}
                      src={img}
                      alt="Mental health retreat"
                      quality={100}
                      fill
                    />
                  </div>
                  <div className={styles.text}>
                    {text.map((textItem, index) => {
                      return Array.isArray(textItem) ? (
                        <ul className={styles.textList} key={index}>
                          {textItem.map((listItem, index) => (
                            <li className={styles.textItem} key={index}>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={styles.textItem} key={index}>
                          {textItem}
                        </p>
                      );
                    })}
                    <div className={styles.leaders}>
                      <Leaders />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
