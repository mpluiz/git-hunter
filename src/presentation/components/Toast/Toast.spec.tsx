import { screen, render } from '@testing-library/react'
import { Toast } from '@/presentation/components/Toast/Toast.tsx'

describe('Toast', () => {
  it('should render component with correct modifiers', () => {
    render(<Toast variant="danger" title="valid-title" description="valid-description" open={true} setOpen={() => true} />)
    const sut = screen.getAllByRole('status')
    const title = screen.getByText('valid-title')
    const description = screen.getByText('valid-description')

    //
    expect(sut).toBeTruthy()
    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
  })
})
