import Image from "next/image";
import classNames from "classnames";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import Leader from "../ui/leader/leader";
import { leaders } from "@/data/data";
import styles from "./sessions.module.scss";
import img from "../../images/service4.png";

export default function Sessions() {
  return (
    <Section id="sessions">
      <Container>
        <div className={styles.content}>
          <div
            className={classNames(styles.imgWrapper, "js-fade-el-translate")}
          >
            <Image
              className={styles.img}
              src={img}
              alt="Resilience building"
              fill
            />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle className="js-fade-el-translate">
              Individual sessions
            </SectionTitle>
            <div className="js-fade-el">
              <h3 className={styles.textTitle}>How the session goes?</h3>
              <p className={styles.text}>
                The session lasts 50 minutes during which we focus on a deep
                understanding of your situation
              </p>
              <ul className={styles.list}>
                <li className={styles.item}>
                  - very gently reveal the causes of difficulties
                </li>
                <li className={styles.item}>
                  - and find the inner keys to your happiness
                </li>
              </ul>
              <h3 className={styles.textTitle}>
                I will help you effectively solve the existing problem and gain
                inner strength and harmony
              </h3>
            </div>
            <ul className={classNames(styles.leadersList, "js-fade-el")}>
              <Leader {...leaders[0]} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
