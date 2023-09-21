import { Either, failure, success } from '@/utils/either.ts'
import { User } from '@/domain/entities/user.ts'
import { IUserService } from '@/application/services'
import { IGetUserUseCase } from '@/domain/usecases'
import { RequestError, Storage } from '@/application/protocols'

interface GetAccountUseCaseRequest {
  username: string
}

export type GetUserUseCaseResponse = Either<RequestError, { user: User | null}>

export class GetUserUseCase implements IGetUserUseCase<GetAccountUseCaseRequest, GetUserUseCaseResponse> {
  constructor(private userService: IUserService, private storage: Storage) {}

  async execute({ username }: GetAccountUseCaseRequest): Promise<GetUserUseCaseResponse> {
    const response = await this.userService.getByName(username)

    if (!response.isSuccess()) {
      return failure(new RequestError({
        message: 'Usuário não encontrado.',
        statusCode: 404,
        key: 'request.error.user.notFound'
      }))
    }

    this.storage.set('currentUser', response.value.user.toValue())
    return success({ user: response.value.user })
  }
}
