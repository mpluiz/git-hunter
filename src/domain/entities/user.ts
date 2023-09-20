import { Entity } from '@/domain/entities/entity.ts'

export interface UserProps {
  id: number
  name: string
  followers: number
  following: number
  bio?: string
  avatarUrl?: string
  profileUrl?: string
}

export class User extends Entity<UserProps> {
  static create(props: UserProps): User {
    return new User(props)
  }

  get name(): string {
    return this.props.name
  }
}
