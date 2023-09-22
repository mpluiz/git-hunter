import type { Meta, StoryObj } from '@storybook/react'
import { CardList } from '@/presentation/components'

const meta: Meta<typeof CardList> = {
  component: CardList
}

export default meta
type Story = StoryObj<typeof CardList>

export const Default: Story = {
  args: {
    items: [
      { name: 'item1' },
      { name: 'item1' },
      { name: 'item1' },
      { name: 'item1' }
    ]
  }
}
