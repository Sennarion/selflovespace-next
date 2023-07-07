import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./mobile-menu.module.scss";
import Select from "../ui/select/select";
import { navItems } from "@/data/data";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  const pathname = usePathname();

  useEffect(() => {
    const updateWindowDimensions = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [setIsMenuOpen]);

  return (
    <div className={classNames(styles.menu, { [styles.open]: isMenuOpen })}>
      <div className={styles.content}>
        <Select />
        <ul className={styles.navList}>
          {navItems.map(({ title, href }) => (
            <li className={styles.navItem} key={title}>
              <Link
                className={classNames(styles.navLink, {
                  [styles.active]: pathname === href,
                })}
                href={href}
                onClick={() => setIsMenuOpen(false)}
              >
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
      </div>
    </div>
  );
}
