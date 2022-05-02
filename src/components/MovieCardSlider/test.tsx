import React from 'react'
import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import MovieCardSlider from '.'

const items = [
  {
    id: 1,
    title: 'Luca',
    genre_ids: ['Animação', 'Comédia'],
    vote_average: 8.3,
    poster_path:
      'https://image.tmdb.org/t/p/w500/1lk7QISmTam2iOzzUAQYs6voeFg.jpg'
  },
  {
    id: 2,
    title: 'Um Lugar Silencioso - Parte II',
    genre_ids: ['Ficção científica', 'Thriller'],
    vote_average: 7.3,
    poster_path:
      'https://image.tmdb.org/t/p/w500/wYqmuxd9jNFLf3gtQY5vbAUgiGk.jpg'
  },
  {
    id: 3,
    title: 'Cruella',
    genre_ids: ['Comédia', 'Crime'],
    vote_average: 8.6,
    poster_path:
      'https://image.tmdb.org/t/p/w500/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg'
  },
  {
    id: 4,
    title: 'Mortal Kombat',
    genre_ids: ['Ação', 'Fantasia'],
    vote_average: 7.5,
    poster_path:
      'https://image.tmdb.org/t/p/w500/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg'
  },
  {
    id: 5,
    title: 'Xtremo',
    genre_ids: ['Ação', 'Aventura'],
    vote_average: 7.1,
    poster_path:
      'https://image.tmdb.org/t/p/w500/5ghvx0Q5c57JoBNxFj4gSfXj6wK.jpg'
  },
  {
    id: 5,
    title: 'Liga da Justiça de Zack Snyder',
    genre_ids: ['Ação', 'Aventura'],
    vote_average: 8.4,
    poster_path:
      'https://image.tmdb.org/t/p/w500/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
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
