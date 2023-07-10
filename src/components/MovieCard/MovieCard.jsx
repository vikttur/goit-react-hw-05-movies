import { MAIN_URL_TO_IMAGE, URL_TO_PLACEHOLDER } from '../../utils/constants';
import css from './MovieCard.module.css';

const MovieCard = ({ infoAboutMovie }) => {
  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = infoAboutMovie;

  const src = poster_path
    ? MAIN_URL_TO_IMAGE + poster_path
    : URL_TO_PLACEHOLDER + '?text=the poster is missing';
  const genresString = genres
    ? genres.map(genre => genre.name).join(' ')
    : 'Not defined';
  const year = release_date ? release_date.slice(0, 4) : 'The year is unknown';
  const title = `${original_title}(${year})`;
  const userScore = `User Score: ${Math.round(vote_average * 10)}%`;

  return (
    <div className={css.card}>
      <img className={css.poster} src={src} alt="get" />
      <h2>{title}</h2>
      <p>{userScore}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genresString}</p>
    </div>
  );
};

export default MovieCard;
