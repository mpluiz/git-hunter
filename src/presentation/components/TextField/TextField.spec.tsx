import { screen, render } from '@testing-library/react'
import { TextField } from '@/presentation/components/TextField/TextField.tsx'
import { FormEvent } from 'react'

describe('TextField', () => {
  it('should render component with correct modifiers', () => {
    render(
      <TextField
        name="valid-name"
        label="valid-label"
        placeholder="valid-placeholder"
        value="valid-value"
        onChange={(event: FormEvent<HTMLInputElement>) => event.currentTarget}
      />
    )
    const sut = screen.getByDisplayValue<HTMLInputElement>('valid-value')

    expect(sut).toBeTruthy()
    expect(sut.value).toEqual('valid-value')
    expect(sut.className).toContain('text-field__input')
  })
})
