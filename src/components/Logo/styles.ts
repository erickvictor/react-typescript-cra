import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 14.5rem;
    height: 3.15rem;
  `,

  large: () => css`
    width: 18rem;
    height: 3.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`
