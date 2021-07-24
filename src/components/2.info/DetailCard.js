import React, { useContext, useState, useEffect } from "react"
import { card, path, icon, changed, notChanged } from "./details.module.scss"
import weatherTypes from "../utils/weatherTypes"
import arrWeatherIcons from "../utils/arrWeatherIcons"
import { MyContext, cardDynamicBg, dayOfTheWeek } from "../utils/utils"

function DetailCard() {
  const { bigCard } = useContext(MyContext)
  const [isChanged, setIsChanged] = useState(false)
  const { tMax, idWeatherType, index } = bigCard

  useEffect(() => {
    setIsChanged(true)
    setTimeout(() => {
      setIsChanged(false)
    }, 200)
  }, [bigCard])

  return (
    <div
      className={`${card} ${cardDynamicBg(tMax)} ${
        isChanged ? changed : notChanged
      }`}>
      <p>{dayOfTheWeek(index)}</p>
      {idWeatherType && (
        <svg
          className={icon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox={arrWeatherIcons[idWeatherType].viewBox}>
          <path className={path} d={arrWeatherIcons[idWeatherType].d} />
        </svg>
      )}
      <p>{weatherTypes[idWeatherType]}</p>
    </div>
  )
}

export default DetailCard
