import React, { useState, useContext } from "react"
import { easySearch, MyContext, SearchContext } from "../utils/utils"
import useFetch from "../utils/useFetch"
import SearchForm from "./SearchForm"

export default function Search() {
  const { fetched } = useFetch(
    "https://api.ipma.pt/open-data/distrits-islands.json"
  )
  const { setLocal } = useContext(MyContext)
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetched.forEach(({ globalIdLocal, local }) => {
      if (easySearch(local, value)) {
        setLocal({
          id: `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`,
          name: local,
        })
        document.title = `JC Weather App  | ${local}`
        setSuggestions([])
      }
    })
  }
  const handleSuggestions = (target) => {
    setSuggestions(
      target
        ? fetched.filter(({ local }) => {
            return local.toLowerCase().includes(target.toLowerCase())
          })
        : []
    )
  }

  return (
    <SearchContext.Provider
      value={{
        handleSuggestions,
        suggestions,
        setValue,
        handleSubmit,
        value,
      }}>
      <SearchForm />
    </SearchContext.Provider>
  )
}
