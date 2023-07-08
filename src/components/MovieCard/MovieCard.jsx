import css from './MovieCard.module.css';

const MovieCard = () => {
  return (
    <div className={css.card}>
      <img src="" alt="movie" />
      <h2>Name {}</h2>
      <p>User Score: {}</p>
      <h3>Overview {}</h3>
      <p>text {}</p>
      <h4>Genres {}</h4>
      <p>text {}</p>
    </div>
  );
};

export default MovieCard;
