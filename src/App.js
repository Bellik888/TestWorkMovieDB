import { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';

import { Navigation } from './views/Navigation/Navigation';
// import { HomePage } from './views/HomePage/HomePage'
// import { MovieDetailsPage } from './views/MovieDetailsPage/MovieDetailsPage'
// import {SavedMovies} from './views/SavedMovies/SavedMovies'

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const SavedMovies = lazy(() => import('./views/SavedMovies/SavedMovies'));

function App() {
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(window.localStorage.getItem('savedMovies')) ?? [],
  );

  const toggleSavedMovies = obj => {
    if (savedMovies.find(el => el.id === obj.id)) {
      setSavedMovies(prev => [...prev.filter(el => el.id !== obj.id)]);
      return;
    }
    setSavedMovies(prev => [...prev, obj]);
  };

  useEffect(() => {
    window.localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage
                toggleSavedMovies={toggleSavedMovies}
                savedMovies={savedMovies}
              />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage
                toggleSavedMovies={toggleSavedMovies}
                savedMovies={savedMovies}
              />
            </Route>
            <Route exact path="/saved">
              <SavedMovies
                toggleSavedMovies={toggleSavedMovies}
                savedMovies={savedMovies}
              />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
