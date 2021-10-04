import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.menuBg};
    display: flex;
    flex-direction: row;
    align-self: start;
    flex-wrap: wrap;
  `}
`
