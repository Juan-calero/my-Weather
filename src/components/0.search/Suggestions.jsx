import React from "react"
import { search__suggestions } from "./search.module.scss"

function Suggestions({ setValue, suggestions }) {
  const mapSuggestions = suggestions.map(({ globalIdLocal, local }) => {
    return (
      <button
        form='searchForm'
        key={globalIdLocal}
        onClick={() => setValue(local)}>
        {local}
      </button>
    )
  })
  return <div className={search__suggestions}>{mapSuggestions}</div>
}

export default Suggestions
