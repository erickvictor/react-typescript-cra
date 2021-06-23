import { Story, Meta } from '@storybook/react/types-6-0'
import { ChevronDown } from '@styled-icons/ionicons-solid/ChevronDown'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'mais populares'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'por gênero',
  icon: <ChevronDown />
}
