import { useEffect, useState } from 'react';
import styles from './inde.module.scss';
import movieTitle from '@assets/FeaturedTitleImage.png';
import coverImage from '@assets/FeaturedCoverImage.png';
import Button from '@components/Button';
import { useAppSelector } from '@app/store';
import { movieType } from '../../features/movies';

const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState<movieType | null>(null);
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  const movies = useAppSelector((state) => state.movies);

  useEffect(() => {
    setFeaturedMovie(movies['NowActive']);
    movies['NowActive']?.['VideoUrl'] && setVideoEnded(false);
  }, [movies]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };
  return (
    <section className={styles.featuredSection}>
      <div className={styles.aboutMovie}>
        <div>{featuredMovie?.['Category']}</div>
        <div>
          <img src={movieTitle} />
        </div>
        <div className={styles.movieContent}>
          <span>{featuredMovie?.['ReleaseYear']}</span>
          <span>{featuredMovie?.['MpaRating']}</span>
          <span>{featuredMovie?.['Duration']}</span>
        </div>
        <div className={styles.movieDescription}>{featuredMovie?.['Description']}</div>
        <div>
          <Button>Play</Button>
          <Button style={{ color: 'white', backgroundColor: '#151fb7' }}>More Info</Button>
        </div>
      </div>

      {!videoEnded && featuredMovie?.['VideoUrl'] && (
        <video autoPlay muted id="myVideo" onEnded={handleVideoEnd} className={styles.videoPlayer}>
          <source
            src={'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'}
            type="video/mp4"
          />
          Your browser does not support HTML5 video
        </video>
      )}

      {videoEnded && <img src={coverImage} className={styles.coverimage} alt="coverImage" />}
    </section>
  );
};

export default FeaturedMovie;
