import { Either, failure, success } from '@/utils/either.ts'

class FakeUseCase {
  execute(param: boolean): Either<Error, { message: string }> {
    if (!param) {
      return failure(new Error())
    }

    return success({ message: 'valid_message' })
  }
}

const usecase = new FakeUseCase()

describe('Either', () => {
  it('should failure when provide an invalid value', () => {
    const response = usecase.execute(false)

    expect(response.isFailure()).toBe(true)
    expect(response.isSuccess()).toBe(false)
    expect(response.value).instanceof(Error)
  })

  it('should success when provide a valid value', () => {
    const response = usecase.execute(true)

    expect(response.isFailure()).toBe(false)
    expect(response.isSuccess()).toBe(true)
    expect(response.value).toEqual({ message: 'valid_message' })
  })
})
