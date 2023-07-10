import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from '../serviceApi/serviceApi';
import Button from '../components/Button/Button';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setMovie(await getMovieById(movieId));
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovieById();
  }, [movieId]);

  const location = useLocation();
  const previousPage = location.state?.from ?? '/';

  return (
    <div>
      <Button type="button">
        <Link to={previousPage}>Go back</Link>
      </Button>
      <MovieCard infoAboutMovie={movie} />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
