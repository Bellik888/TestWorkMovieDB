import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchAllGenres } from '../../service/FetchMovie';

import s from './MoviesList.module.css';

export const MoviesList = ({ moviesList, toggleSavedMovies, savedMovies,location }) => {
  const [genres, setGenres] = useState([]);
  const fetchGenres = async () => {
    let result = await fetchAllGenres();
    setGenres(result);
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <ul className={s.list}>
      {moviesList &&
        moviesList.map(({ id, genre_ids, original_title, poster_path }) => (
          <li key={id} className={s.item}>
            <Link
              to={{
                pathname: `/movies/${id}`,
              }}
              className={s.link}
            >
              <img
                className={s.img}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://cdn3.vectorstock.com/i/thumb-large/18/77/black-linear-photo-camera-logo-like-no-image-vector-19121877.jpg'
                }
                alt="original_title"
                width={250}
              />
              <p className={s.text}>{original_title}</p>
              {genre_ids.length > 0 && (
                <>
                  <h3>Genres:</h3>
                  <ul className={s.genresList}>
                    {genre_ids.map(el =>
                      genres.map(
                        genre =>
                          el === genre.id && <li key={el}>{genre.name}</li>,
                      ),
                    )}
                  </ul>
                </>
              )}
            </Link>
            <button
              type="button"
              onClick={() =>
                toggleSavedMovies({
                  id,
                  genre_ids,
                  original_title,
                  poster_path,
                })
              }
              className={s.btnHeart}
            >
              {savedMovies.find(el => el.id === id) ? (
                <span className={s.addMovie}>&#10084;</span>
              ) : (
                <span className={s.removeMovie}>&#10084;</span>
              )}
            </button>
          </li>
        ))}
    </ul>
  );
};
