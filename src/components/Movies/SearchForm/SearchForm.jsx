import React from 'react';

import './SearchForm.css';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({
  toggleShortMovies,
  onSubmit,
  onChange,
  inputValue,
  onChangeCheckbox,
  inputError
}) {
  return (
    <div className="search-form">
      <form noValidate className="search-form__form" id="search-form" onSubmit={onSubmit}>
        <input
          type="search"
          placeholder="Фильм"
          required
          className="search-form__form-input"
          onChange={onChange}
          value={inputValue || ''}
        />
        <button type="submit" className="search-form__form-button">
          Поиск
        </button>
      </form>
      <p className="search-form__error-message">{inputError}</p>
      <FilterCheckbox onChange={onChangeCheckbox} checked={toggleShortMovies} />
    </div>
  );
}

export default SearchForm;
