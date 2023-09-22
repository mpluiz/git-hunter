import type { Meta, StoryObj } from '@storybook/react'
import { BaseContainer, Text } from '@/presentation/components'

const meta: Meta<typeof BaseContainer> = {
  component: BaseContainer,
  title: 'Layout/BaseContainer'
}

export default meta
type Story = StoryObj<typeof BaseContainer>

export const Default: Story = {
  args: { children: <Text size="xxxl" style={{ padding: '16px' }}>valid-text</Text> }
}
