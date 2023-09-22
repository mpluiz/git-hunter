import { screen, render, fireEvent } from '@testing-library/react'
import { NavBar } from '@/presentation/components'
import { MemoryRouter } from 'react-router-dom'
import { makeUser } from '@tests/factories'

describe('NavBar', () => {
  it('should render component with correct modifiers', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar currentUser={makeUser().toValue()} />
      </MemoryRouter>
    )

    const sut = screen.getByRole('navigation')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('nav-bar')
  })

  it('should make an navigation action', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar currentUser={makeUser().toValue()} />
      </MemoryRouter>
    )

    const sut = await screen.findAllByRole('button')

    fireEvent.click(sut[0])

    expect(sut).toBeTruthy()
  })
})
