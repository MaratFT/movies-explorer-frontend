import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

// import Preloader from './Preloader/Preloader';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </main>
  );
}

export default SavedMovies;
