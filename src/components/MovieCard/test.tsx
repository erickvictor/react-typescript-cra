import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import MovieCard from '.'

const props = {
  title: 'Liga da Justiça de Zack Snyder',
  genre: 'Ação, Aventura',
  average: 8.4,
  img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MovieCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.genre })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/average/i)).toBeInTheDocument()
  })
})
