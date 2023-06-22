import Image from "next/image";
import classNames from "classnames";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import styles from "./help.module.scss";
import img from "../../images/wecanhelp.png";
import { helpList } from "@/data/data";
import { dancingScript } from "@/fonts/fonts";

export default function Help() {
  return (
    <Section>
      <Container>
        <SectionTitle className="js-fade-el-translate">
          We can help with
        </SectionTitle>
        <div className={styles.content}>
          <div className={classNames(styles.imgWrapper, "js-fade-el")}>
            <Image
              className={styles.img}
              src={img}
              alt="Self-care techniques"
              fill
            />
          </div>
          <div className={styles.textWrapper}>
            <ul className={classNames(styles.list, "js-fade-stagger-w")}>
              {helpList.map((item) => (
                <li
                  className={classNames(styles.item, "js-fade-stagger")}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p
              className={classNames(
                dancingScript.className,
                styles.text,
                "js-fade-el"
              )}
            >
              We will help you effectively solve your existing problem and gain
              inner strength and harmony...
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
