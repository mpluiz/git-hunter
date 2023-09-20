import { Repository } from '@/domain/entities/repository.ts'
import { HttpClient } from '@/application/protocols/http/http-client.ts'
import { RepositoryMap } from '@/application/mappers/repository.ts'

export interface IRepositoryService {
  fetchRepositoriesByUserName(username: string) : Promise<Repository[] | null>
  getByName(repositoryFullName: string) : Promise<Repository | null>
}

export class RepositoryService implements IRepositoryService {
  constructor(private readonly client: HttpClient) {}

  async getByName(repositoryFullName: string): Promise<Repository | null> {
    const response = await this.client.http.get(`/repos/${repositoryFullName}`)

    if (!response.data) {
      return null
    }

    return RepositoryMap.toDomain(response.data)
  }

  async fetchRepositoriesByUserName(username: string): Promise<Repository[] | null> {
    const response = await this.client.http.get(`/users/${username}/repos`)

    if (!response.data) {
      return null
    }

    return response.data.map((data: any) => RepositoryMap.toDomain(data))
  }
}
