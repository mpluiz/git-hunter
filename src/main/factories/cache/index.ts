import { LocalStorage } from '@/infra/cache/local-storage.ts'

export function makeLocalStorage(): LocalStorage {
  return new LocalStorage()
}
