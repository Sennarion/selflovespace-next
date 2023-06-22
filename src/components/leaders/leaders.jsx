import Leader from "../ui/leader/leader";
import styles from "./leaders.module.scss";
import { leaders } from "@/data/data";

export default function Leaders() {
  return (
    <div className={styles.leaders}>
      <h4 className={styles.leadersTitle}>The Two Retreat Leaders</h4>
      <ul className={styles.leadersList}>
        {leaders.map((leader) => (
          <Leader {...leader} key={leader.name} />
        ))}
      </ul>
    </div>
  );
}
