import searchIcon from '@assets/icons/ICON - Search.png';
import homeIcon from '@assets/icons/Group 46.png';
import showsIcon from '@assets/icons/Group 56.png';
import moviesIcon from '@assets/icons/Group 54.png';
import genresIcon from '@assets/icons/Group 53.png';
import watchLaterIcon from '@assets/icons/Group 47.png';
import movie1 from '@assets/https_specials-1.png';
import movie2 from '@assets/https_specials-2.png';
import movie3 from '@assets/https_specials-3.png';
import movie4 from '@assets/https_specials-4.png';
import movie5 from '@assets/https_specials-5.png';
import movie6 from '@assets/https_specials-6.png';
import movie7 from '@assets/https_specials-7.png';
import movie8 from '@assets/https_specials-8.png';
import { MovieImagesType, TCatgerories } from './types';

const categories: TCatgerories[] = [
  {
    title: 'Search',
    image: searchIcon,
    active: false,
  },
  {
    title: 'Home',
    image: homeIcon,
    active: true,
  },
  {
    title: 'TV  Shows',
    image: showsIcon,
    active: false,
  },
  {
    title: 'Movies',
    image: moviesIcon,
    active: false,
  },
  {
    title: 'Genres',
    image: genresIcon,
    active: false,
  },
  {
    title: 'Watch Later',
    image: watchLaterIcon,
    active: false,
  },
];

const movieImages: MovieImagesType = {
  'https_specials-1.png': movie1,
  'https_specials-2.png': movie2,
  'https_specials-3.png': movie3,
  'https_specials-4.png': movie4,
  'https_specials-5.png': movie5,
  'https_specials-6.png': movie6,
  'https_specials-7.png': movie7,
  'https_specials-8.png': movie8,
};

export { categories, movieImages };
