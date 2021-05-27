import React, { useContext, useState, useEffect } from "react";
import weatherTypes from "../utils/weatherTypes";
import arrWeatherIcons from "../utils/arrWeatherIcons";
import { arr, MyContext, cardDynamicBg } from "../utils/utils";

function BigCard() {
  const { bigCard } = useContext(MyContext);
  const [isChanged, setIsChanged] = useState(true);
  const { tMax, type, index } = bigCard;
  const now = new Date();
  let i = now.getDay() - 1;
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
    <div style={handleStyle} className={"bigcard " + cardDynamicBg(tMax)}>
      <h2 className="bigcard__dayOfWeek">
        {now.getDay() === i + index ? "Hoje" : arr[(i + index) % 7]}
      </h2>
      <svg
        className="bigcard__icon"
        key={arrWeatherIcons.id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={type && arrWeatherIcons[type].viewBox}
      >
        <linearGradient id="gradient">
          <stop className="main-stop" offset="0%" />
          <stop className="alt-stop" offset="100%" />
        </linearGradient>
        <path
          className="bigcard__icon--path"
          d={type && arrWeatherIcons[type].d}
        />
      </svg>
      <h3 className="bigcard__weatherType">{weatherTypes[type]}</h3>
    </div>
  );
}

export default BigCard;
