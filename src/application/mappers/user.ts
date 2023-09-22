import { Mapper } from '@/application/mappers/mapper.ts'
import { User } from '@/domain/entities/user.ts'

export class UserMap extends Mapper {
  static toDomain(raw: any): User {
    return User.create({
      id: raw.id,
      name: raw.name,
      userName: raw.login,
      email: raw.email,
      followers: raw.followers,
      following: raw.following,
      bio: raw.bio,
      avatarUrl: raw.avatar_url,
      profileUrl: raw.html_url
    })
  }
}
