import { MoviesList } from '../../Components/MoviesList/MoviesList';

const SavedMovies = ({ savedMovies, toggleSavedMovies }) => {
  return (
    <>
      <h1>Saved movies</h1>
      {savedMovies.length > 0 ? (
        <MoviesList
          moviesList={savedMovies}
          toggleSavedMovies={toggleSavedMovies}
          savedMovies={savedMovies}
        />
      ) : (
        <h1>Not saved movies</h1>
      )}
    </>
  );
};

export default SavedMovies;
