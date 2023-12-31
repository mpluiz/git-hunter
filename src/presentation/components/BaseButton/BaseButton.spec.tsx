import { screen, render } from '@testing-library/react'
import { BaseButton } from '@/presentation/components'
import { DiscordLogoIcon } from '@radix-ui/react-icons'

describe('BaseButton', () => {
  it('should render component with correct modifiers', () => {
    render(<BaseButton>valid-text</BaseButton>)
    const sut = screen.getByRole('button')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('base-button base-button--primary')
  })

  it('should render component with icon', () => {
    render(<BaseButton icon={<DiscordLogoIcon />}>valid-text</BaseButton>)
    const sut = screen.getByRole('img')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('base-button__icon')
  })

  it('should render component with loading status', () => {
    render(<BaseButton loading>valid-text</BaseButton>)
    const sut = screen.getByRole('status')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('loader')
  })

  it('should render component with correct variant', () => {
    render(<BaseButton variant="secondary">valid-text</BaseButton>)
    const sut = screen.getByRole('button')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('base-button base-button--secondary')
  })
})
