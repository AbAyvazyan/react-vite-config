import styles from './index.module.scss';
import FeaturedMovie from '@components/FeaturedMovie';
import Carousel from '@components/Carousel';
const HomeLayout = () => {
  return (
    <div className={styles.homeLayout}>
      <FeaturedMovie />
      <Carousel />
    </div>
  );
};

export default HomeLayout;
