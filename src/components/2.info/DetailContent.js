import React, { useContext } from "react"
import { content } from "./details.module.scss"
import { MyContext } from "../utils/utils"

function DetailContent() {
  const {
    bigCard,
    local: { name },
  } = useContext(MyContext)
  const { tMin, tMax, precipitaProb, predWindDir } = bigCard

  return (
    <div className={content}>
      <h2>{name}</h2>
      <ul>
        <li>
          <h3>Wind</h3>
          <p>{predWindDir}</p>
        </li>
        <li>
          <h3>Rain</h3>
          <p>{Math.round(precipitaProb) + "%"}</p>
        </li>
        <li>
          <h3>Min</h3>
          <p>{Math.round(tMin) + "°C"}</p>
        </li>
        <li>
          <h3>Max</h3>
          <p>{Math.round(tMax) + "°C"}</p>
        </li>
      </ul>
    </div>
  )
}

export default DetailContent
