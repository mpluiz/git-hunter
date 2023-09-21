import { createContext } from 'react'
import { UserProps } from '@/domain/entities/user.ts'

interface UserContextProps {
  getCurrentUser: () => UserProps
}

export const UserContext = createContext({} as UserContextProps)
