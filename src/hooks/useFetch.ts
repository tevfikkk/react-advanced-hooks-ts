import { useState, useEffect } from 'react'

type data = {
  id: number
  title: string
  body: string
}

const useFetch = (url: string, options: any) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<{ message: string }>()
  const [data, setData] = useState<data[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const data = await response.json()

        setData(data)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export default useFetch
