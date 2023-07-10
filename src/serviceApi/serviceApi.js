import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=9580a687ebb834d67847eeb9b6897922
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '9580a687ebb834d67847eeb9b6897922';

export const getListTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data.results;
};

export const getMovieByQuery = async (query) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data.results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}`
  );

  return data;
};

export const getCastList = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return data.cast;
};

export const getReviewsOnMovie = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return data.results;
};