import { GetUserUseCase } from '@/application/usecases'
import { UserService } from '@/application/services'
import { makeUserHttpClient } from '@/main/factories/http'
import { makeLocalStorage } from '@/main/factories/cache'

export function makeGetUserUseCase(): GetUserUseCase {
  const httpClient = makeUserHttpClient()
  const storage = makeLocalStorage()
  const service = new UserService(httpClient)
  return new GetUserUseCase(service, storage)
}
