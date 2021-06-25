import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCardSlider from '.'
import { MovieCardProps } from '../MovieCard'

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

export default {
  title: 'MovieCardSlider',
  component: MovieCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'suno-dark'
    }
  }
} as Meta

export const Default: Story<MovieCardProps[]> = (args) => (
  <div style={{ maxWidth: '102.5rem', margin: '0 auto' }}>
    <MovieCardSlider items={args} {...args} />
  </div>
)
