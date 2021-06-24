import React from 'react'
import { render } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    render(<Slider />)
  })
})
