import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 49.2rem;
    border-radius: ${theme.border.radius};
    display: flex;
    margin: 0 3rem 3rem 0;
  `}
  ${media.lessThan('medium')`
    margin: 0 0 3rem;
    width: 100%;
  `}
`

export const MovieContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  flex-shrink: 0;
  margin-right: 2rem;
  width: 15.7rem;
  height: 23.2rem;

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
    font-size: ${theme.font.sizes.xlarge};
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
  margin: 0.6rem 0;
`

export const Average = styled.h5`
  ${({ theme }) => css`
    display: inline-flex;
    font-size: ${theme.font.sizes.medium};
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

export const Overview = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smallx};
    color: ${theme.colors.white};
    line-height: 1.9rem;
  `}
`
