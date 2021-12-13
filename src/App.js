import { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './App.css';

import { Navigation } from './views/Navigation/Navigation';
import { Spinner } from './Components/Spinner/Spinner';
// import { HomePage } from './views/HomePage/HomePage'
// import { MovieDetailsPage } from './views/MovieDetailsPage/MovieDetailsPage'
// import {SavedMovies} from './views/SavedMovies/SavedMovies'

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const SavedMovies = lazy(() => import('./views/SavedMovies/SavedMovies'));

const toastSettings = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function App() {
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(window.localStorage.getItem('savedMovies')) ?? [],
  );

  const toggleSavedMovies = obj => {
    
    if (savedMovies.find(el => el.id === obj.id)) {
      setSavedMovies(prev => [...prev.filter(el => el.id !== obj.id)]);
      toast.warn('Remove from savedMovies', toastSettings);
      return;
    }
    setSavedMovies(prev => [...prev, obj]);
    toast.success('Add to savedMovies', toastSettings);
  };

  useEffect(() => {
    window.localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  }, [savedMovies]);

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Spinner/>}>
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
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </div>
  );
}

export default App;
