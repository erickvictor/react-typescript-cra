import React from 'react'
import { Star } from '@styled-icons/ionicons-solid/Star'
import * as S from './styles'

export type MovieItemProps = {
  title: string
  genre: string
  average: number
  img: string
}

const MovieItem = ({ title, genre, average, img }: MovieItemProps) => (
  <S.Wrapper>
    <S.MovieContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Genre>{genre}</S.Genre>
        <S.AvgBox>
          <S.IconButton role="button">
            <Star aria-label="Average" />
          </S.IconButton>
          <S.Average>{average}</S.Average>
        </S.AvgBox>
      </S.Content>
    </S.MovieContent>
  </S.Wrapper>
)

export default MovieItem
