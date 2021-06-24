import React from 'react'
import { Star } from '@styled-icons/ionicons-solid/Star'
import * as S from './styles'

export type MovieCardProps = {
  title: string
  genre: string
  average: number
  img: string
}

const MovieCard = ({ title, genre, average, img }: MovieCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Genre>{genre}</S.Genre>
      <S.AvgBox>
        <S.IconButton role="button">
          <Star aria-label="Average" />
        </S.IconButton>
        <S.Average>{average}</S.Average>
      </S.AvgBox>
    </S.Info>
  </S.Wrapper>
)

export default MovieCard
