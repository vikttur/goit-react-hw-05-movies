import { useLocation, Link } from 'react-router-dom';

const ListMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListMovies;
