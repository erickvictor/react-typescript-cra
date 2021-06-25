import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCard, { MovieCardProps } from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  args: {
    title: 'Liga da Justiça de Zack Snyder',
    genre: 'Ação, Aventura',
    average: 8.4,
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
  }
} as Meta

export const Basic: Story<MovieCardProps> = (args) => (
  <div style={{ width: '21.85rem' }}>
    <MovieCard {...args} />
  </div>
)

Basic.parameters = {
  backgrounds: {
    default: 'suno-dark'
  }
}
