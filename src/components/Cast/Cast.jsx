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
    <div className={css.name}>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={String(id)}>
            <ActorCard path={profile_path} name={name} character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

// ++++++++++++++++++++++++++++++++
// const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

// <img src={
//  movieData.poster_path ?
//  [<https://image.tmdb.org/t/p/w500/${movieData.poster_path}>](<https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D>)
//  : defaultImg
// }
// width={250}
// alt="poster"
// />
// ++++++++++++++++++++++++++++++++
