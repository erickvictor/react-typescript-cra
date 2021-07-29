import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

import * as MovieCardSliderStyles from '../../components/MovieCardSlider/styles'
import * as HeadingStyles from '../../components/Heading/styles'
import * as ContainerStyles from '../../components/Container'

const customMedia = generateMedia({
  desktop: '950px',
  tablet: '575px'
})

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${MovieCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    ${HeadingStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-left: -2rem;
        margin-right: -2rem;
      `}
    }
  `}
`

export const Menu = styled(Sections)`
  ${({ theme }) => css`
    background: ${theme.colors.menuBg};
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    padding-top: 7.5rem;
    padding-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('medium')`
      background: url(bg.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}

    ${ContainerStyles.Container} {
      ${media.lessThan('large')`
        width: 78rem;
      `}

      ${customMedia.lessThan('desktop')`
        width: 58rem;
      `}

      ${customMedia.lessThan('tablet')`
        width: 28rem;
      `}
    }
  `}
`

export const SectionHeading = styled.div`
  ${({ theme }) => css`
    border-top: 0.3rem solid ${theme.colors.primary};
    background: ${theme.colors.menuBg};
    padding: 3.7rem 0;
  `}
`
