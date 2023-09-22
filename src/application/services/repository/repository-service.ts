import { Repository } from '@/domain/entities/repository.ts'
import { HttpClient } from '@/application/protocols/http/http-client.ts'
import { RepositoryMap } from '@/application/mappers/repository.ts'

export interface FetchRepositoriesRequest {
  username: string
  sort: string
}

export interface IRepositoryService {
  fetchRepositories(params: FetchRepositoriesRequest) : Promise<Repository[] | null>
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

  async fetchRepositories({ username, sort }: FetchRepositoriesRequest): Promise<Repository[] | null> {
    const response = await this.client.http.get(`/users/${username}/repos?sort=stargazers_count&direction=${sort}`)

    if (!response.data) {
      return null
    }

    return response.data.map((data: any) => RepositoryMap.toDomain(data))
  }
}
