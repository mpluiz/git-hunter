import type { Meta, StoryObj } from '@storybook/react'
import { CardListItem } from '@/presentation/components'

const meta: Meta<typeof CardListItem> = {
  component: CardListItem
}

export default meta
type Story = StoryObj<typeof CardListItem>

export const Default: Story = {
  args: { children: 'text' }
}
