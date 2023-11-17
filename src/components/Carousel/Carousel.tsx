import { useEffect, useId, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { movieImages } from '@utils/constants';
import { useAppDispatch, useAppSelector } from '@app/store';
import { getMovies, movieType, setActive } from '../../features/movies';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.scss';
import styles from './index.module.scss';

const Carousel = () => {
  const [sliderMembers, setSliderMembers] = useState<movieType[] | null>(null);
  const id = useId();
  const movies = useAppSelector((state) => state.movies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    setSliderMembers(movies.TendingNow);
  }, [movies]);


  const movieCardClickCHandler = (id: string) => {
    dispatch(setActive(id));
  };
  return (
    <div className={styles.carouselHolder}>
      <Swiper
        slidesPerView={8}
        spaceBetween={15}
        freeMode={true}
        mousewheel={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {sliderMembers?.length &&
          sliderMembers.map((item: movieType) => {
            return (
              <SwiperSlide key={id + item.Date} onClick={() => movieCardClickCHandler(item.Id)}>
                <img src={movieImages[item['CoverImage']]} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carousel;
