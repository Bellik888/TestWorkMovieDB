import { useEffect, useState } from 'react';
import { fetchPopularMovie, fetchSearchMovie } from '../../service/FetchMovie';
import { MoviesList } from '../../Components/MoviesList/MoviesList';
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import s from './HomePage.module.css';

const HomePage = ({ toggleSavedMovies, savedMovies }) => {
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchResultPopular(page);
  }, [page]);

  useEffect(() => {
    if (searchQuery === '') {
      return fetchResultPopular(page);
    } else {
      return fetchSearchResult(searchQuery);
    }
  }, [searchQuery, page]);
  const fetchResultPopular = async page => {
    const result = await fetchPopularMovie(page);
    setMoviesList(result);
  };

  const fetchSearchResult = async query => {
    const result = await fetchSearchMovie(query);
    setMoviesList(result);
  };

  const handleChangeQuery = e => {
    setSearchQuery(e);
  };

  const onPreviousPage = () => {
    setPage(page - 1);
    window.scrollTo({
    top: 0,
    behavior: "smooth"
});
  };
  const onNextPage = () => {
    setPage(page + 1);
    window.scrollTo({
    top: 0,
    behavior: "smooth"
});
  };

  return (
    <div className={s.container}>
      <SearchForm handleChangeQuery={handleChangeQuery} />
      <MoviesList
        moviesList={moviesList}
        toggleSavedMovies={toggleSavedMovies}
        savedMovies={savedMovies}
      />
      <div className={s.btnWrapper}>
          <button type="button" disabled={page <= 1} onClick={onPreviousPage} className={s.btn}>
          <span className={s.arrow}>&#10232;Last</span>
        </button>
        <button type="button" onClick={onNextPage} className={s.btn}>
        <span className={s.arrow}>{page}</span>
      </button>
      <button type="button" onClick={onNextPage} className={s.btn}>
        <span className={s.arrow}>Next&#10233;</span>
      </button>
      </div>
    </div>
  );
};

export default HomePage;
