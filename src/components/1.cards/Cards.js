import React, { useContext } from "react"
import { cards } from "./cards.module.scss"
import useFetch from "../utils/useFetch"
import { MyContext } from "../utils/utils"
import Card from "./Card"

function Cards() {
  const { local } = useContext(MyContext)
  const { previsao } = useFetch(local.id)
  return (
    <section className={cards}>
      {previsao.map((e, index) => {
        return (
          <Card
            key={index}
            tMin={e.tMin}
            tMax={e.tMax}
            type={e.idWeatherType}
            index={index}
            rainProb={e.precipitaProb}
            predWindDir={e.predWindDir}
          />
        )
      })}
    </section>
  )
}

export default Cards
