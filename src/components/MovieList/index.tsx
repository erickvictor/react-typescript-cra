import React from 'react'
import MovieItem, { MovieItemProps } from '../MovieItem'

import * as S from './styles'

export type MovieListProps = {
  items: MovieItemProps[]
}

const MovieList = ({ items }: MovieListProps) => (
  <S.Wrapper>
    {items.map((item, idx) => (
      <MovieItem key={`${item.title}-${idx}`} {...item} />
    ))}
  </S.Wrapper>
)

export default MovieList
