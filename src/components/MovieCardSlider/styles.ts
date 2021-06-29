import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { MovieCardSliderProps } from '.'

type WrapperProps = Pick<MovieCardSliderProps, 'color'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('small')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
    .slick-prev,
    .slick-next {
      position: absolute;
      top: 50%;
      display: block;
      width: 4rem;
      height: 4rem;
      padding: 0;
      transform: translate(0, -50%);
      cursor: pointer;
      color: ${theme.colors[color!]};
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      opacity: 0.25;
    }

    .slick-prev:before,
    .slick-next:before {
      line-height: 1;

      opacity: 0.75;
      color: ${theme.colors[color!]};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    [dir='rtl'] .slick-prev {
      right: -${theme.spacings.xxlarge};
      left: auto;
    }
    .slick-prev:before {
      content: '←';
    }
    [dir='rtl'] .slick-prev:before {
      content: '→';
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    [dir='rtl'] .slick-next {
      right: auto;
      left: -${theme.spacings.xxlarge};
    }
    .slick-next:before {
      content: '→';
    }
    [dir='rtl'] .slick-next:before {
      content: '←';
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
