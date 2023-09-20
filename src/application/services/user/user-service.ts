import { User } from '@/domain/entities/user.ts'
import { HttpClient } from '@/application/protocols/http/http-client.ts'

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

    const { id, name, followers, following, bio, avatar_url: avatarUrl, html_url: profileUrl } = response.data

    return User.create({ id, name, followers, following, bio, avatarUrl, profileUrl })
  }
}
