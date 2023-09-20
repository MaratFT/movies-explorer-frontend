import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox" htmlFor="short-films">
      <input
        className="filter-checkbox__label-input"
        type="checkbox"
        id="short-films"
        name="short-films"
        form="search-form"
      />
      <span className="filter-checkbox__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
