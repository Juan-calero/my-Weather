import "./App.scss"
import "./variables.scss"
import React, { useState } from "react"
import Search from "./components/0.search/Search"
import Detail from "./components/2.info/Detail"
import Cards from "./components/1.cards/Cards"
import { MyContext } from "./components/utils/utils"
import useViewport from "./components/utils/useViewport.js"

function App() {
  const [bigCard, setBigCard] = useState({})
  const [local, setLocal] = useState({})
  const { width } = useViewport()

  return (
    <>
      <MyContext.Provider
        value={{
          bigCard,
          setBigCard,
          local,
          setLocal,
        }}>
        <Search />
        <Cards />
        {width > 1023 && <Detail />}
      </MyContext.Provider>
    </>
  )
}

export default App
