import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <>
      <div className="movies-card-list">
        <MoviesCard />
      </div>
      <button className="movies-card-list-button">Ещё</button>
    </>
  );
}

export default MoviesCardList;
