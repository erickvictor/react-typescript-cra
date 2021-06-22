import React from 'react'
import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a label by default', () => {
    renderWithTheme(<Heading>Lançamentos da Semana</Heading>)

    // expect(screen.getByLabelText(/Suno Movies/i)).toBeInTheDocument()
  })
})
