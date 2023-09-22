import { screen, render } from '@testing-library/react'
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
})
