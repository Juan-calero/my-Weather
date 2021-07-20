import React, { useContext } from "react"
import { detail } from "./details.module.scss"
import { MyContext } from "../utils/utils"
import DetailCard from "./DetailCard"
import DetailContent from "./DetailContent"

function Detail() {
  const { bigCard } = useContext(MyContext)
  return (
    <>
      {bigCard.index === undefined ? (
        <section className={detail}></section>
      ) : (
        <section className={detail}>
          <DetailCard />
          <DetailContent />
        </section>
      )}
    </>
  )
}

export default Detail
