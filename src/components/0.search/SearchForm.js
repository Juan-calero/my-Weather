import React, { useContext } from "react"
import { SearchContext } from "../utils/utils"
import {
  formBtn,
  search__form,
  search__suggestions,
  search,
} from "./search.module.scss"

function SearchForm() {
  const { value, handleSubmit, setValue, suggestions, handleSuggestions } =
    useContext(SearchContext)

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

  return (
    <section className={search}>
      <h1>Pesquise Distrito/Ilha</h1>
      <form id='searchForm' className={search__form} onSubmit={handleSubmit}>
        <input
          placeholder='Distrito/Ilha'
          aria-label='Search'
          type='search'
          value={value}
          onChange={({ target }) => {
            setValue(target.value)
            handleSuggestions()
          }}
        />
        <button className={formBtn}>Click</button>
        {suggestions.length !== 0 && (
          <div className={search__suggestions}>{mapSuggestions}</div>
        )}
      </form>
    </section>
  )
}

export default SearchForm
