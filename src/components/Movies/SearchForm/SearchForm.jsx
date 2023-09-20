import './SearchForm.css';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <form action="" className="search-form__form" id="search-form">
        <input type="search" placeholder="Фильм" required className="search-form__form-input" />
        <button type="submit" className="search-form__form-button">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
