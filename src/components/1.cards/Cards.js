import React, { useContext, useState, Suspense } from "react"
import { carousel, inner, blankCard } from "./cards.module.scss"
import useViewport from "../utils/useViewport"
import { useSwipeable } from "react-swipeable"
import useFetch from "../utils/useFetch"
import { MyContext } from "../utils/utils"
import Card from "./Card"

function Cards() {
  const { local } = useContext(MyContext)
  const { previsao } = useFetch(local.id)
  const { width } = useViewport()
  const [cardDisplay, setCardDisplay] = useState(0)

  const configSwipe = {
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => setCardDisplay(cardDisplay < 4 ? cardDisplay + 1 : 4),
    onSwipedRight: () =>
      setCardDisplay(cardDisplay > 0 ? (cardDisplay - 1) % 4 : 0),
    ...configSwipe,
  })

  return (
    <section {...handlers} className={carousel}>
      {width < 1024 && local.id && <h2>{local.name}</h2>}
      <div
        className={inner}
        style={
          width < 1024
            ? { transform: `translateX(calc(-${cardDisplay * 70}vw))` }
            : {}
        }>
        {local.id ? (
          previsao.map((cardInfo, index) => {
            return <Card key={index} {...cardInfo} index={index} />
          })
        ) : (
          <>
            <div className={blankCard}></div>
            <div className={blankCard}></div>
            <div className={blankCard}></div>
            <div className={blankCard}></div>
            <div className={blankCard}></div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cards
