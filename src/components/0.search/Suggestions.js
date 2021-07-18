import React from "react"
import { search__suggestions } from "./search.module.scss"

function Suggestions({ suggestions, setValue }) {
  return (
    <div className={search__suggestions}>
      {suggestions.map((e) => {
        return (
          <button
            tabIndex='0'
            type='submit'
            form='searchForm'
            key={e.globalIdLocal}
            onClick={() => {
              setValue(e.local)
            }}>
            {e.local}
          </button>
        )
      })}
    </div>
  )
}

export default Suggestions
