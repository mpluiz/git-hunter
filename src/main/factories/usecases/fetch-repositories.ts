import { makeRepositoryHttpClient } from '@/main/factories/http'
import { FetchRepositoriesUseCase } from '@/application/usecases'
import { RepositoryService } from '@/application/services'

export function makeFetchRepositoriesUseCase(): FetchRepositoriesUseCase {
  const httpClient = makeRepositoryHttpClient()
  const service = new RepositoryService(httpClient)
  return new FetchRepositoriesUseCase(service)
}
