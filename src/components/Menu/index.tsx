import React from 'react'
import { Menu as MenuIcon } from '@styled-icons/ionicons-solid/Menu'
import { Search as SearchIcon } from '@styled-icons/ionicons-solid/Search'
import * as S from './styles'
import Logo from '../Logo'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <Logo />
    <S.IconWrapper>
      <SearchIcon aria-label="Search" />
    </S.IconWrapper>
  </S.Wrapper>
)

export default Menu
