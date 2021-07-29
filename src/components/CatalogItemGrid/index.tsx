import React from 'react'
import { Star } from '@styled-icons/ionicons-solid/Star'
import * as S from './styles'

export type CatalogItemGridProps = {
  title: string
  genre: string
  average: number
  img: string
  overview: string
}

const CatalogItemGrid = ({
  title,
  genre,
  average,
  img,
  overview
}: CatalogItemGridProps) => (
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
        <S.Overview>
          Determinado a garantir que o sacrifício final do Superman não foi em
          vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar
          uma equipe de metahumanos para proteger o mundo de uma ameaça de
          proporções catastróficas que se aproxima.
        </S.Overview>
      </S.Content>
    </S.MovieContent>
  </S.Wrapper>
)

export default CatalogItemGrid
