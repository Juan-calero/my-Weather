import "./App.scss"
import React, { useState, Suspense } from "react"
import Search from "./components/0.search/Search"
import { MyContext } from "./components/utils/utils"
import useViewport from "./components/utils/useViewport.js"
import TurnDevice from "./img/sValK.webp"
const Detail = React.lazy(() => import("./components/2.info/Detail"))
const PhoneCards = React.lazy(() => import("./components/PhoneCard/PhoneCards"))
const Cards = React.lazy(() => import("./components/1.cards/Cards"))

function App() {
  const [bigCard, setBigCard] = useState({})
  const [local, setLocal] = useState({
    id: `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json`,
    name: "Lisboa",
  })
  const { width } = useViewport()

  return (
    <MyContext.Provider
      value={{
        bigCard,
        setBigCard,
        local,
        setLocal,
      }}>
      <img
        loading='lazy'
        className='turnDevice'
        src={TurnDevice}
        alt='Please Turn Your Device'
      />
      <Search />
      {width > 1023 ? (
        <Suspense fallback={<div></div>}>
          <Cards />
          <Detail />
        </Suspense>
      ) : (
        <Suspense fallback={<div></div>}>
          <PhoneCards />
        </Suspense>
      )}
    </MyContext.Provider>
  )
}

export default App
