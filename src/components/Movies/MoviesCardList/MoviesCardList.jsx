import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import { useLocalStorage } from '../../../hooks/useLocalStorage';

import { getMovies } from '../../../utils/MoviesApi';

function MoviesCardList({
  searchQuery,
  isLoading,
  setIsLoading,
  startSearch,
  toggleShortMovies,
  allSavedMovies,
  setAllSavedMovies
}) {
  const [searchResults, setSearchResults] = useLocalStorage('savedMoviesSearchResult', []);

  const [visibleCards768, setVisibleCards768] = React.useState(8);
  const [visibleCards320, setVisibleCards320] = React.useState(5);
  const [visibleCards, setVisibleCards] = React.useState(12);

  const [resultSubmit, setResultSubmit] = React.useState({ result: '', resultError: false });

  const [addClickVisibleCards, setAddClickVisibleCards] = React.useState(false);

  const loadCount =
    window.innerWidth >= 320 && window.innerWidth <= 635
      ? 2
      : window.innerWidth >= 636 && window.innerWidth <= 1279
      ? 2
      : 3;

  const visibleWindowCards768 = window.innerWidth >= 636 && window.innerWidth <= 1279;
  const visibleWindowCards320 = window.innerWidth >= 320 && window.innerWidth <= 635;

  const filteredResults = toggleShortMovies
    ? searchResults.filter(movie => movie.duration <= 40)
    : searchResults;

  React.useEffect(() => {
    (async () => {
      try {
        if (isLoading) {
          const movies = await getMovies();
          const lowerCaseQuery = searchQuery.toLowerCase();

          const filteredMovies = movies.filter(movie => {
            const lowerCaseNameRU = movie.nameRU.toLowerCase();
            const lowerCaseNameEN = movie.nameEN.toLowerCase();
            return (
              lowerCaseNameRU.includes(lowerCaseQuery) || lowerCaseNameEN.includes(lowerCaseQuery)
            );
          });
          setVisibleCards768(8);
          setVisibleCards320(5);
          setVisibleCards(12);

          setIsLoading(false);
          setSearchResults(filteredMovies);

          return;
        }
      } catch (error) {
        console.error(error);
        setResultSubmit({
          result: `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${error}`,
          resultError: true
        });
      }
    })();
  }, [isLoading]);

  const handleShowMore = () => {
    if (window.innerWidth >= 320 && window.innerWidth <= 635) {
      setVisibleCards320(prev => prev + loadCount);
      setVisibleCards768(prev => prev - (prev - visibleCards320) + loadCount);
      setVisibleCards(prev => prev - (visibleCards - visibleCards320) + loadCount);
    } else if (window.innerWidth >= 636 && window.innerWidth <= 1279) {
      setVisibleCards768(prev => prev + loadCount);
      setVisibleCards320(prev => prev + (visibleCards768 - prev) + loadCount);
      setVisibleCards(prev => prev - (visibleCards - visibleCards768) + loadCount);
    } else {
      setVisibleCards(prev => prev + loadCount);
      setVisibleCards320(prev => prev + (visibleCards - prev) + loadCount);
      setVisibleCards768(prev => prev + (visibleCards - prev) + loadCount);
    }
    setAddClickVisibleCards(true);
  };

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
        ) : startSearch && filteredResults.length === 0 ? (
          <p className="movies-card-list__not-found">Ничего не найдено</p>
        ) : visibleWindowCards768 ? (
          filteredResults
            .slice(0, visibleCards768)
            .map(movie => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                setSearchResults={setSearchResults}
                setAllSavedMovies={setAllSavedMovies}
                allSavedMovies={allSavedMovies}
                searchResults={searchResults}
                handleShowMore={handleShowMore}
                addClickVisibleCards={addClickVisibleCards}
              />
            ))
        ) : visibleWindowCards320 ? (
          filteredResults
            .slice(0, visibleCards320)
            .map(movie => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                setSearchResults={setSearchResults}
                setAllSavedMovies={setAllSavedMovies}
                allSavedMovies={allSavedMovies}
                searchResults={searchResults}
                handleShowMore={handleShowMore}
              />
            ))
        ) : (
          filteredResults
            .slice(0, visibleCards)
            .map(movie => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                setSearchResults={setSearchResults}
                setAllSavedMovies={setAllSavedMovies}
                allSavedMovies={allSavedMovies}
                searchResults={searchResults}
                handleShowMore={handleShowMore}
              />
            ))
        )}
      </div>
      {filteredResults.length > visibleCards320 && window.innerWidth <= 635 ? (
        <button className="movies-card-list-button" onClick={handleShowMore}>
          Ещё
        </button>
      ) : filteredResults.length > visibleCards768 ? (
        <button className="movies-card-list-button" onClick={handleShowMore}>
          Ещё
        </button>
      ) : (
        filteredResults.length > visibleCards && (
          <button className="movies-card-list-button" onClick={handleShowMore}>
            Ещё
          </button>
        )
      )}
    </>
  );
}

export default MoviesCardList;
