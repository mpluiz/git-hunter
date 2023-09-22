import { Entity } from '@/domain/entities/entity.ts'

export interface UserProps {
  id: number
  name: string
  userName: string;
  followers: number
  following: number
  profileUrl: string
  email?: string
  bio?: string
  avatarUrl?: string
}

export class User extends Entity<UserProps> {
  static create(props: UserProps): User {
    return new User(props)
  }

  get name(): string {
    return this.props.name
  }
}
