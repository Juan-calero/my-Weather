import React from "react"
import {
  cardPath,
  cards__item,
  icon,
  cardFront,
  cardBack,
} from "../1.cards/cards.module.scss"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { cardDynamicBg, dayOfTheWeek } from "../utils/utils"

function PhoneCard(cardInfo) {
  const { tMax, tMin, idWeatherType, index, precipitaProb, predWindDir } =
    cardInfo
  const { viewBox, d } = arrWeatherIcons[idWeatherType]

  return (
    <div className={`${cards__item}`} tabIndex='0'>
      <div className={cardFront}>
        <p>{dayOfTheWeek(index)}</p>
        {idWeatherType && (
          <svg
            className={icon}
            xmlns='http://www.w3.org/2000/svg'
            viewBox={viewBox}>
            <linearGradient className={cardDynamicBg(tMax)} id='gradient'>
              <stop className='mainStop' offset='0%' />
              <stop className='altStop' offset='100%' />
            </linearGradient>
            <path className={cardPath} d={d} />
          </svg>
        )}
        <p>{Math.round(tMax) + "°C"}</p>
      </div>
      <div className={cardBack}>
        <p>{dayOfTheWeek(index)}</p>
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
    </div>
  )
}

export default PhoneCard
