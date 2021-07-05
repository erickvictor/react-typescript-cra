import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: none;
    padding: 0 ${theme.spacings.xsmall};
    border: none;
    border-bottom: 0.2rem solid;
    border-color: ${theme.colors.lightBorder};
    &:focus-within {
      border-color: ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxxlarge};
    padding: ${theme.spacings.xsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Wrapper = styled.div``
