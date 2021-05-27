import React, { useContext } from "react";
import useFetch from "../utils/useFetch";
import { MyContext } from "../utils/utils";
import Card from "./Card";

function Cards() {
  const { localId } = useContext(MyContext);
  const { previsao } = useFetch(localId);
  return (
    <section className="cards">
      {previsao.map((e, index) => {
        return (
          <Card
            key={index}
            tMin={e.tMin}
            tMax={e.tMax}
            type={e.idWeatherType}
            index={index}
            precipitaProb={e.precipitaProb}
            predWindDir={e.predWindDir}
            classWindSpeed={e.classWindSpeed}
          />
        );
      })}
    </section>
  );
}

export default Cards;
