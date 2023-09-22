import { screen, render, waitFor } from '@testing-library/react'
import { Avatar } from '@/presentation/components'

describe('Avatar', () => {
  it('should render component with correct modifiers', async () => {
    render(<Avatar src="#" fallback="AD" />)

    await waitFor(() => expect(screen.getByText('AD')).toBeTruthy())
  })
})
