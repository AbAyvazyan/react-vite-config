import { useId } from 'react';
import { categories } from '../../utils/constants';
import { TCatgerories } from '@utils/types';
import profileImage from '@assets/profile.png';
import styles from './index.module.scss';

const Sidebar = () => {
  const id = useId();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.miniBar}>
          <div>
            {categories.map((item: TCatgerories) => {
              return (
                <div
                  key={id + item.title}
                  className={`${styles.singleCategory} ${item.active && styles.activeCategory}`}
                >
                  <img src={item.image} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.fullBar}>
          <div className={styles.profilePart}>
            <img src={profileImage} /> <span>Daniel</span>
          </div>

          <div>
            {categories.map((item: TCatgerories) => {
              return (
                <div
                  key={id + item.title}
                  className={`${styles.fullCategory} ${item.active && styles.fullActiveCategory}`}
                >
                  <img src={item.image} />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.helpBar}>
            <div>
              <span>Language</span>
            </div>
            <div>
              <span>Get Help</span>
            </div>
            <div>
              <span>Exit</span>
            </div>
          </div>
        </div>
      </aside>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Sidebar;
