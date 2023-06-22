import { Outlet } from 'react-router-dom';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import styles from './shared-layout.module.scss';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
