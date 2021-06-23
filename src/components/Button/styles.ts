import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

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
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #fe3189 0%, #fe3189 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
