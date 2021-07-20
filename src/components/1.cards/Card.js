import React, { useContext, useEffect, useState } from "react"
import { cardPath, cards__item, icon } from "./cards.module.scss"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils"

function Card({
  tMax,
  tMin,
  idWeatherType,
  index,
  precipitaProb,
  predWindDir,
}) {
  const { bigCard, setBigCard } = useContext(MyContext)
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
  )
}

export default Card
