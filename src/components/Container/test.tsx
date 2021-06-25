import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import 'jest-styled-components'

import { Container } from '.'
import theme from '../../styles/theme'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(
      <Container data-testid="container">
        <span>Suno Movies</span>
      </Container>
    )

    expect(screen.getByTestId('container')).toHaveStyle({
      maxWidth: theme.grid.container
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
        data-testid="container"
      >
        <span>
          Suno Movies
        </span>
      </div>
    `)
  })
})
