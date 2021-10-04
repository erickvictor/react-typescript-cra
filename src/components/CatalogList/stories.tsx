import { Meta, Story } from '@storybook/react/types-6-0'
import CatalogList, { CatalogListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CatalogList',
  component: CatalogList,
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

export const Default: Story<CatalogListProps> = (args) => (
  <CatalogList {...args} />
)
