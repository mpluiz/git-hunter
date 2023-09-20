import { Repository } from '@/domain/entities/repository.ts'

export interface IRepositoryService {
  fetchRepositoriesByUserName(username: string) : Promise<Repository[] | null>
  getByName(name: string) : Promise<Repository | null>
}
