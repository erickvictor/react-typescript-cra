import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: linear-gradient(180deg, #fe3189 0%, #fe3189 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.family};
  `}
`
