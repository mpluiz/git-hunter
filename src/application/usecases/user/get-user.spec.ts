import { User } from '@/domain/entities/user.ts'
import { GetUserUseCase } from '@/application/usecases'
import { InMemoryUserService } from '@tests/services'
import { makeUser } from '@tests/factories'
import { LocalStorage } from '@/infra/cache/local-storage.ts'
import { makeLocalStorage } from '@/main/factories/cache'
import { RequestError } from '@/application/protocols'
import { failure } from '@/utils/either.ts'

let inMemoryUserService: InMemoryUserService
let storage: LocalStorage
let sut: GetUserUseCase
let user: User

describe('GetUserUseCase', () => {
  beforeEach(() => {
    inMemoryUserService = new InMemoryUserService()
    storage = makeLocalStorage()
    sut = new GetUserUseCase(inMemoryUserService, storage)
    user = makeUser({ name: 'valid-name' })
  })

  it('should success to get an user when provide a valid username', async () => {
    inMemoryUserService.users = [user]
    const response = await sut.execute({ username: 'valid-name' })

    expect(response.isSuccess()).toBe(true)
    expect(response.isSuccess() && response.value?.user).toBeInstanceOf(User)
  })

  it('should success to save currentUser in storage', async () => {
    inMemoryUserService.users = [user]
    await sut.execute({ username: 'valid-name' })
    const currentUser = storage.get('currentUser')

    expect(currentUser).toEqual(user.toValue())
  })

  it('should failure to get an user when provide an invalid username', async () => {
    vi.spyOn(inMemoryUserService, 'getByName').mockImplementation(async (username: string) => failure(username))

    const response = await sut.execute({ username: 'invalid-username' })

    expect(response.isFailure()).toBe(true)
    expect(response.isFailure() && response.value).toBeInstanceOf(RequestError)
  })
})
