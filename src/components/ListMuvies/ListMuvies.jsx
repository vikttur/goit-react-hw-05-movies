import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={String(id)}>
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
