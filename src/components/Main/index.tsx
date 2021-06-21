import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'Suno Movies',
  description = 'It is an online database of information related to films'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
export default Main
