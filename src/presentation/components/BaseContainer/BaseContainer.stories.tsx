import type { Meta, StoryObj } from '@storybook/react'
import { BaseContainer } from '@/presentation/components/BaseContainer'
import { Text } from '@/presentation/components/Text'

const meta: Meta<typeof BaseContainer> = {
  component: BaseContainer
}

export default meta
type Story = StoryObj<typeof BaseContainer>

export const Default: Story = {
  args: { children: <Text size="xxxl" style={{ padding: '16px' }}>valid-text</Text> }
}
