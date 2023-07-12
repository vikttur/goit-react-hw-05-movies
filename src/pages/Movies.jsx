import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../serviceApi/serviceApi';
import ListMovies from '../components/ListMovies/ListMovies';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;

    const fetchMovieByQuery = async () => {
      try {
        setMovies(await getMovieByQuery(search));
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <div>
      <Searchbar onSubmit={setSearchParams} />
      {movies.length ? <ListMovies movies={movies} /> : ''}
    </div>
  );
};

export default Movies;
