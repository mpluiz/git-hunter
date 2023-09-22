import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@/presentation/components'

const meta: Meta<typeof Avatar> = {
  component: Avatar
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80', fallback: 'AD' }
}

export const FallBack: Story = {
  args: { src: '', fallback: 'AD' }
}
