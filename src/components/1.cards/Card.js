import React, { useContext, useEffect, useState } from "react";
import arrWeatherIcons from "../utils/arrWeatherIcons";
import { arr, MyContext, cardDynamicBg } from "../utils/utils";

function Card({
  tMax,
  tMin,
  type,
  index,
  precipitaProb,
  predWindDir,
  classWindSpeed,
}) {
  const { bigCard, setBigCard } = useContext(MyContext);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (bigCard.index === index) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [bigCard]);
  const handleClick = () => {
    setBigCard({
      tMax: tMax,
      tMin: tMin,
      type: type,
      index: index,
      precipitaProb: precipitaProb,
      predWindDir: predWindDir,
      classWindSpeed: classWindSpeed,
    });
  };
  const now = new Date();
  let i = now.getDay();
  return (
    <div
      className={"cards__item " + cardDynamicBg(tMax)}
      tabIndex="0"
      style={
        isSelected
          ? {
              background: "#727272",
              filter: "brightness(300%)",
              width: "20rem",
              height: "20rem",
              transform: "scale(.1)",
              cursor: "auto",
              borderRadius: "100%",
              transition: "transform 0.2s ease",
            }
          : {
              animationName: "popup",
              animationDuration: "2.5s",
            }
      }
      onClick={handleClick}
    >
      <h2>{now.getDay() === i + index ? "Hoje" : arr[(i + index) % 7]}</h2>
      <svg
        className="cards__item--icon"
        key={arrWeatherIcons.id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={type && arrWeatherIcons[type].viewBox}
      >
        <linearGradient id="gradient">
          <stop className="main-stop" offset="0%" />
          <stop className="alt-stop" offset="100%" />
        </linearGradient>
        <path
          className="cards__item--path"
          d={type && arrWeatherIcons[type].d}
        />
      </svg>
      <h4>{Math.round(tMax) + "°C"}</h4>
    </div>
  );
}

export default Card;
