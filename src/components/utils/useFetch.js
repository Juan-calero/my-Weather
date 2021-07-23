import { useState, useEffect } from "react"

function useFetch(url) {
  const [previsao, setPrevisao] = useState([])
  const getPrevisao = async () => {
    const response = await fetch(url)
    const previsao = await response.json()
    setPrevisao(previsao.data)
  }
  useEffect(() => {
    getPrevisao()
  }, [url])
  return { previsao }
}

export default useFetch
