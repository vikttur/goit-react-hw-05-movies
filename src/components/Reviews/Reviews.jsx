import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsOnMovie } from '../../serviceApi/serviceApi';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviews(await getReviewsOnMovie(movieId));
      } catch (e) {
        console.log(e);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.name}>
      {!reviews.length && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={String(id)}>
            <h5>Author: {author}</h5>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
