import React, { useContext } from "react";
import { MyContext } from "../utils/utils";

function InfoItems() {
  const { bigCard } = useContext(MyContext);
  const { tMin, tMax, precipitaProb, predWindDir, classWindSpeed } = bigCard;
  return (
    <div className="detail__content">
      <div className="detail__content--item wind">
        <p className="detail__content--title">Vento</p>
        <h5 className="detail__content--value">
          {predWindDir && predWindDir + " " + classWindSpeed}
        </h5>
      </div>
      <div className="detail__content--item rain">
        <p className="detail__content--title">Chuva</p>
        <h5 className="detail__content--value">
          {precipitaProb && precipitaProb + "%"}
        </h5>
      </div>
      <div className="detail__content--item max">
        <p className="detail__content--title">Máx</p>
        <h5 className="detail__content--value">{tMax && tMax + "°C"}</h5>
      </div>
      <div className="detail__content--divider"></div>
      <div className="detail__content--item min">
        <p className="detail__content--title">Min</p>
        <h5 className="detail__content--value">{tMin && tMin + "°C"}</h5>
      </div>
      <p className="detail__content--paragraph">
        Belo dia de Praia.
        <br />
        Não te esqueças do protetor solar!
      </p>
    </div>
  );
}

export default InfoItems;
