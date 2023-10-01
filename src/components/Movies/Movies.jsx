import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import './Movies.css';

function Movies({ loggedIn, onMovieSave, onMovieDelete, allSavedMovies, setAllSavedMovies }) {
  const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [startSearch, setStartSearch] = React.useState(false);
  const [toggleShortMovies, setToggleShortMovies] = useLocalStorage('toggleShortMovies', false);

  const [inputError, setInputError] = React.useState('');

  function handleQueryChange(e) {
    setSearchQuery(e.target.value);
  }

  function trackToggleShortMovies(e) {
    setToggleShortMovies(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) {
      setInputError('Нужно ввести ключевое слово');
    } else {
      setInputError('');
      setIsLoading(true);
      setStartSearch(true);
    }
  }

  return (
    <main className="movies">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsLoading={setIsLoading}
        setStartSearch={setStartSearch}
        setToggleShortMovies={setToggleShortMovies}
        toggleShortMovies={toggleShortMovies}
        onSubmit={handleSubmit}
        onChange={handleQueryChange}
        inputValue={searchQuery}
        onChangeCheckbox={trackToggleShortMovies}
        inputError={inputError}
      />
      <MoviesCardList
        loggedIn={loggedIn}
        searchQuery={searchQuery}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        startSearch={startSearch}
        toggleShortMovies={toggleShortMovies}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        allSavedMovies={allSavedMovies}
        setAllSavedMovies={setAllSavedMovies}
      />
    </main>
  );
}

export default Movies;
