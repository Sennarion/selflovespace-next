import Link from "next/link";
import classNames from "classnames";
import styles from "./mobile-menu.module.scss";
import Select from "../ui/select/select";
import { navItems } from "@/data/data";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div className={classNames(styles.menu, { [styles.open]: isMenuOpen })}>
      <div className={styles.content}>
        <ul className={styles.navList}>
          {navItems.map(({ title, href }) => (
            <li className={styles.navItem} key={title}>
              <Link className={styles.navLink} href={href} onClick={toggleMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          <li className={styles.icon}>
            <a className={styles.iconLink} href="tel:+447760164058">
              <BsTelephoneFill />
            </a>
          </li>
          <li className={styles.icon}>
            <a
              className={styles.iconLink}
              href="mailto:bukovska@selflovespace.uk"
            >
              <IoMdMail size="18" />
            </a>
          </li>
        </ul>
        <Select />
      </div>
    </div>
  );
}
