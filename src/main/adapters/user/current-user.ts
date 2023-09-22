import { UserProps } from '@/domain/entities/user.ts'
import { LocalStorage } from '@/infra/cache/local-storage.ts'

export function getCurrentUser(): UserProps {
  const storage = new LocalStorage()

  return storage.get('currentUser')
}
