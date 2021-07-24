import React from "react"
import { detail } from "./details.module.scss"
import DetailContent from "./DetailContent"
import DetailCard from "./DetailCard"

function Detail() {
  return (
    <section className={detail}>
      <DetailCard />
      <DetailContent />
    </section>
  )
}

export default Detail
