import React from 'react'
import { Star } from '@styled-icons/ionicons-solid/Star'
import * as S from './styles'

export type MovieCardProps = {
  id: number
  title: string
  genre_ids: string[]
  vote_average: number
  poster_path: string
}

const MovieCard = ({
  id,
  title,
  genre_ids,
  vote_average,
  poster_path
}: MovieCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title} - ${id}`}
      />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Genre>
        {genre_ids.map((item, idx) => (
          <span key={`${item} - ${idx}`}>{`${item} `}</span>
        ))}
      </S.Genre>
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
