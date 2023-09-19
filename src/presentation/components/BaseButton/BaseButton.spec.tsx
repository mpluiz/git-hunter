import { screen, render } from '@testing-library/react'
import { BaseButton } from '@/presentation/components/BaseButton'
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
})
