import { FetchRepositoriesRequest, IRepositoryService } from '@/application/services'
import { Repository } from '@/domain/entities/repository.ts'

export class InMemoryRepositoryService implements IRepositoryService {
  public repositories: Repository[] = []

  async getByName(name: string): Promise<Repository | null> {
    const index = this.repositories.findIndex(repository => repository.name === name)
    return this.repositories[index]
  }

  async fetchRepositories({ username }: FetchRepositoriesRequest): Promise<Repository[] | null> {
    this.repositories.findIndex(repository => repository.name === username)
    return this.repositories
  }
}
