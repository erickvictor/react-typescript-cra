import { useEffect, useState } from 'react'
import { Service } from '../types/Service'
import { Genre } from '../types/Genre'

export interface Genres {
  genres: Genre[]
}

const useGenresService = () => {
  const [result, setResult] = useState<Service<Genres>>({
    status: 'loading'
  })

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=3a7aa0e931b0bf00aada428be36e92e7&language=pt-BR'
    )
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }))
  }, [])

  return result
}

export default useGenresService
