import { HttpClient } from '@/application/protocols/http/http-client.ts'
import { UserMap } from '@/application/mappers/user.ts'
import { User } from '@/domain/entities/user.ts'
import { Either, failure, success } from '@/utils/either.ts'

export interface IUserService {
  getByName(username: string): Promise<Either<any, { user: User }>>
}

export class UserService implements IUserService {
  constructor(private readonly client: HttpClient) {}

  async getByName(username: string): Promise<Either<any, { user: User }>> {
    try {
      const response = await this.client.http.get(`/${username}`)

      return success({ user: UserMap.toDomain(response.data) })
    } catch (error: any) {
      // TODO: add handler
      return failure(error)
    }
  }
}
