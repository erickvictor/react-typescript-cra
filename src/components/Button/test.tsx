import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>mais populares</Button>)

    expect(screen.getByRole('button', { name: /mais populares/i })).toHaveStyle(
      {
        height: '4.48rem',
        padding: '0.8rem 2.4rem',
        'font-size': '1.4rem'
      }
    )
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">mais populares</Button>)

    expect(screen.getByRole('button', { name: /mais populares/i })).toHaveStyle(
      {
        height: '3.46rem',
        padding: '0.8rem 1.6rem',
        'font-size': '1.112rem'
      }
    )
  })
})
