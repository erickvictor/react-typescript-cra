import { Story, Meta } from '@storybook/react/types-6-0'
import SearchDropdown, { SearchDropdownProps } from '.'

import items from '../MovieList/mock'

export default {
  title: 'SearchDropdown',
  component: SearchDropdown,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: 'suno-dark'
    }
  }
} as Meta

export const Default: Story<SearchDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <SearchDropdown {...args} />
  </div>
)
