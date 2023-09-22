import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Profile } from '@/presentation/components'
import { UserProps } from '@/domain/entities/user.ts'

const meta: Meta<typeof Profile> = {
  component: Profile,
  decorators: [withRouter]
}

const userMock:UserProps = {
  id: 40648797,
  name: 'Marcos Paulo',
  userName: 'mpluiz',
  followers: 11,
  following: 8,
  avatarUrl: 'https://avatars.githubusercontent.com/u/40648797?v=4',
  profileUrl: 'https://github.com/mpluiz'
}

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {
  args: { user: userMock }
}
