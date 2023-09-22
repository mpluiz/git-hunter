import type { Meta, StoryObj } from '@storybook/react'
import { BaseTypography } from '@/presentation/components'

const meta: Meta<typeof BaseTypography> = {
  component: BaseTypography,
  title: 'Typography/BaseTypography'
}

export default meta
type Story = StoryObj<typeof BaseTypography>

export const Default: Story = {
  args: { children: 'valid-param' }
}
