import React from 'react'
import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import MovieCardSlider from '.'

const items = [
  {
    title: 'Luca',
    genre: 'Animação, Comédia',
    average: 8.3,
    img: 'https://image.tmdb.org/t/p/w500/1lk7QISmTam2iOzzUAQYs6voeFg.jpg'
  },
  {
    title: 'Um Lugar Silencioso - Parte II',
    genre: 'Ficção científica, Thriller',
    average: 7.3,
    img: 'https://image.tmdb.org/t/p/w500/wYqmuxd9jNFLf3gtQY5vbAUgiGk.jpg'
  },
  {
    title: 'Cruella',
    genre: 'Comédia, Crime',
    average: 8.6,
    img: 'https://image.tmdb.org/t/p/w500/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg'
  },
  {
    title: 'Mortal Kombat',
    genre: 'Ação, Fantasia',
    average: 7.5,
    img: 'https://image.tmdb.org/t/p/w500/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg'
  },
  {
    title: 'Xtremo',
    genre: 'Ação, Aventura',
    average: 7.1,
    img: 'https://image.tmdb.org/t/p/w500/5ghvx0Q5c57JoBNxFj4gSfXj6wK.jpg'
  },
  {
    title: 'Liga da Justiça de Zack Snyder',
    genre: 'Ação, Aventura',
    average: 8.4,
    img: 'https://image.tmdb.org/t/p/w500/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
  }
]

describe('<MovieCardSlider', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<MovieCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<MovieCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous movies/i)).toHaveStyle({
      color: '#EAEAEA'
    })
    expect(screen.getByLabelText(/next movies/i)).toHaveStyle({
      color: '#EAEAEA'
    })
  })
})
