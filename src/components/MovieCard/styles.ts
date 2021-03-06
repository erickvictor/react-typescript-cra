import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    height: 32.82rem;
    width: 100%;
    border-radius: 0.4rem;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 32.82rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    img {
      width: 100%;
      height: 32.82rem;
      border-radius: 0.4rem;
    }
    :hover {
      background: ${theme.colors.primary};
      background-image: url('/play-icon-96.png');
      background-repeat: no-repeat;
      background-position: center;
      opacity: 1;
      animation: none;
    }
    img:hover {
      opacity: 0.3;
    }
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.micro};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Genre = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
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
    font-weight: ${theme.font.bold};
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
