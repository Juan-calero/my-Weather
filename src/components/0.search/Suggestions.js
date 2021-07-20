import React, { useContext } from "react"
import { SearchContext } from "../utils/utils"
import { search__suggestions } from "./search.module.scss"

function Suggestions() {
  const { setValue, suggestions } = useContext(SearchContext)
  return (
    <div className={search__suggestions}>
      {suggestions.map(({ globalIdLocal, local }) => {
        return (
          <button
            form='searchForm'
            key={globalIdLocal}
            onClick={() => setValue(local)}>
            {local}
          </button>
        )
      })}
    </div>
  )
}

export default Suggestions
