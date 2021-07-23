import React, { useContext, Suspense } from "react"
import { SearchContext } from "../utils/utils"
import {
  formBtn,
  search__form,
  search__suggestions,
  search,
} from "./search.module.scss"
const Suggestions = React.lazy(() => import("./Suggestions"))

function SearchForm() {
  const { value, handleSubmit, setValue, suggestions, handleSuggestions } =
    useContext(SearchContext)

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
          <Suspense
            fallback={
              <div className={search__suggestions}>
                <button>Loading...</button>
              </div>
            }>
            <Suggestions setValue={setValue} suggestions={suggestions} />
          </Suspense>
        )}
      </form>
    </section>
  )
}

export default SearchForm
