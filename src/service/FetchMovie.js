import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6aab34192b7a363d622c25c364ff9e4e';

// ==============PopularMovie==================
export const fetchPopularMovie = page => {
  return (
    axios
      .get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(result => result.data.results)
      //   .then(res=>console.log(res.data.results))
      .catch(err => console.log(err))
  );
};

// ==============SearchQuery==================
export const fetchSearchMovie = searchQuery => {
  return (
    axios
      .get(
        `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&language=en-US`,
      )
      // .then(res => console.log(res.data.results))
      .then(result => result.data.results)
      .catch(err => console.log(err))
  );
};
//==========DEtails============
export const fetchDetailsMovie = id => {
  return (
    axios
      .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.data)
      //   .then(res=>console.log(res.data))
      .catch(err => console.log(err))
  );
};

//=============AllGenres=============
export const fetchAllGenres = () => {
  return (
    axios
      .get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(res => res.data.genres)
      // .then(res => console.log(res.data.genres))
      .catch(err => console.log(err))
  );
};

//==========Recommendation============
export const fetchRecommendationMovie = id => {
  return (
    axios
      .get(`/movie/${id}/recommendations?api_key=${API_KEY}`)
      .then(res => res.data.results)
      // .then(res => console.log(res.data.results))
      .catch(err => console.log(err))
  );
};
