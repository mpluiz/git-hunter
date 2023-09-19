import { screen, render } from '@testing-library/react'
import { CardListItem } from '@/presentation/components/CardListItem'

describe('CardListItem', () => {
  it('should render component', () => {
    render(<CardListItem>valid-text</CardListItem>)
    const sut = screen.getByText('valid-text')

    expect(sut).toBeTruthy()
    expect(sut.className).toEqual('card-list-item')
  })
})
