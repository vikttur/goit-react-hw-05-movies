import { useState, useEffect } from 'react';
import { getListTrendingMovies } from '../serviceApi/serviceApi';
import ListMovies from '../components/ListMovies/ListMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getListTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length ? <ListMovies movies={movies} /> : ''}
    </div>
  );
};

export default Home;
