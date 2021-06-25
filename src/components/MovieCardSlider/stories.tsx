import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCardSlider from '.'
import { MovieCardProps } from '../MovieCard'
import items from './mock'

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
