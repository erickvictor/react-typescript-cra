import { Story, Meta } from '@storybook/react/types-6-0'
import SearchDropdown from '.'

export default {
  title: 'SearchDropdown',
  component: SearchDropdown,
  parameters: {
    backgrounds: {
      default: 'suno-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <SearchDropdown />
  </div>
)
