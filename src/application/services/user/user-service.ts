import { User } from '@/domain/entities/user.ts'

export interface IUserService {
  getByName(username: string) : Promise<User | null>
}
