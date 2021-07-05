import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    id: 'Search',
    initialValue: '',
    placeholder: 'Searching Movie'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.parameters = {
  backgrounds: {
    default: 'suno-dark'
  }
}
