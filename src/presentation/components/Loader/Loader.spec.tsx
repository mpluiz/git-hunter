import { screen, render } from '@testing-library/react'
import { Loader } from '@/presentation/components/Loader/Loader.tsx'

describe('Loader', () => {
  it('should render component with correct items', () => {
    render(<Loader />)
    const sut = screen.getByRole('status')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('loader loader--size-md')
  })
})
