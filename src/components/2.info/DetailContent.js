import React, { useContext } from "react"
import { detail__content, detailGrid, detailItem } from "./details.module.scss"
import { frases, MyContext } from "../utils/utils"

function DetailContent() {
  const { bigCard, local } = useContext(MyContext)
  const { tMin, tMax, rainProb, predWindDir } = bigCard
  return (
    <div className={detail__content}>
      <h5>{local.name}</h5>
      <div className={detailGrid}>
        <div className={detailItem}>
          <p>Vento</p>
          <h5>{predWindDir}</h5>
        </div>
        <div className={detailItem}>
          <p>Chuva</p>
          <h5>{Math.round(rainProb) + "%"}</h5>
        </div>
        <div className={detailItem}>
          <p>Máx</p>
          <h5>{Math.round(tMax) + "°C"}</h5>
        </div>
        <div className={detailItem}>
          <p>Min</p>
          <h5>{Math.round(tMin) + "°C"}</h5>
        </div>
      </div>
      <p>{frases[0]}</p>
    </div>
  )
}

export default DetailContent

/////////THIS ONE NEEDS REFACTORING
