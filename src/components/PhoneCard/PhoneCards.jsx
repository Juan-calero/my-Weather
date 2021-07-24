import React, { useContext, useState } from "react"
import { carousel, inner } from "../1.cards/cards.module.scss"
import { useSwipeable } from "react-swipeable"
import useFetch from "../utils/useFetch"
import { MyContext } from "../utils/utils"
import PhoneCard from "./PhoneCard"

function PhoneCards() {
  const { local } = useContext(MyContext)
  const { previsao } = useFetch(local.id)
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
      {local.id && <h2>{local.name}</h2>}
      <div
        className={inner}
        style={{ transform: `translateX(calc(-${cardDisplay * 70}vw))` }}>
        {local.id &&
          previsao.map((cardInfo, index) => {
            return <PhoneCard key={index} {...cardInfo} index={index} />
          })}
      </div>
    </section>
  )
}

export default PhoneCards
