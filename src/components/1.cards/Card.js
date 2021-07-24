import React, { useContext, useEffect, useState } from "react"
import {
  cardPath,
  cardItem,
  icon,
  cardFront,
  open,
  close,
} from "./cards.module.scss"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils"

function Card(cardInfo) {
  const {
    bigCard: { index: i },
    setBigCard,
  } = useContext(MyContext)
  const [isSelected, setIsSelected] = useState(false)
  const { tMax, idWeatherType, index } = cardInfo
  const { viewBox, d } = arrWeatherIcons[idWeatherType]

  useEffect(() => {
    setIsSelected(i === index)
  }, [i])

  useEffect(() => {
    if (!index) {
      setBigCard(cardInfo)
    }
  }, [])

  const handleClick = () => {
    setBigCard(cardInfo)
  }
  return (
    <button
      className={`${cardItem} ${isSelected ? close : open}`}
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
            {d.map((element, index) => {
              return <path key={index} className={cardPath} d={element} />
            })}
          </svg>
        )}
        <p>{Math.round(tMax) + "°C"}</p>
      </div>
    </button>
  )
}

export default Card
