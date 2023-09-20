import { IFetchRepositoriesUseCase } from '@/domain/usecases'
import { Either, success } from '@/utils/either.ts'
import { Repository } from '@/domain/entities/repository.ts'
import { IRepositoryService } from '@/application/services'

interface FetchRepositoriesUseCaseRequest {
  username: string
}

type FetchRepositoriesUseCaseResponse = Either<null, { repositories: Repository[] | null}>

export class FetchRepositoriesUseCase implements IFetchRepositoriesUseCase<FetchRepositoriesUseCaseRequest, FetchRepositoriesUseCaseResponse> {
  constructor(private repositoryService: IRepositoryService) {}

  async execute({ username }: FetchRepositoriesUseCaseRequest): Promise<FetchRepositoriesUseCaseResponse> {
    const repositories = await this.repositoryService.fetchRepositoriesByUserName(username)

    return success({ repositories })
  }
}
