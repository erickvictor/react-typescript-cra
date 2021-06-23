import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { ChevronDown } from '@styled-icons/ionicons-solid/ChevronDown'
import 'jest-styled-components'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>mais populares</Button>)

    expect(screen.getByRole('button', { name: /mais populares/i })).toHaveStyle(
      {
        height: '4.48rem',
        padding: '0.8rem 2.4rem',
        'font-size': '1.4rem'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
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

  it('should render a black background by default', () => {
    renderWithTheme(<Button>mais populares</Button>)

    expect(
      screen.getByRole('button', { name: /mais populares/i })
    ).toHaveStyleRule(
      'background',
      'linear-gradient(180deg,#212125 0%,#2e2e35 100%)'
    )
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<ChevronDown data-testid="icon" />}>mais populares</Button>
    )

    expect(screen.getByText(/mais populares/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
