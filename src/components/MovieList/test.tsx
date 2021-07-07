import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import MovieList from '.'
import mockItems from './mock'

describe('<MovieList />', () => {
  it('should render the movie list', () => {
    const { container } = renderWithTheme(<MovieList items={mockItems} />)

    expect(screen.getAllByRole('heading')).toHaveLength(12)

    expect(container.firstChild).toMatchSnapshot()
  })
})
