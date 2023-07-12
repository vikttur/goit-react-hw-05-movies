import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastList } from '../../serviceApi/serviceApi';
import ActorCard from 'components/ActorCard/ActorCard';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setCast(await getCastList(movieId));
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={css.border}>
      {!cast.length ? (
        <p className={css.message}>We don't have a cast list for this movie</p>
      ) : (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={String(id)}>
              {profile_path && (
                <ActorCard
                  path={profile_path}
                  name={name}
                  character={character}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
