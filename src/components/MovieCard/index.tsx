import React from 'react'
import { Star } from '@styled-icons/ionicons-solid/Star'
import * as S from './styles'

export type MovieCardProps = {
  title: string
  genre_ids: string[]
  vote_average: string
  poster_path: string
}

const MovieCard = ({
  title,
  genre_ids,
  vote_average,
  poster_path
}: MovieCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Genre>{genre_ids}</S.Genre>
      <S.AvgBox>
        <S.IconButton role="button">
          <Star aria-label="Average" />
        </S.IconButton>
        <S.Average>{vote_average}</S.Average>
      </S.AvgBox>
    </S.Info>
  </S.Wrapper>
)

export default MovieCard
