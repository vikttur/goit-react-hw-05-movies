import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ListMovies.module.css';

const ListMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title }) => (
        <li className={css.item} key={String(id)}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ListMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default ListMovies;
