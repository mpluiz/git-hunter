import type { Meta, StoryObj } from '@storybook/react'
import { TextField, BaseButton } from '@/presentation/components'

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Form/TextField',
  argTypes: { onChange: { action: 'change' } }
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: { name: 'user', placeholder: 'Digite o username do Github' },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
      <TextField {...args} />
      <BaseButton size="lg">Buscar</BaseButton>
    </div>
  )
}
