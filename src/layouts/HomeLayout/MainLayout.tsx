import { FC, ReactNode } from 'react';

import Header from '@components/Header';

import styles from './index.module.scss';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
