import React from "react"

export const MyContext = React.createContext()
export const SearchContext = React.createContext()

export function cardDynamicBg(tMax) {
  return tMax > 30
    ? "hot"
    : tMax > 25
    ? "warmer"
    : tMax > 20
    ? "warm"
    : tMax > 15
    ? "cooler"
    : tMax > 10
    ? "cool"
    : tMax > 5
    ? "cold"
    : tMax > 0
    ? "colder"
    : "freeze"
}

export function dayOfTheWeek(index) {
  const arr = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
  const now = new Date()
  let i = now.getDay()
  return now.getDay() === i + index ? "Hoje" : arr[(i + index) % 7]
}

export function easySearch(local, value) {
  return (
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") ===
    local
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  )
}
