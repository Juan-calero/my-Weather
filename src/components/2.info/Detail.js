import React, { Suspense, useContext } from "react"
import { detail, noContent } from "./details.module.scss"
import { MyContext } from "../utils/utils"
const DetailCard = React.lazy(() => import("./DetailCard"))
const DetailContent = React.lazy(() => import("./DetailContent"))

function Detail() {
  const { bigCard } = useContext(MyContext)
  return (
    <>
      {bigCard.index !== undefined ? (
        <section className={detail}>
          <Suspense fallback={<div></div>}>
            <DetailCard />
            <DetailContent />
          </Suspense>
        </section>
      ) : (
        <section className={noContent} />
      )}
    </>
  )
}

export default Detail
