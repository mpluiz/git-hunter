import { Repository } from '@/domain/entities/repository.ts'
import { IGetRepositoryUseCase } from '@/domain/usecases'
import { IRepositoryService } from '@/application/services'
import { Either, success } from '@/utils/either.ts'

interface GetRepositoryUseCaseRequest {
  name: string
}

type GetRepositoryUseCaseResponse = Either<null, { repository: Repository | null}>

export class GetRepositoryUseCase implements IGetRepositoryUseCase<GetRepositoryUseCaseRequest, GetRepositoryUseCaseResponse> {
  constructor(private repositoryService: IRepositoryService) {}

  async execute({ name }: GetRepositoryUseCaseRequest): Promise<GetRepositoryUseCaseResponse> {
    const repository = await this.repositoryService.getByName(name)

    return success({ repository })
  }
}
