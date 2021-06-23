import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium'
  color?: 'blackGdt' | 'primaryGdt'
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  color = 'blackGdt',
  size = 'medium',
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} color={color} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
