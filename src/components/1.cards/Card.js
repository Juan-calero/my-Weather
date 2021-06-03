import React, { useContext, useEffect, useState } from "react";
import arrWeatherIcons from "../utils/arrWeatherIcons";
import { MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils";

function Card({ tMax, tMin, type, index, rainProb, predWindDir }) {
  const { bigCard, setBigCard } = useContext(MyContext);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    bigCard.index === index ? setIsSelected(true) : setIsSelected(false);
  }, [bigCard]);

  const handleClick = () => {
    setBigCard({
      tMax,
      tMin,
      type,
      index,
      rainProb,
      predWindDir,
    });
  };
  return (
    <div
      className={"cards__item " + cardDynamicBg(tMax)}
      tabIndex="0"
      style={
        isSelected
          ? {
              filter: "brightness(400%)",
              transform: "scale(0)",
              transition: "transform 0.2s ease",
            }
          : {
              animationName: "popup",
              animationDuration: "2.5s",
            }
      }
      onClick={handleClick}
    >
      <h2>{dayOfTheWeek(index)}</h2>
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
