import classNames from 'classnames';
import styles from './section-title.module.scss';

export default function SectionTitle({ children, className, subtitle }) {
  return (
    <div className={classNames(styles.titleWrapper, className)}>
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  );
}
