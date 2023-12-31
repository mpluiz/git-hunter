import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/presentation/components'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Typography/Text'
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: { children: 'valid-param', size: 'xl' }
}
