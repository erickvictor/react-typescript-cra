import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  circleLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.small};
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      top: 33%;
      content: '';
      border-radius: 50%;
      background: ${theme.colors.primary};
      width: ${theme.font.sizes.xsmall};
      height: ${theme.font.sizes.xsmall};
      ${media.greaterThan('medium')`
        width: ${theme.font.sizes.small};
        height: ${theme.font.sizes.small};
      `}
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, circleLeft }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.medium};
    text-transform: uppercase;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    ${circleLeft && wrapperModifiers.circleLeft(theme)}
  `}
`
