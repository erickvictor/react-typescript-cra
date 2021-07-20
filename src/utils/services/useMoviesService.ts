import { useEffect, useState } from 'react'
import { Service } from '../types/Service'
import { Movie } from '../types/Movie'

export interface Movies {
  results: Movie[]
}

const useMoviesService = () => {
  const [result, setResult] = useState<Service<Movies>>({
    status: 'loading'
  })

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=3a7aa0e931b0bf00aada428be36e92e7&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    )
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }))
  }, [])

  return result
}

export default useMoviesService
