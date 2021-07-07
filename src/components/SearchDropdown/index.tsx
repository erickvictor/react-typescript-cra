import React from 'react'
import Dropdown from '../Dropdown'
import { Search as SearchIcon } from '@styled-icons/ionicons-solid/Search'
import { MovieItemProps } from '../MovieItem'
import TextField from '../TextField'
import MovieList from '../MovieList'

import * as S from './styles'
import { Container } from '../Container'

export type SearchDropdownProps = {
  items: MovieItemProps[]
}

const SearchDropdown = ({ items }: SearchDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<SearchIcon aria-label="Search" size={32} />}>
      <>
        <Container>
          <TextField style={{ width: '92vw' }} />
        </Container>
        <Container>
          <MovieList items={items} />
        </Container>
      </>
    </Dropdown>
  </S.Wrapper>
)

export default SearchDropdown
