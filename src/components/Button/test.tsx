import React from 'react'
// import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Button>mais populares</Button>)
  })
})
