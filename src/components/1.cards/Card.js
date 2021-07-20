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
        <h2>{dayOfTheWeek(index)}</h2>
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
        <h4>{Math.round(tMax) + "°C"}</h4>
      </div>
      <div className={cardBack}>
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
    </div>
  )
}

export default Card
