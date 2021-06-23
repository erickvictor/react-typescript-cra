import React, { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/ionicons-solid/Menu'
import { Search as SearchIcon } from '@styled-icons/ionicons-solid/Search'
import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close'
import * as S from './styles'
import Logo from '../Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <Logo />
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
