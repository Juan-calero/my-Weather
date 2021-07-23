import React, { useContext, useState, Suspense } from "react"
import { carousel, inner, blankCard } from "./cards.module.scss"
import useViewport from "../utils/useViewport"
import { useSwipeable } from "react-swipeable"
import useFetch from "../utils/useFetch"
import { MyContext } from "../utils/utils"
const Card = React.lazy(() => import("./Card"))

function Cards() {
  const { local } = useContext(MyContext)
  const { previsao } = useFetch(local.id)
  const { width } = useViewport()
  const [cardDisplay, setCardDisplay] = useState(0)

  const configSwipe = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => setCardDisplay(cardDisplay < 4 ? cardDisplay + 1 : 4),
    onSwipedRight: () =>
      setCardDisplay(cardDisplay > 0 ? (cardDisplay - 1) % 4 : 0),
    ...configSwipe,
  })

  return (
    <section {...handlers} className={carousel}>
      <div
        className={inner}
        style={
          width < 1024
            ? { transform: `translateX(calc(-${cardDisplay * 70}vw))` }
            : {}
        }>
        {local.id ? (
          previsao.map((cardInfo, index) => {
            return (
              <Suspense
                key={index}
                fallback={<div className={blankCard}></div>}>
                <Card {...cardInfo} index={index} />
              </Suspense>
            )
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
