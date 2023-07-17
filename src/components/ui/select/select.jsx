/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./select.module.scss";

const events = [
  {
    title:
      "Top Tips for Discovering Inner Harmony: FREE 30 Minute Webinar - Monday, July 17 2023",
    link: "https://www.facebook.com/events/141047202341988?paipv=0&eav=AfbcRpW-giFop2GyKZavPDqDWJRSeede_z4rOfkJpw6DKe2cbssObA5vTuxei6f0RTg&_rdr",
  },
  {
    title:
      "Nourishing the Soul: Lunchtime Delights with Self Love Space - Saturday, July 22 2023",
    link: "https://www.facebook.com/events/2902193739988755/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A225274447086448%7D%7D]%22%7D",
  },
  {
    title:
      "Nourishing the Soul: Lunchtime Delights with Self Love Space - Saturday, August 19 2023",
    link: "https://www.facebook.com/events/991562461975463/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A233593166230206%7D%7D]%22%7D",
  },
  {
    title:
      "Nourishing the Soul: Lunchtime Delights with Self Love Space - Saturday, August 26 2023",
    link: "https://www.facebook.com/events/823368232407644/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A561710889299377%7D%7D]%22%7D",
  },
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
