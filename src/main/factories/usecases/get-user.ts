import { GetUserUseCase } from '@/application/usecases'
import { UserService } from '@/application/services'
import { makeUserHttpClient } from '@/main/factories/http'

export function makeGetUserUseCase(): GetUserUseCase {
  const httpClient = makeUserHttpClient()
  const service = new UserService(httpClient)
  return new GetUserUseCase(service)
}
