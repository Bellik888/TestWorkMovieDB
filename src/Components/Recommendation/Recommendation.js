import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router';
import { fetchRecommendationMovie } from '../../service/FetchMovie';
import { MoviesList } from '../MoviesList/MoviesList';

export const Recommendation = ({ toggleSavedMovies, savedMovies }) => {
  const [recommendation, setRecommendation] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchResult(movieId);
  }, [movieId]);

  const fetchResult = async id => {
    const result = await fetchRecommendationMovie(id);
    setRecommendation(result);
  };
  return (
    <>
      <h1>Recommendation for you</h1>
      <MoviesList
        moviesList={recommendation}
        toggleSavedMovies={toggleSavedMovies}
        savedMovies={savedMovies}
      />
    </>
  );
};
