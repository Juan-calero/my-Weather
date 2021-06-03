import React, { useContext } from "react";
import { frases, MyContext } from "../utils/utils";

function DetailContent() {
  const { bigCard, local } = useContext(MyContext);
  const { tMin, tMax, rainProb, predWindDir } = bigCard;
  return (
    <div className="detail__content">
      <h5>{local.name}</h5>
      <div className="detail__content--grid">
        <div className="detail__content--item">
          <p>Vento</p>
          <h5>{predWindDir}</h5>
        </div>
        <div className="detail__content--item">
          <p>Chuva</p>
          <h5>{Math.round(rainProb) + "%"}</h5>
        </div>
        <div className="detail__content--item">
          <p>Máx</p>
          <h5>{Math.round(tMax) + "°C"}</h5>
        </div>
        <div className="detail__content--item">
          <p>Min</p>
          <h5>{Math.round(tMin) + "°C"}</h5>
        </div>
      </div>
      <p>{frases[0]}</p>
    </div>
  );
}

export default DetailContent;

/////////THIS ONE NEEDS REFACTORING
