import { MAIN_URL_TO_IMAGE, URL_TO_PLACEHOLDER } from '../../utils/constants';
import css from './ActorCard.module.css';

const ActorCard = ({ path, name, character }) => {
  const src = path
    ? MAIN_URL_TO_IMAGE + path
    : URL_TO_PLACEHOLDER + '?text=the photo is missing';

  return (
    <div className={css.card}>
      <img className={css.photo} src={src} alt="actor" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </div>
  );
};

export default ActorCard;
