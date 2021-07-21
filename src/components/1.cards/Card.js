import React, { useContext, useEffect, useState } from "react"
import {
  cardPath,
  cards__item,
  icon,
  cardFront,
  cardBack,
} from "./cards.module.scss"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { frases, MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils"

function Card({
  tMax,
  tMin,
  idWeatherType,
  index,
  precipitaProb,
  predWindDir,
}) {
  const {
    bigCard,
    setBigCard,
    local: { name },
  } = useContext(MyContext)
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    bigCard.index === index ? setIsSelected(true) : setIsSelected(false)
  }, [bigCard])

  const handleClick = () => {
    setBigCard({
      tMax,
      tMin,
      idWeatherType,
      index,
      precipitaProb,
      predWindDir,
    })
  }
  return (
    <div
      className={`${cards__item}`}
      tabIndex='0'
      style={
        isSelected
          ? {
              filter: "brightness(400%)",
              transform: "scale(0)",
              transition: "transform 0.2s ease",
            }
          : {
              animationName: "popup",
              animationDuration: "2.5s",
            }
      }
      onClick={handleClick}>
      <div className={cardFront}>
        <p>{dayOfTheWeek(index)}</p>
        {idWeatherType && (
          <svg
            className={icon}
            key={arrWeatherIcons.id}
            xmlns='http://www.w3.org/2000/svg'
            viewBox={arrWeatherIcons[idWeatherType].viewBox}>
            <linearGradient className={cardDynamicBg(tMax)} id='gradient'>
              <stop className='mainStop' offset='0%' />
              <stop className='altStop' offset='100%' />
            </linearGradient>
            <path className={cardPath} d={arrWeatherIcons[idWeatherType].d} />
          </svg>
        )}
        <p>{Math.round(tMax) + "°C"}</p>
      </div>
      <div className={cardBack}>
        <p>{name}</p>
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
        <p>{frases[0]}</p>
      </div>
    </div>
  )
}

export default Card
