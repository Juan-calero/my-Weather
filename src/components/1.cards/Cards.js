import React, { useContext, useState } from "react"
import { carousel, inner, blankCard } from "./cards.module.scss"
import useFetch from "../utils/useFetch"
import { MyContext } from "../utils/utils"
import Card from "./Card"
import { useSwipeable } from "react-swipeable"

function Cards() {
  const { local } = useContext(MyContext)
  const { previsao } = useFetch(local.id)
  const [cardDisplay, setCardDisplay] = useState(0)
  console.log(cardDisplay)

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
        style={{
          transform: `translateX(calc(-${cardDisplay * 60}vw - ${
            cardDisplay * 10
          }vw))`,
        }}>
        {local.id ? (
          previsao.map((cardInfo, index) => {
            return <Card {...cardInfo} key={index} index={index} />
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
