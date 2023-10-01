import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies({ allSavedMovies, setAllSavedMovies }) {
  const [searchQuerySavedMovies, setSearchQuerySavedMovies] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [toggleShortSavedMovies, setToggleShortSavedMovies] = React.useState(false);
  const [startSearch, setStartSearch] = React.useState(false);
  const [endedSearch, setEndedSearch] = React.useState(false);

  function handleQueryChange(e) {
    setSearchQuerySavedMovies(e.target.value);
  }

  function trackToggleShortSavedMovies(e) {
    setToggleShortSavedMovies(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStartSearch(true);
    setEndedSearch(true);
  }

  return (
    <main className="saved-movies">
      <SearchForm
        onSubmit={handleSubmit}
        onChange={handleQueryChange}
        inputValue={searchQuerySavedMovies}
        onChangeCheckbox={trackToggleShortSavedMovies}
      />
      <MoviesCardList
        searchQuerySavedMovies={searchQuerySavedMovies}
        toggleShortSavedMovies={toggleShortSavedMovies}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        startSearch={startSearch}
        setStartSearch={setStartSearch}
        endedSearch={endedSearch}
        setEndedSearch={setEndedSearch}
        allSavedMovies={allSavedMovies}
        setAllSavedMovies={setAllSavedMovies}
      />
    </main>
  );
}

export default SavedMovies;
