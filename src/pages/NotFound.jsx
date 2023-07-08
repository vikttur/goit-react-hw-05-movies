import notFound from '../images/notFound.jpg';

const NotFound = () => {
  return (
    <section>
      <h1>Ups...!</h1>
      <img src={notFound} alt="not found" />
      <p>Advice:</p>
      <p>Make sure all words are spelled correctly.</p>
      <p>Try other keywords.</p>
      <p>Try to use more general words.</p>
    </section>
  );
};

export default NotFound;
