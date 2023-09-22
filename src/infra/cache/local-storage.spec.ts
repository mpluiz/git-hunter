import { LocalStorage } from '@/infra/cache/local-storage.ts'

function makeSut() {
  return new LocalStorage()
}

describe('LocalStorage', () => {
  beforeEach(() => {
    makeSut().clear()
  })

  it('Should set correct items', () => {
    const sut = makeSut()
    const key = 'valid-key'
    const value = 'valid-value'

    sut.set(key, { value })

    expect(sut.get('valid-key')).toEqual({ value })
  })

  it('Should clear items', () => {
    const sut = makeSut()
    const key = 'valid-key'
    const value = 'valid-value'

    sut.set(key, { value })
    sut.clear()

    expect(sut.get('valid-key')).toBe(null)
  })
})
