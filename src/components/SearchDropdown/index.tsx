import React from 'react'
import Dropdown from '../Dropdown'
import { Search as SearchIcon } from '@styled-icons/ionicons-solid/Search'
import { MovieItemProps } from '../MovieItem'

import * as S from './styles'
import TextField from '../TextField'

export type SearchDropdownProps = {
  items: MovieItemProps[]
}

const SearchDropdown = () => (
  <S.Wrapper>
    <Dropdown title={<SearchIcon aria-label="Search" size={32} />}>
      <TextField style={{ width: '92vw' }} />
    </Dropdown>
  </S.Wrapper>
)

export default SearchDropdown
