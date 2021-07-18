import React, { useContext, useState, useEffect } from "react"
import { detail__card, path, icon } from "./details.module.scss"
import weatherTypes from "../utils/weatherTypes"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils"

function DetailCard() {
  const { bigCard } = useContext(MyContext)
  const [isChanged, setIsChanged] = useState(false)
  const { tMax, type, index } = bigCard

  useEffect(() => {
    setIsChanged(true)
    setTimeout(() => {
      setIsChanged(false)
    }, 200)
  }, [bigCard])

  const handleStyle = isChanged
    ? {
        opacity: "0",
        filter: "brightness(400%)",
        transform: "scale(.1)",
      }
    : {
        opacity: "1",
        filter: "none",
        transform: "scale(1)",
      }

  return (
    <div
      style={handleStyle}
      className={`${detail__card} ${cardDynamicBg(tMax)}`}>
      <h2>{dayOfTheWeek(index)}</h2>
      <svg
        className={icon}
        key={arrWeatherIcons.id}
        xmlns='http://www.w3.org/2000/svg'
        viewBox={type && arrWeatherIcons[type].viewBox}>
        <linearGradient id='gradient'>
          <stop className='main-stop' offset='0%' />
          <stop className='alt-stop' offset='100%' />
        </linearGradient>
        <path className={path} d={type && arrWeatherIcons[type].d} />
      </svg>
      <h3>{weatherTypes[type]}</h3>
    </div>
  )
}

export default DetailCard
