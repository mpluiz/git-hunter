import { screen, render } from '@testing-library/react'
import { BaseTypography } from '@/presentation/components'

describe('BaseTypography', () => {
  it('should render component', () => {
    render(<BaseTypography>valid-text</BaseTypography>)
    const sut = screen.getByText('valid-text')

    expect(sut).toBeTruthy()
    expect(sut.className).toEqual('base-typography')
  })
})
