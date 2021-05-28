import React, { useState, useContext } from "react";
import { urlSearch, MyContext } from "../utils/utils";
import useFetch from "../utils/useFetch";

export default function Search() {
  const { setLocalId } = useContext(MyContext);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { previsao } = useFetch(urlSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    previsao.map((distrito) => {
      if (
        distrito.local
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") ===
        value
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      ) {
        setLocalId(
          `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${distrito.globalIdLocal}.json`
        );
        setValue("");
      }
    });
  };

  const handleSuggestions = () => {
    let array = previsao.filter((e) => {
      return e.local.toLowerCase().includes(value.toLowerCase());
    });
    setSuggestions(array);
  };

  return (
    <section className="search">
      <h3 className="search__title">Pesquise Distrito/Ilha</h3>
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
      {value && (
        <div className="search__suggestions">
          {suggestions.map((e) => {
            return (
              <button
                type="submit"
                form="searchForm"
                key={e.globalIdLocal}
                onClick={() => {
                  setValue(e.local);
                }}
              >
                {e.local}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
