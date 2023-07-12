import PropTypes from 'prop-types';
import { MAIN_URL_TO_IMAGE, URL_TO_PLACEHOLDER } from '../../utils/constants';
import css from './ActorCard.module.css';

const ActorCard = ({ path, name, character }) => {
  const src = path
    ? MAIN_URL_TO_IMAGE + path
    : URL_TO_PLACEHOLDER + '?text=the photo is missing';

  return (
    <div className={css.card}>
      <img className={css.photo} src={src} alt="actor" />
      <div className={css.info}>
        <p className={css.name}>{name}</p>
        <p className={css.character}>Character: {character}</p>
      </div>
    </div>
  );
};

ActorCard.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default ActorCard;
