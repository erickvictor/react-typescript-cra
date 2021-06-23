import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Lançamentos da Semana</Heading>)

    expect(
      screen.getByRole('heading', { name: /lançamentos da semana/i })
    ).toHaveStyle({
      color: '#EAEAEA'
    })
  })

  it('should render a primary heading when color is passed', () => {
    renderWithTheme(<Heading color="primary">Lançamentos da Semana</Heading>)
    expect(
      screen.getByRole('heading', { name: /lançamentos da semana/i })
    ).toHaveStyle({
      color: '#FE3189'
    })
  })

  it('should render a heading with a circle to the left side', () => {
    renderWithTheme(<Heading circleLeft>Lançamentos da Semana</Heading>)
    expect(
      screen.getByRole('heading', { name: /lançamentos da semana/i })
    ).toHaveStyle({ paddingLeft: '2.4rem' })
  })
})
