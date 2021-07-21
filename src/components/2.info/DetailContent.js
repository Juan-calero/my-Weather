import React, { useContext } from "react"
import { detail__content } from "./details.module.scss"
import { MyContext } from "../utils/utils"

function DetailContent() {
  const {
    bigCard,
    local: { name },
  } = useContext(MyContext)
  const { tMin, tMax, precipitaProb, predWindDir } = bigCard

  return (
    <div className={detail__content}>
      <h2>{name}</h2>
      <ul>
        <li>
          <h3>Vento</h3>
          <p>{predWindDir}</p>
        </li>
        <li>
          <h3>Chuva</h3>
          <p>{Math.round(precipitaProb) + "%"}</p>
        </li>
        <li>
          <h3>Máx</h3>
          <p>{Math.round(tMax) + "°C"}</p>
        </li>
        <li>
          <h3>Min</h3>
          <p>{Math.round(tMin) + "°C"}</p>
        </li>
      </ul>
    </div>
  )
}

export default DetailContent

/////////THIS ONE NEEDS REFACTORING
