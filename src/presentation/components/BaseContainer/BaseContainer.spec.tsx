import { screen, render } from '@testing-library/react'
import { BaseContainer } from '@/presentation/components/BaseContainer'

describe('BaseContainer', () => {
  it('should render component with correct modifiers', () => {
    render(<BaseContainer>valid-text</BaseContainer>)
    const sut = screen.getByText('valid-text')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('base-container base-container--primary')
  })
})
