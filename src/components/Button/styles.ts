import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'color'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3.46rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4.48rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.2rem;

      & + span {
        margin-left: ${theme.spacings.micro};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, hasIcon }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors[color!]};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
