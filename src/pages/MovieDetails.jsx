import { useParams, Link, Outlet } from 'react-router-dom';
import Button from '../components/Button/Button';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP
  // }, []);

  return (
    <section>
      <Button type="button">Go back</Button>
      <h1>{movieId}</h1>
      <MovieCard />
      <h5>Additional information</h5>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
