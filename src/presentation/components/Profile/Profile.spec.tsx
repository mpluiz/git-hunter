import { screen, render } from '@testing-library/react'
import { Profile } from '@/presentation/components'
import { MemoryRouter } from 'react-router-dom'
import { makeUser } from '@tests/factories'

describe('Profile', () => {
  it('should render component with correct modifiers', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Profile user={makeUser({ name: 'valid-name' }).toValue()}/>
      </MemoryRouter>
    )

    const name = screen.getByText('valid-name')

    expect(name).toBeTruthy()
  })
})
