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
      {previsao.map((cardInfo, index) => {
        return <Card {...cardInfo} key={index} index={index} />
      })}
    </section>
  )
}

export default Cards
