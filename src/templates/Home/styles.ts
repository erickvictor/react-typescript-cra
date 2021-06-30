import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

import * as MovieCardSliderStyles from '../../components/MovieCardSlider/styles'
import * as HeadingStyles from '../../components/Heading/styles'
import * as ContainerStyles from '../../components/Container'

const customMedia = generateMedia({
  desktop: '950px',
  tablet: '580px'
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
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const Menu = styled(Sections)`
  ${({ theme }) => css`
    background: ${theme.colors.menuBg};
  `}
  margin-bottom: 2rem;
  ${media.greaterThan('medium')`
    margin-bottom: 6rem;
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
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