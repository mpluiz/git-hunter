import { screen, render } from '@testing-library/react'
import { AppLogo } from '@/presentation/components'

describe('AppLogo', () => {
  it('should render component with correct modifiers', () => {
    render(<AppLogo />)
    const sut = screen.getByText('GIT HUNTER')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('app-logo')
  })
})
