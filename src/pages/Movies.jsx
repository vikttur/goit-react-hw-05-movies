import Searchbar from 'components/Searchbar/Searchbar';
import { Link } from 'react-router-dom';

const Movies = () => {
  // useEffect(() => {
  // HTTP
  // }, []);
  const onSub = () => {
    console.log('TEST_TEST_TEST');
  };

  return (
    <section>
      <Searchbar onSubmit={onSub} />
      {[
        'Movie1',
        'Movie2',
        'Movie3',
        'Movie4',
        'Movie5',
        'Movie6',
        'Movie7',
      ].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
