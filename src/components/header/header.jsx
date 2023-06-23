"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import styles from "./header.module.scss";
import Container from "../ui/container/container";
import MobileMenu from "../mobile-menu/mobile-menu";
import Select from "../ui/select/select";
import logo from "../../images/logo.svg";
import { navItems } from "@/data/data";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      return;
    }

    document.documentElement.style.overflow = "auto";
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoWrapper}>
            <Image
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
              quality={100}
              fill
            />
          </Link>
          <div className={styles.navWrapper}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {navItems.map(({ title, href }) => (
                  <li className={styles.navItem} key={title}>
                    <Link
                      className={classNames(styles.navLink, {
                        [styles.active]: pathname === href,
                      })}
                      href={href}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className={styles.icons}>
              <li className={styles.icon}>
                <a className={styles.iconLink} href="tel:+447760164058">
                  <BsTelephoneFill />
                </a>
              </li>
              <li className={styles.icon}>
                <a
                  className={styles.iconLink}
                  href="mailto:valentyna@selflovespace.uk"
                >
                  <IoMdMail size="18" />
                </a>
              </li>
            </ul>
            <Select />
          </div>
          <div className={styles.mobileNavWrapper}>
            <Hamburger
              size={20}
              toggled={isMenuOpen}
              onToggle={toggleMenu}
              color="#348a9b"
              rounded
            />
          </div>
        </div>
      </Container>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
