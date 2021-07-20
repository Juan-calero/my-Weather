import React, { useContext } from "react"
import { SearchContext } from "../utils/utils"
import { formBtn, search__form } from "./search.module.scss"

function SearchForm() {
  const { value, handleSubmit, setValue, handleSuggestions } =
    useContext(SearchContext)

  return (
    <form id='searchForm' className={search__form} onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Distrito/Ilha'
        aria-label='Search'
        value={value}
        onChange={({ target }) => {
          setValue(target.value)
          handleSuggestions()
        }}
      />
      <button className={formBtn}>Click</button>
    </form>
  )
}

export default SearchForm
