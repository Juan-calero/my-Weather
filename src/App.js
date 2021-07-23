import "./App.scss"
import React, { useState, Suspense } from "react"
import Search from "./components/0.search/Search"
import Cards from "./components/1.cards/Cards"
import { MyContext } from "./components/utils/utils"
import useViewport from "./components/utils/useViewport.js"
import TurnDevice from "./img/sValK.webp"
const Detail = React.lazy(() => import("./components/2.info/Detail"))

function App() {
  const [bigCard, setBigCard] = useState({})
  const [local, setLocal] = useState({})
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
      <Cards />
      {width > 1023 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Detail />
        </Suspense>
      )}
    </MyContext.Provider>
  )
}

export default App
