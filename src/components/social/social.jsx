import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import styles from "./social.module.scss";

export default function Social() {
  return (
    <div className={styles.info}>
      <span className={styles.infoText}>Follow us</span>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <a
            className={styles.socialLink}
            href="https://www.facebook.com/profile.php?id=100093067544017"
            target="_blank"
            rel="noreferrer"
          >
            <CiFacebook size="40" />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/self-love-space-13487727b/"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin size="40" />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/self_love_space_/"
            target="_blank"
            rel="noreferrer"
          >
            <CiInstagram size="40" />
          </a>
        </li>
      </ul>
    </div>
  );
}
