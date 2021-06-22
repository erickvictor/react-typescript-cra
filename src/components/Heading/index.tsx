import React from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'primary'
  circleLeft?: boolean
}

const Heading = ({
  children,
  color = 'white',
  circleLeft = false
}: HeadingProps) => (
  <S.Wrapper color={color} circleLeft={circleLeft}>
    {children}
  </S.Wrapper>
)

export default Heading
