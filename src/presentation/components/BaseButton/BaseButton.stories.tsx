import type { Meta, StoryObj } from '@storybook/react'
import { BaseButton } from '@/presentation/components/BaseButton'
import { DiscordLogoIcon } from '@radix-ui/react-icons'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  argTypes: { onClick: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Default: Story = {
  args: { children: 'valid-text' }
}

export const Loading: Story = {
  args: { children: 'valid-text', loading: true }
}

export const Icon: Story = {
  args: { children: 'valid-text', icon: <DiscordLogoIcon /> }
}
