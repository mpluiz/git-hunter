import { GetRepositoryUseCase } from '@/application/usecases'
import { Repository } from '@/domain/entities/repository.ts'
import { InMemoryRepositoryService } from '@tests/services'
import { makeRepository } from '@tests/factories'

let inMemoryRepositoryService: InMemoryRepositoryService
let sut: GetRepositoryUseCase
let repository: Repository

describe('GetRepositoryUseCase', () => {
  beforeEach(() => {
    inMemoryRepositoryService = new InMemoryRepositoryService()
    sut = new GetRepositoryUseCase(inMemoryRepositoryService)
    repository = makeRepository({ name: 'valid-repository-name' })
  })

  it('should success to get a repository when provide a valid name', async () => {
    inMemoryRepositoryService.repositories = [repository]
    const response = await sut.execute({ name: 'valid-repository-name' })

    expect(response.isSuccess()).toBe(true)
    expect(response.isSuccess() && response.value?.repository).toBeInstanceOf(Repository)
  })
})
