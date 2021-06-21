import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'Suno Movies')}
    description={text(
      'Description',
      'It is an online database of information related to films'
    )}
  />
)
