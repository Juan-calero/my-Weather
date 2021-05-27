import React, { useState, useContext, useEffect } from "react";
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
      if (distrito.local === value) {
        setLocalId(
          `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${distrito.globalIdLocal}.json`
        );
        setValue("");
        console.log(distrito.globalIdLocal);
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
    <div className="searchComponent">
      <form id="searchForm" className="search" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="search"
            placeholder="Ex: Lisboa"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              handleSuggestions();
            }}
            name=""
            id=""
          />
        </label>
        <button className="search--btn" type="submit">
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
    </div>
  );
}

/////////////////////////
//JÁ CONSEGUI FILTRAR AS SUGESTÕES, SÓ FALTA
//CONSEGUIR MAPPEAR? CADA E RETORNAR A LISTA DE SUGGESTÕES
//////////////////////////////////////////
