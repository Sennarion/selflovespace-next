/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import classNames from "classnames";
import styles from "./select.module.scss";

export default function Select() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const $select = useRef(null);
  const $selectList = useRef(null);

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

  useEffect(() => {
    const target = $selectList.current;

    if (isSelectOpen) {
      gsap.to(target, {
        height: "auto",
        opacity: "1",
      });

      return () => {
        gsap.to(target, {
          height: "0",
          opacity: "0",
        });
      };
    }
    return () => {};
  }, [isSelectOpen]);

  return (
    <div className={styles.selectWrapper} ref={$select}>
      <button
        className={styles.btn}
        onClick={() => setIsSelectOpen((prev) => !prev)}
      >
        Nearest events
      </button>
      <div
        className={classNames(styles.select, {
          [styles["active"]]: isSelectOpen,
        })}
      >
        <ul className={styles.selectList} ref={$selectList}>
          <li className={styles.listItem}>
            <a
              className={styles.listLink}
              target="_blank"
              href="https://docdro.id/bGvkx2b"
              rel="noreferrer"
              onClick={() => setIsSelectOpen(false)}
            >
              "The Pleasure of Being in Tune with Yourself and Your Body"
              retreat 19th - 22nd September 2023
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
