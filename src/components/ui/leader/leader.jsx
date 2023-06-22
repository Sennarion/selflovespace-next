import Image from "next/image";
import Link from "next/link";
import styles from "./leader.module.scss";

export default function Leader({ img, name, position, descr, link }) {
  return (
    <li className={styles.leader} key={name}>
      <Link className={styles.link} href={link}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={img}
            alt={name}
            quality={100}
            width="96%"
            height="96%"
          />
        </div>
        <div className={styles.text}>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.position}>{position}</p>
          <p className={styles.descr}>{descr}</p>
        </div>
      </Link>
    </li>
  );
}
