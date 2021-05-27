import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./components/0.search/Search";
import Detail from "./components/2.info/Detail";
import Cards from "./components/1.cards/Cards";
import useFetch from "./components/utils/useFetch";
import { MyContext } from "./components/utils/utils";

function App() {
  const { previsao } = useFetch(null);
  const [bigCard, setBigCard] = useState({});
  const [localId, setLocalId] = useState("");
  useEffect(() => {
    setBigCard({});
  }, [previsao]);
  return (
    <div className="app">
      <MyContext.Provider value={{ bigCard, setBigCard, localId, setLocalId }}>
        <Search />
        <Cards />
        <Detail />
      </MyContext.Provider>
    </div>
  );
}

export default App;
