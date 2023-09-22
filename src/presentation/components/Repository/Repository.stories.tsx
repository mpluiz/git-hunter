import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Repository } from '@/presentation/components'
import { RepositoryProps } from '@/domain/entities/repository.ts'

const meta: Meta<typeof Repository> = {
  component: Repository,
  decorators: [withRouter]
}

const repositoryMock:RepositoryProps = {
  id: 502686438,
  name: 'clean-ts-api',
  description: 'API em NodeJs usando Typescript, TDD, Clean Architecture, Design Patterns e SOLID principles',
  fullName: 'mpluiz/clean-ts-api',
  language: 'Javascript',
  stars: 0,
  repositoryUrl: 'https://github.com/mpluiz/clean-ts-api'
}

export default meta
type Story = StoryObj<typeof Repository>

export const Default: Story = {
  args: { repository: repositoryMock }
}
