import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@/presentation/components'

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Feedback/Toast'
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: { variant: 'danger', title: 'valid-title', description: 'valid-description', open: true, setOpen: () => false }
}
