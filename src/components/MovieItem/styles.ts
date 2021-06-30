import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    border: 0.1rem solid ${theme.colors.gray};
    background: ${theme.colors.cardBg};
    width: 30rem;
    border-radius: ${theme.border.radius};
    display: flex;
  `}
`

export const MovieContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  flex-shrink: 0;
  margin-right: 2rem;
  width: 9.8rem;
  height: 14.7rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    object-fit: cover;
  }
`

export const Content = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: 1.2rem;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
  `}
`

export const Genre = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.primary};
  `}
`

export const AvgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Average = styled.h5`
  ${({ theme }) => css`
    display: inline-flex;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const IconButton = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    color: ${theme.colors.primary};
    cursor: pointer;
    svg {
      width: 1.6rem;
    }
  `}
`
