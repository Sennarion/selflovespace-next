/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./select.module.scss";

const events = [
  {
    title:
      '"The Pleasure of Being in Tune with Yourself and Your Body" retreat 19th - 22nd September 2023',
    link: "https://docdro.id/bGvkx2b",
  },
];

export default function Select() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const $select = useRef(null);

  useEffect(() => {
    if (!isSelectOpen) return;

    const closeSelect = (e) => {
      if (!$select.current.contains(e.target)) {
        setIsSelectOpen(false);
      }
    };

    document.body.addEventListener("click", closeSelect);

    return () => document.body.removeEventListener("click", closeSelect);
  }, [isSelectOpen]);

  return (
    <div className={styles.selectWrapper} ref={$select}>
      <button
        className={styles.btn}
        onClick={() => setIsSelectOpen((prev) => !prev)}
      >
        Nearest events
      </button>
      <ul
        className={classNames(styles.select, {
          [styles["active"]]: isSelectOpen,
        })}
      >
        {events.map(({ title, link }) => (
          <li className={styles.listItem} key={link}>
            <a
              className={styles.listLink}
              target="_blank"
              href={link}
              rel="noreferrer"
              onClick={() => setIsSelectOpen(false)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
