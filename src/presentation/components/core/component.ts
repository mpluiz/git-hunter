import { HTMLAttributes, ReactNode } from 'react'

export interface ComponentProps<T = HTMLElement> extends HTMLAttributes<T> {
  children?: ReactNode | undefined
  className?: string
}
