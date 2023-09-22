import { screen, render } from '@testing-library/react'
import { Repository } from '@/presentation/components'
import { MemoryRouter } from 'react-router-dom'
import { makeRepository } from '@tests/factories'

describe('Profile', () => {
  it('should render component with correct modifiers', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Repository repository={makeRepository({ name: 'valid-repository-name' }).toValue()} />
      </MemoryRouter>
    )

    const sut = screen.getByRole('listitem')
    const name = screen.getByText<HTMLLinkElement>('valid-repository-name')

    expect(sut).toBeTruthy()
    expect(name).toBeTruthy()
    expect(sut.className).toContain('repository')
  })

  it('should render component with current modifier', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Repository repository={makeRepository({ name: 'current' }).toValue()} current />
      </MemoryRouter>
    )

    const name = screen.getByText<HTMLLinkElement>('current')

    expect(name).toBeTruthy()
  })
})
