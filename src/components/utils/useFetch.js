import { useState, useEffect } from "react"

function useFetch(url) {
  const [fetched, setFetched] = useState([])
  const getfetched = async () => {
    if (url) {
      const response = await fetch(url)
      const fetched = await response.json()
      setFetched(fetched.data)
    }
  }
  useEffect(() => {
    getfetched()
  }, [url])
  return { fetched }
}

export default useFetch
