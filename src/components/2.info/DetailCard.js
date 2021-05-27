import React, { useContext, useState, useEffect } from "react";
import weatherTypes from "../utils/weatherTypes";
import arrWeatherIcons from "../utils/arrWeatherIcons";
import { arr, MyContext, cardDynamicBg } from "../utils/utils";

function DetailCard() {
  const { bigCard } = useContext(MyContext);
  const [isChanged, setIsChanged] = useState(true);
  const { tMax, type, index } = bigCard;
  const now = new Date();
  let i = now.getDay();
  useEffect(() => {
    setIsChanged(true);
    setTimeout(() => {
      setIsChanged(false);
    }, 200);
  }, [bigCard]);
  const handleStyle = isChanged
    ? {
        opacity: "0",
        filter: "brightness(400%)",
        transform: "scale(.1)",
      }
    : {
        opacity: "1",
        filter: "none",
        transform: "scale(1)",
      };
  return (
    <div style={handleStyle} className={"detail__card " + cardDynamicBg(tMax)}>
      <h2>{now.getDay() === i + index ? "Hoje" : arr[(i + index) % 7]}</h2>
      <svg
        className="detail__card--icon"
        key={arrWeatherIcons.id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={type && arrWeatherIcons[type].viewBox}
      >
        <linearGradient id="gradient">
          <stop className="main-stop" offset="0%" />
          <stop className="alt-stop" offset="100%" />
        </linearGradient>
        <path
          className="detail__card--path"
          d={type && arrWeatherIcons[type].d}
        />
      </svg>
      <h3>{weatherTypes[type]}</h3>
    </div>
  );
}

export default DetailCard;
