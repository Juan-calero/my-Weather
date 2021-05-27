import React, { useContext } from "react";
import { MyContext } from "../utils/utils";

function DetailContent() {
  const { bigCard } = useContext(MyContext);
  const { tMin, tMax, precipitaProb, predWindDir } = bigCard;
  return (
    <div className="detail__content">
      <h5>LOCALIDADE AQUI</h5>
      <div className="detail__content--grid">
        <div className="detail__content--item wind">
          <p>Vento</p>
          <h5>{predWindDir && predWindDir}</h5>
        </div>
        <div className="detail__content--item rain">
          <p>Chuva</p>
          <h5>{precipitaProb && Math.round(precipitaProb) + "%"}</h5>
        </div>
        <div className="detail__content--item max">
          <p>Máx</p>
          <h5>{tMax && Math.round(tMax) + "°C"}</h5>
        </div>
        <div className="detail__content--item min">
          <p>Min</p>
          <h5>{tMin && Math.round(tMin) + "°C"}</h5>
        </div>
      </div>
      <p>
        Belo dia de Praia.
        <br />
        Não te esqueças do protetor solar!
      </p>
    </div>
  );
}

export default DetailContent;
