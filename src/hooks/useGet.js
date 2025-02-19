import { useState, useEffect } from 'react'

const useGet = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()
      setData(result)
      setIsSuccess(true)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setIsSuccess(false)
    setError(null)
    fetchData()
  }, [url])

  return { data, isLoading, isSuccess, error }
}

export default useGet
