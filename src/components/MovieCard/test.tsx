import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import MovieCard from '.'

const props = {
  id: 1,
  title: 'Liga da Justiça de Zack Snyder',
  genre_ids: ['Ação', 'Aventura'],
  vote_average: 8.4,
  poster_path: '/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MovieCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Liga da Justiça de Zack Snyder/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Ação/i })).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Liga da Justiça de Zack Snyder/i })
    ).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
    )

    expect(screen.getByLabelText(/average/i)).toBeInTheDocument()
  })
})
