import React, { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/ionicons-solid/Menu'
import { Search as SearchIcon } from '@styled-icons/ionicons-solid/Search'
import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close'
import * as S from './styles'
import Logo from '../Logo'
import MediaMatch from '../MediaMatch'
import TextField from '../TextField'
import MovieList from '../MovieList'
import items from '../MovieList/mock'
import { Container } from '../Container'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <Logo />
      <S.ListWrapper>
        <S.MenuNav>
          <S.MenuLink href="#">Início</S.MenuLink>
          <S.MenuLink href="#">Catálogo</S.MenuLink>
        </S.MenuNav>
      </S.ListWrapper>
      <S.IconWrapper onClick={() => setIsSearch(true)}>
        <SearchIcon
          color={!isSearch ? '#EAEAEA' : '#FE3189'}
          aria-label="Search"
        />
      </S.IconWrapper>

      <S.MenuSearch aria-hidden={!isSearch} isSearch={isSearch}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsSearch(false)} />
        <S.MenuNav>
          <Container>
            <TextField placeholder="Search" />

            <MovieList items={items} />
          </Container>
        </S.MenuNav>
      </S.MenuSearch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Início</S.MenuLink>
          <S.MenuLink href="#">Catálogo</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
