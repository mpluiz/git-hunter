import { User } from '@/domain/entities/user.ts'
import { InMemoryUserService } from '@tests/services/user-service.ts'
import { GetUserUseCase } from '@/application/usecases'
import { makeUser } from '@tests/factories/make-user.ts'

let inMemoryUserService: InMemoryUserService
let sut: GetUserUseCase
let user: User

describe('GetUserUseCase', () => {
  beforeEach(() => {
    inMemoryUserService = new InMemoryUserService()
    sut = new GetUserUseCase(inMemoryUserService)
    user = makeUser({ name: 'valid-name' })
  })

  it('should success to get an user when provide a valid username', async () => {
    inMemoryUserService.users = [user]
    const response = await sut.execute({ username: 'valid-name' })

    expect(response.isSuccess()).toBe(true)
    expect(response.isSuccess() && response.value?.user).toBeInstanceOf(User)
  })
})
