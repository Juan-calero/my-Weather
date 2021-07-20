import React, { useContext } from "react"
import { detail__content } from "./details.module.scss"
import { frases, MyContext } from "../utils/utils"

function DetailContent() {
  const {
    bigCard,
    local: { name },
  } = useContext(MyContext)
  const { tMin, tMax, precipitaProb, predWindDir } = bigCard

  return (
    <div className={detail__content}>
      <h5>{name}</h5>
      <ul>
        <li>
          <p>Vento</p>
          <h5>{predWindDir}</h5>
        </li>
        <li>
          <p>Chuva</p>
          <h5>{Math.round(precipitaProb) + "%"}</h5>
        </li>
        <li>
          <p>Máx</p>
          <h5>{Math.round(tMax) + "°C"}</h5>
        </li>
        <li>
          <p>Min</p>
          <h5>{Math.round(tMin) + "°C"}</h5>
        </li>
      </ul>
      <p>{frases[0]}</p>
    </div>
  )
}

export default DetailContent

/////////THIS ONE NEEDS REFACTORING
