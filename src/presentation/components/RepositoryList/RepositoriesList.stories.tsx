import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { RepositoriesList } from '@/presentation/components'
import { RepositoryProps } from '@/domain/entities/repository.ts'

const meta: Meta<typeof RepositoriesList> = {
  component: RepositoriesList,
  decorators: [withRouter]
}

const repositoriesMock:RepositoryProps[] = [
  {
    id: 502686438,
    name: 'clean-ts-api',
    description: 'API em NodeJs usando Typescript, TDD, Clean Architecture, Design Patterns e SOLID principles',
    fullName: 'mpluiz/clean-ts-api',
    stars: 10,
    repositoryUrl: 'https://github.com/mpluiz/clean-ts-api'
  },
  {
    id: 389230718,
    name: 'dock-app',
    language: 'Python',
    description: 'API REST para sistema de gestão de contas',
    fullName: 'mpluiz/dock-app',
    stars: 0,
    repositoryUrl: 'https://github.com/mpluiz/dock-app'
  },
  {
    id: 649737763,
    name: 'dotfiles',
    fullName: 'mpluiz/dotfiles',
    stars: 0,
    repositoryUrl: 'https://github.com/mpluiz/dotfiles'
  }
]

async function fetchRepositoriesMock(sort: string) {
  console.log(sort)
}

export default meta
type Story = StoryObj<typeof RepositoriesList>

export const Default: Story = {
  args: { repositories: repositoriesMock, fetchRepositories: fetchRepositoriesMock }
}
