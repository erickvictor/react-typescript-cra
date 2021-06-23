import React from 'react'
import { screen } from '@testing-library/react'
import Menu from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
  })
})
