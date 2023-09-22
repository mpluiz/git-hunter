import { User, UserProps } from '@/domain/entities/user.ts'

export function makeUser(override: Partial<UserProps> = {}): User {
  const user = User.create({
    id: 1,
    name: 'valid-name',
    userName: 'valid-userName',
    followers: 0,
    following: 0,
    profileUrl: 'https://fake-profile-url.com',
    ...override
  })

  return user
}
