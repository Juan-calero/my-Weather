import React, { useContext, useEffect, useState } from "react"
import {
  cardPath,
  cards__item,
  icon,
  cardFront,
  cardBack,
  open,
  close,
} from "./cards.module.scss"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils"
import useViewport from "../utils/useViewport.js"

function Card(cardInfo) {
  const { width } = useViewport()
  const {
    bigCard: { index: i },
    setBigCard,
    local,
  } = useContext(MyContext)
  const [isSelected, setIsSelected] = useState(false)
  const { tMax, tMin, idWeatherType, index, precipitaProb, predWindDir } =
    cardInfo
  const { viewBox, d } = arrWeatherIcons[idWeatherType]

  useEffect(() => {
    setIsSelected(i === index)
  }, [i])

  const handleClick = () => {
    setBigCard(cardInfo)
  }
  return (
    <div
      className={`${cards__item} ${isSelected ? close : open}`}
      tabIndex='0'
      onClick={handleClick}>
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
      {width < 1024 && (
        <div className={cardBack}>
          <p>{local.name}</p>
          <ul>
            <li>
              <p>Vento</p>
              <p>{predWindDir}</p>
            </li>
            <li>
              <p>Chuva</p>
              <p>{Math.round(precipitaProb) + "%"}</p>
            </li>
            <li>
              <p>Máx</p>
              <p>{Math.round(tMax) + "°C"}</p>
            </li>
            <li>
              <p>Min</p>
              <p>{Math.round(tMin) + "°C"}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Card
