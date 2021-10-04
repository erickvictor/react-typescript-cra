import React from 'react'
import CatalogItemGrid, { CatalogItemGridProps } from '../CatalogItemGrid'

import * as S from './styles'

export type CatalogListProps = {
  items: CatalogItemGridProps[]
}

const CatalogList = ({ items }: CatalogListProps) => (
  <S.Wrapper>
    {items.map((item, idx) => (
      <CatalogItemGrid key={`${item.title}-${idx}`} {...item} />
    ))}
  </S.Wrapper>
)

export default CatalogList
