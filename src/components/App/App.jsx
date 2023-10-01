import React from 'react';

import './App.css';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

import Preloader from '../Movies/Preloader/Preloader';
import * as auth from '../../utils/auth';

import ProtectedRoute from '../ProtectedRoute';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(null);
  const location = useLocation();
  const notFoundPath = !location.pathname.match(/^\/(movies|saved-movies|profile|signin|signup|)$/);

  const [currentUser, setCurrentUser] = React.useState({});

  const [savedMovies, setSavedMovies] = React.useState();

  const [allSavedMovies, setAllSavedMovies] = useLocalStorage('allSavedMovies', []);

  const navigate = useNavigate();

  const jwt = localStorage.getItem('jwt');

  const checkToken = () => {
    if (jwt === null) {
      setLoggedIn(false);
      return;
    }

    (async () => {
      try {
        const verified = await auth.getContent(jwt);
        if (!verified) {
          return;
        }
        navigate(location.pathname);
        setLoggedIn(true);
        return console.log(verified);
      } catch (error) {
        setLoggedIn(false);
        console.error(error);
      }
    })();
  };

  React.useEffect(() => {
    checkToken();
  }, [jwt]);

  if (loggedIn === null) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app">
        {!notFoundPath && <Header loggedIn={loggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                allSavedMovies={allSavedMovies}
                setAllSavedMovies={setAllSavedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                allSavedMovies={allSavedMovies}
                setAllSavedMovies={setAllSavedMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />}
          />
          {!loggedIn && (
            <Route
              path="/signin"
              element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
            />
          )}
          {!loggedIn && (
            <Route
              path="/signup"
              element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {!notFoundPath && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
