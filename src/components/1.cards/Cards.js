import React, { useContext } from "react"
import { carousel, inner, cards__item } from "./cards.module.scss"
import useFetch from "../utils/useFetch"
import { MyContext } from "../utils/utils"
import Card from "./Card"

function Cards() {
  const { local } = useContext(MyContext)
  const { previsao } = useFetch(local.id)
  return (
    <section className={carousel}>
      <div className={inner}>
        {local.id ? (
          previsao.map((cardInfo, index) => {
            return <Card {...cardInfo} key={index} index={index} />
          })
        ) : (
          <>
            <div className={`${cards__item}`}></div>
            <div className={`${cards__item}`}></div>
            <div className={`${cards__item}`}></div>
            <div className={`${cards__item}`}></div>
            <div className={`${cards__item}`}></div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cards
