import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import NotFound from '../../pages/NotFound';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
// import css from './App.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
