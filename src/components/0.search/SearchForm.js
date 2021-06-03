import React from "react";

function SearchForm({ value, handleSubmit, setValue, handleSuggestions }) {
  return (
    <form id="searchForm" className="search__form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Distrito/Ilha"
        ariaLabel="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSuggestions();
        }}
        name=""
        id="search"
      />
      <button className="search__form--btn" type="submit">
        Click
      </button>
    </form>
  );
}

export default SearchForm;
