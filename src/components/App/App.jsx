import React from 'react';

import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(true);
  const location = useLocation();
  const notFoundPath = !location.pathname.match(/^\/(movies|saved-movies|profile|signin|signup|)$/);

  return (
    <div className="app">
      {!notFoundPath && <Header loggedIn={loggedIn} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!notFoundPath && <Footer />}
    </div>
  );
}

export default App;
