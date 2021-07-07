import { Meta, Story } from '@storybook/react/types-6-0'
import MovieList, { MovieListProps } from '.'

import mockItems from './mock'

export default {
  title: 'MovieList',
  component: MovieList,
  args: {
    items: mockItems
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'suno-dark'
    }
  }
} as Meta

export const Default: Story<MovieListProps> = (args) => <MovieList {...args} />
