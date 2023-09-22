import { screen, render, fireEvent } from '@testing-library/react'
import { RepositoriesList } from '@/presentation/components'
import { MemoryRouter } from 'react-router-dom'
import { makeRepository } from '@tests/factories'

async function fetchRepositoriesMock(sort: string) {
  console.log(sort)
}

describe('Profile', () => {
  it('should render component with correct modifiers', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RepositoriesList fetchRepositories={fetchRepositoriesMock} repositories={[makeRepository().toValue()]} />
      </MemoryRouter>
    )

    const sut = screen.getByRole('list')
    const sortButton = screen.getByRole('button')

    fireEvent.click(sortButton)
    fireEvent.click(sortButton)

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('repository-list')
  })

  it('should render component with correct modifiers', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RepositoriesList fetchRepositories={fetchRepositoriesMock} loading={true} />
      </MemoryRouter>
    )

    const sut = screen.getByRole('list')
    const loading = screen.getByText('Carregando')

    expect(sut).toBeTruthy()
    expect(loading).toBeTruthy()
  })
})
