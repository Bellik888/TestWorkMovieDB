import s from './MovieDetails.module.css';

export const MovieDetails = ({ movieDetails }) => {
  return (
    movieDetails && (
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
          width={300}
          className={s.img}
        />
        <div className={s.innerWrapper}>
          <h1 className={s.title}>
            {movieDetails.original_title} ({movieDetails.release_date})
          </h1>
          <p className={s.score}>
            User Score: {movieDetails.vote_average * 10}%
          </p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <ul className={s.list}>
            {movieDetails.genres.map(movie => (
              <li key={movie.id} className={s.item}>
                <p>{movie.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};
