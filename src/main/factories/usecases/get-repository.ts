import { makeRepositoryHttpClient } from '@/main/factories/http'
import { GetRepositoryUseCase } from '@/application/usecases'
import { RepositoryService } from '@/application/services'

export function makeGetRepositoryUseCase(): GetRepositoryUseCase {
  const httpClient = makeRepositoryHttpClient()
  const service = new RepositoryService(httpClient)
  return new GetRepositoryUseCase(service)
}
