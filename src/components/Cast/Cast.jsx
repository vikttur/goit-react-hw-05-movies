import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP
  // }, []);

  return (
    <div className={css.name}>
      <p>cast_CAST_cast: {movieId}</p>
      <ul>
        <li>
          <img src="" alt="movie" />
          <p>Name {}</p>
          <p>Character: {}</p>
        </li>
      </ul>
    </div>
  );
};

export default Cast;
