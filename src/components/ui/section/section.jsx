import classNames from 'classnames';
import styles from './section.module.scss';

export default function Section({ children, id, fullHeight }) {
  return (
    <section
      id={id}
      className={classNames(
        styles.section,
        fullHeight ? styles.fullHeight : ''
      )}
    >
      {children}
    </section>
  );
}
