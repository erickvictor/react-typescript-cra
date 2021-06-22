import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Suno Movies/i).parentElement).toHaveStyle({
      width: '14.5rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)

    expect(screen.getByLabelText(/Suno Movies/i).parentElement).toHaveStyle({
      width: '18rem'
    })
  })
})
