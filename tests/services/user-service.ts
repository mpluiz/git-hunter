import { IUserService } from '@/application/services'
import { User } from '@/domain/entities/user.ts'

export class InMemoryUserService implements IUserService {
  public users: User[] = []

  async getByName(username: string): Promise<User | null> {
    const index = this.users.findIndex(user => user.name === username)
    return this.users[index]
  }
}
