import { FC } from 'react';

import { DropdownItems } from '@utils/constants';
import { IMenuItem } from '@utils/types';

import styles from './MenuItem.module.scss';
import arrow from '@assets/drop-icon.png';

const MenuItem: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.menuItem}>
      <span>{title}</span>
      <img src={arrow} alt="arrow" />

      <div className={styles.dropItem}>
        {DropdownItems.map((item: IMenuItem) => {
          return (
            <div key={item.id}>
              <span>{item.title}</span>
              <img src={arrow} alt="arrow" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;
