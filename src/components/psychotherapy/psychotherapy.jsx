import Image from "next/image";
import classNames from "classnames";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import Leader from "../ui/leader/leader";
import styles from "./psychotherapy.module.scss";
import img from "../../images/service6.png";
import { psychotherapy, leaders } from "@/data/data";

export default function Psychotherapy() {
  return (
    <Section id="psychotherapy">
      <Container>
        <div className={styles.content}>
          <div className={classNames(styles.imgWrapper, "js-fade-el")}>
            <Image
              className={styles.img}
              src={img}
              alt="Mental health workshop"
              quality={100}
              fill
            />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle className="js-fade-el-translate">
              Group support
            </SectionTitle>
            <ul className={classNames(styles.list, "js-fade-stagger-w")}>
              {psychotherapy.map(({ title, text, list }) => (
                <li
                  className={classNames(styles.item, "js-fade-stagger")}
                  key={title}
                >
                  <h3 className={styles.textTitle}>{title}</h3>
                  <p className={styles.text}>{text}</p>
                  {list && (
                    <ul>
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <p>
              To conduct trainings, the best practices for working with
              personnel from world experience, psychological techniques and
              methods that have proven their effectiveness and efficiency are
              used. Trainings are developed taking into account the
              characteristics of your team and the actual needs of employees
            </p>
            <ul className={classNames(styles.leadersList, "js-fade-el")}>
              <Leader {...leaders[0]} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
