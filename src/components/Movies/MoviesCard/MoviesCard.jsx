import React from 'react';

import './MoviesCard.css';

import { createUserCurrentMovie, deleteUserCurrentMovie } from '../../../utils/MainApi';

const URL = 'https://api.nomoreparties.co';

const formatDuration = duration => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч ${minutes}м`;
};

function MoviesCard({ movie, allSavedMovies, setAllSavedMovies }) {
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    const savedMovie = allSavedMovies.find(m => m && m.movieId === movie.id);
    if (savedMovie) {
      setIsSaved(true);
    }
  }, []);

  function handleSaveMovie(movie) {
    (async () => {
      try {
        const newMovie = await createUserCurrentMovie(movie);
        setAllSavedMovies([newMovie, ...allSavedMovies]);
      } catch (error) {
        console.error(error);
      }
    })();
  }

  async function handleDeleteMovie(movieId) {
    try {
      await deleteUserCurrentMovie(movieId);

      setAllSavedMovies(allSavedMovies.filter(m => m._id !== movieId));
    } catch (error) {
      console.error(error);
    }
  }

  function handleMovieButtonClick() {
    try {
      if (isSaved) {
        const filterMovies = allSavedMovies.filter(m => m && m.movieId === movie.id)[0];
        if (filterMovies) {
          const filterID = filterMovies._id;
          handleDeleteMovie(filterID);
          setIsSaved(false);
        }
      } else {
        handleSaveMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `${URL}${movie.image.url}`,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `${URL}${movie.image.formats.thumbnail.url}`,
          movieId: movie.id
        });
        setIsSaved(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <article className="movies-card">
      <div className="movies-card__text">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">{formatDuration(movie.duration)}</p>
      </div>
      <a
        className="movies-card__photo-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies-card__photo" src={`${URL}${movie.image.url}`} alt="Кадр фильма" />
      </a>
      <button
        className={`${isSaved ? 'movies-card__button-active' : 'movies-card__button '}`}
        onClick={handleMovieButtonClick}
      >{`${!isSaved ? 'Сохранить' : ''}`}</button>
    </article>
  );
}

export default MoviesCard;
