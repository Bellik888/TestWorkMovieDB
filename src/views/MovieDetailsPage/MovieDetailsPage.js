import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieDetails } from '../../Components/MovieDetails/MovieDetails';
import { fetchDetailsMovie } from '../../service/FetchMovie';
import { Recommendation } from '../../Components/Recommendation/Recommendation';

const MovieDetailsPage = ({ toggleSavedMovies, savedMovies }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchResult(movieId);
  }, [movieId]);

  const fetchResult = async movieId => {
    const result = await fetchDetailsMovie(movieId);
    setMovieDetails(result);
      // console.log(result)
  };

  return (
    <div>
      <h1>DetailsPage</h1>
      <button type="button">
        <Link to="/">Go Home</Link>
      </button>
      <MovieDetails movieDetails={movieDetails} />
      <Recommendation
        toggleSavedMovies={toggleSavedMovies}
        savedMovies={savedMovies}
      />
    </div>
  );
};

export default MovieDetailsPage;
