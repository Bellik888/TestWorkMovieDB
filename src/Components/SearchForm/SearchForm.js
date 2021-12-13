import s from './SearchForm.module.css';

export const SearchForm = ({ handleChangeQuery }) => {
  const handleSearchInput = e => {
    handleChangeQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        onChange={handleSearchInput}
        placeholder="Choose your movie"
        className={s.input}
      />
      {/* <button type="submit" className={s.btn}>
        Search
      </button> */}
    </form>
  );
};
