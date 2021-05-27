import React from "react";

export const MyContext = React.createContext();

export const urlSearch = "http://api.ipma.pt/open-data/distrits-islands.json";

export const arr = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

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
    : "freeze";
}
