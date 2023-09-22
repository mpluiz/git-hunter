import { InMemoryRepositoryService } from '@tests/services'
import { makeRepository } from '@tests/factories'
import { FetchRepositoriesUseCase } from '@/application/usecases'
import { Repository } from '@/domain/entities/repository.ts'

let inMemoryRepositoryService: InMemoryRepositoryService
let sut: FetchRepositoriesUseCase
let repository: Repository

describe('FetchRepositoriesUseCase', () => {
  beforeEach(() => {
    inMemoryRepositoryService = new InMemoryRepositoryService()
    sut = new FetchRepositoriesUseCase(inMemoryRepositoryService)
    repository = makeRepository({ name: 'valid-repository-name' })
  })

  it('should success to fetch a repository when provide a valid username', async () => {
    inMemoryRepositoryService.repositories = [repository]
    const response = await sut.execute({ username: 'valid-name', sort: 'desc' })

    expect(response.isSuccess()).toBe(true)
    expect(response.isSuccess() && response.value?.repositories).toHaveLength(1)
  })
})
