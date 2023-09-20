import { User } from '@/domain/entities/user.ts'
import { HttpClient } from '@/application/protocols/http/http-client.ts'
import { UserMap } from '@/application/mappers/user.ts'

export interface IUserService {
  getByName(username: string) : Promise<User | null>
}

export class UserService implements IUserService {
  constructor(private readonly client: HttpClient) {}

  async getByName(username: string): Promise<User | null> {
    const response = await this.client.http.get(`/${username}`)

    if (!response.data) {
      return null
    }

    return UserMap.toDomain(response.data)
  }
}
