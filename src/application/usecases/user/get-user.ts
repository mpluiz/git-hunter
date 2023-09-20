import { Either, success } from '@/utils/either.ts'
import { User } from '@/domain/entities/user.ts'
import { IUserService } from '@/application/services'
import { IGetUserUseCase } from '@/domain/usecases'

interface GetAccountUseCaseRequest {
  username: string
}

type GetUserUseCaseResponse = Either<Error, { user: User | null}>

export class GetUserUseCase implements IGetUserUseCase<GetAccountUseCaseRequest, GetUserUseCaseResponse> {
  constructor(private userService: IUserService) {}

  async execute({ username }: GetAccountUseCaseRequest): Promise<GetUserUseCaseResponse> {
    const user = await this.userService.getByName(username)

    return success({ user })
  }
}
