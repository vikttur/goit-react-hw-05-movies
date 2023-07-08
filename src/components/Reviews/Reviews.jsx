import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP
  // }, []);

  return (
    <div className={css.name}>
      <p>reviewsREVIEWSreviews: {movieId}</p>
      {true && <p>We don't have any reviews for this movie</p>}
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Reviews;
