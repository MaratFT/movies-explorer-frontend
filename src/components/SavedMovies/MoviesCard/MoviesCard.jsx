import React from 'react';

import './MoviesCard.css';

import { deleteUserCurrentMovie } from '../../../utils/MainApi';

const formatDuration = duration => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч ${minutes}м`;
};

function MoviesCard({ movie, setSearchResults, allSavedMovies, setAllSavedMovies }) {
  async function delUserCurrentMovie() {
    try {
      await deleteUserCurrentMovie(movie._id);
      setSearchResults(state => state.filter(c => c._id !== movie._id));
      setAllSavedMovies(allSavedMovies.filter(m => m._id !== movie._id));
      return;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
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
          <img className="movies-card__photo" src={`${movie.image}`} alt="Кадр фильма" />
        </a>
        <button className="movies-card__button-delete" onClick={delUserCurrentMovie}></button>
      </article>
    </>
  );
}

export default MoviesCard;
