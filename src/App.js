import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./components/0.search/Search";
import Info from "./components/2.info/Info";
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
        <Info />
      </MyContext.Provider>
    </div>
  );
}

export default App;
