import styled, { css } from 'styled-components'
import * as TextStyles from '../TextField/styles'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.large} 0;
    justify-content: space-between;
    position: relative;
    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxsmall} 0;
    `}
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const ListWrapper = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: 0.8rem;
  `}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    &:active {
      padding-bottom: 4rem;
      border-bottom: 3px solid ${theme.colors.primary};
    }
    &:hover {
      padding-bottom: 4rem;
      border-bottom: 3px solid ${theme.colors.white};

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuSearchProps = {
  isSearch: boolean
}

export const MenuSearch = styled.div<MenuSearchProps>`
  ${media.greaterThan('medium')`
    top: 11.15rem;
  `}
  ${({ theme, isSearch }) => css`
    background: ${theme.colors.menuBg};
    top: 4.75rem;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: ${theme.layers.menu};
    opacity: ${isSearch ? 1 : 0};
    pointer-events: ${isSearch ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      color: ${theme.colors.white};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${TextStyles.Wrapper} {
      margin: ${theme.spacings.medium} 0;
    }

    ${TextStyles.Input} {
      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.medium};
        padding: 1rem 0;
      `}
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      flex-direction: column;
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: 0;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
      &:hover {
        padding-bottom: 0;
        border-bottom: none;
        &::after {
          content: '';
          position: absolute;
          display: block;
          height: 0.3rem;
          background-color: ${theme.colors.primary};
          animation: hoverAnimation 0.2s forwards;
        }

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  `}
`
