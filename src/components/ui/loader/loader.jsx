import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.backdrop}>
      <span className={styles.spinner} />
    </div>
  );
}
