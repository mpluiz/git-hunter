import { screen, render } from '@testing-library/react'
import { Text } from '@/presentation/components/Text'

describe('Text', () => {
  it('should render component with correct modifiers', () => {
    render(<Text size="md">valid-text</Text>)
    const sut = screen.getByText('valid-text')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('text--md text--regular')
  })
})
