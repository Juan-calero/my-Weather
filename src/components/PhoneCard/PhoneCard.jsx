import React from "react"
import {
  cardPath,
  cardItem,
  icon,
  cardFront,
  cardBack,
} from "../1.cards/cards.module.scss"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { cardDynamicBg, dayOfTheWeek } from "../utils/utils"
import weatherTypes from "../utils/weatherTypes"

function PhoneCard(cardInfo) {
  const { tMax, tMin, idWeatherType, index, precipitaProb, predWindDir } =
    cardInfo
  const { viewBox, d } = arrWeatherIcons[idWeatherType]

  return (
    <div className={cardItem} tabIndex='0'>
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
        <p>{weatherTypes[idWeatherType]}</p>
      </div>
    </div>
  )
}

export default PhoneCard
