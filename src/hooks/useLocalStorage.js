import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(key)
    if (!json) return initialValue
    try {
      return JSON.parse(json)
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      void 0
    }
  }, [key, value])

  return [value, setValue]
}
