import { screen, render } from '@testing-library/react'
import { CardList } from '@/presentation/components/CardList/CardList.tsx'

describe('CardList', () => {
  it('should render component with correct items', () => {
    const items = [{ name: 'item1' }]

    render(<CardList items={items} />)
    const sut = screen.getByRole('list')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('card-list')
    expect(sut.children).toHaveLength(1)
  })
})
