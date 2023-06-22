import Image from "next/image";
import classNames from "classnames";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import Leader from "../ui/leader/leader";
import styles from "./body-therapy.module.scss";
import img from "../../images/service7.png";
import { leaders } from "@/data/data";

export default function BodyTherapy() {
  return (
    <Section id="therapy">
      <Container>
        <div className={styles.content}>
          <div
            className={classNames(styles.imgWrapper, "js-fade-el-translate")}
          >
            <Image
              className={styles.img}
              src={img}
              alt="Self-care techniques"
              quality={100}
              fill
            />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle className="js-fade-el-translate">
              Body – therapy
            </SectionTitle>
            <p className={classNames(styles.text, "js-fade-el")}>
              A personal dance session. First of all it is an individual
              approach to your needs and characteristics. For the beginning , we
              will determine exactly what result you are interested in at the
              end. We will deside through which style of dance (jazz, funk,
              Latin, heels) you want to work with your body and, of course, what
              personal specifics of the body you have. A personal type of load
              will be chosen for everyone. Therefore, it is important to know
              what previous experience your body has and what type of load it is
              ready for.
            </p>
            <ul className={classNames(styles.leadersList, "js-fade-el")}>
              <Leader {...leaders[1]} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
