import type { Meta, StoryObj } from '@storybook/react'
import { BaseTypography } from '@/presentation/components/BaseTypography'

const meta: Meta<typeof BaseTypography> = {
  component: BaseTypography
}

export default meta
type Story = StoryObj<typeof BaseTypography>

export const Default: Story = {
  args: { children: 'valid-param' }
}
