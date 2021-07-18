import React from "react"
import { formBtn, search__form } from "./search.module.scss"

function SearchForm({ value, handleSubmit, setValue, handleSuggestions }) {
  return (
    <form id='searchForm' className={search__form} onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Distrito/Ilha'
        ariaLabel='Search'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          handleSuggestions()
        }}
        name=''
        id='search'
      />
      <button className={formBtn} type='submit'>
        Click
      </button>
    </form>
  )
}

export default SearchForm
