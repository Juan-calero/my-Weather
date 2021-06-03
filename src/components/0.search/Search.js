import React, { useState, useContext } from "react";
import { easySearch, MyContext } from "../utils/utils";
import useFetch from "../utils/useFetch";
import Suggestions from "./Suggestions";
import SearchForm from "./SearchForm";

export default function Search() {
  const { setLocal } = useContext(MyContext);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { previsao } = useFetch(
    "http://api.ipma.pt/open-data/distrits-islands.json"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    previsao.map(({ globalIdLocal, local }) => {
      if (easySearch(local, value)) {
        setLocal({
          id: `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`,
          name: local,
        });
        document.title = `My Meteo App | ${local}`;
        setValue("");
        setSuggestions([]);
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
      <SearchForm
        value={value}
        handleSubmit={handleSubmit}
        setValue={setValue}
        handleSuggestions={handleSuggestions}
      />
      {suggestions.length !== 0 && (
        <Suggestions setValue={setValue} suggestions={suggestions} />
      )}
    </section>
  );
}
