import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { NavBar } from '@/presentation/components'
import { makeUser } from '@tests/factories'

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'Navigation/NavBar',
  decorators: [withRouter]
}

const currentUserMock = makeUser()

export default meta
type Story = StoryObj<typeof NavBar>

export const Default: Story = {
  args: { currentUser: currentUserMock.toValue() }
}
