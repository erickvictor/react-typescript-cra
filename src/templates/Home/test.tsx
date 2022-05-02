import React from 'react'
import 'server.mock'
import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render menu', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /suno movies/i })).toHaveLength(1)
  })
})
