import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <h1>Ups...!</h1>
      <h2>Page not found</h2>
      <h3>
        <Link to="/">- Go to home page -</Link>
      </h3>
    </section>
  );
};

export default NotFound;
