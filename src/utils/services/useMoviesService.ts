import { useEffect, useState } from 'react'
import { Service } from '../types/Service'
import { Movie } from '../types/Movie'
import { Genre } from '../types/Genre'

export interface Movies {
  data: Movie[]
}

const useMoviesService = () => {
  const [result, setResult] = useState<Service<Movies>>({
    status: 'loading'
  })

  useEffect(() => {
    const fetchData = async () => {
      // Primeiro vc busca por todos os generos e atribui a uma variavel
      const genres = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?&language=pt-BR&api_key=1bd87bc8f44f05134b3cff209a473d2e'
      ).then((r) => r.json()) // em seguida vc busca os filmes
      const movies = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=1bd87bc8f44f05134b3cff209a473d2e&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
      ).then((r) => r.json()) // em seguida vc atribuiria a resposta ao payload
      // mas vc adicionaria o campo genres fazendo a busca no resultado do fetch anterior
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = movies.results.map((movie: Movie) => ({
        // mantem todos os dados padroes
        ...movie,
        // faz a busca por cada id de genero do genre_ids de cada filme
        genre_ids: movie.genre_ids.map(
          (id) =>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            genres.genres.find((genre: Genre) => id === genre.id).name
        )
      })) // define o status
      // console.log(data)
      const response = { data }
      setResult({ status: 'loaded', payload: response })
    } // separei em uma função para pode utilizar o async/await
    fetchData()
  }, [])

  return result
}

export default useMoviesService
