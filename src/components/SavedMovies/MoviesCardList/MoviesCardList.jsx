import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

import Preloader from '../../Movies/Preloader/Preloader';

import { getUserCurrentMovie } from '../../../utils/MainApi';

function MoviesCardList({
  searchQuerySavedMovies,
  toggleShortSavedMovies,
  isLoading,
  setIsLoading,
  startSearch,
  setStartSearch,
  endedSearch,
  allSavedMovies,
  setAllSavedMovies
}) {
  const [searchResults, setSearchResults] = React.useState([]);

  const [resultSubmit, setResultSubmit] = React.useState({ result: '', resultError: false });

  const filteredResults = toggleShortSavedMovies
    ? searchResults.filter(movie => movie.duration <= 40)
    : searchResults;

  React.useEffect(() => {
    (async () => {
      try {
        const movies = await getUserCurrentMovie();
        const lowerCaseQuery = searchQuerySavedMovies.toLowerCase();

        const filteredMovies = movies.filter(movie => {
          const lowerCaseNameRU = movie.nameRU.toLowerCase();
          const lowerCaseNameEN = movie.nameEN.toLowerCase();
          return (
            lowerCaseNameRU.includes(lowerCaseQuery) || lowerCaseNameEN.includes(lowerCaseQuery)
          );
        });

        setStartSearch(false);
        setIsLoading(false);
        return setSearchResults(filteredMovies);
      } catch (error) {
        console.error(error);
        setResultSubmit({
          result: `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${error}`,
          resultError: true
        });
      }
    })();
  }, [startSearch]);

  return (
    <>
      <div className="movies-card-list">
        {resultSubmit.resultError && (
          <p className="movies-card-list__not-found movies-card-list__not-found_size">
            {resultSubmit.result}
          </p>
        )}
        {isLoading ? (
          <Preloader />
        ) : !startSearch && endedSearch && filteredResults.length === 0 ? (
          <p className="movies-card-list__not-found">Ничего не найдено</p>
        ) : (
          filteredResults.map(movie => (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              setSearchResults={setSearchResults}
              allSavedMovies={allSavedMovies}
              setAllSavedMovies={setAllSavedMovies}
            />
          ))
        )}
      </div>
    </>
  );
}

export default MoviesCardList;
