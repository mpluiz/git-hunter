import { IUserService } from '@/application/services'
import { User } from '@/domain/entities/user.ts'
import { Either, failure, success } from '@/utils/either.ts'

export class InMemoryUserService implements IUserService {
  public users: User[] = []

  async getByName(username: string): Promise<Either<any, { user: User }>> {
    try {
      const index = this.users.findIndex(user => user.name === username)
      return success({ user: this.users[index] })
    } catch (error) {
      return failure(error)
    }
  }
}
