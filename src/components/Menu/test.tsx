import React from 'react'
import { screen } from '@testing-library/react'
import Menu from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.getByRole('img', { name: /suno movies/i })
    ).toBeInTheDocument()
  })
})
