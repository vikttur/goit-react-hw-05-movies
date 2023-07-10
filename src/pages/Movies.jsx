import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../serviceApi/serviceApi';
import ListMovies from '../components/ListMuvies/ListMuvies';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!search) return;

    const fetchMovieByQuery = async () => {
      try {
        setMovies(await getMovieByQuery(search));
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovieByQuery();
  }, [search]);

  return (
    <div>
      <Searchbar onSubmit={setSearch} />
      {movies.length > 0 && <ListMovies movies={movies} />}
    </div>
  );
};

export default Movies;
