import { Dispatch, SetStateAction } from 'react'
import { ComponentProps, Text } from '@/presentation/components'
import * as RToast from '@radix-ui/react-toast'
import '@/presentation/components/Toast/Toast.scss'

interface ToastProps extends ComponentProps<HTMLParagraphElement> {
  variant: 'primary' | 'danger'
  title: string
  description?: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function Toast({ variant, title, description, open, setOpen }: ToastProps) {
  return (
    <RToast.Provider>
      <RToast.Root className={`toast toast--${variant}`} open={open} onOpenChange={setOpen}>
        <RToast.Title className="toast__title">
          <Text size="md" weigth="bold" color="danger">{title}</Text>
        </RToast.Title>
        <RToast.Description className="toast__description">
          <Text size="sm" weigth="regular" color="danger">{description}</Text>
        </RToast.Description>
      </RToast.Root>

      <RToast.Viewport className="toast__viewport" />
    </RToast.Provider>
  )
}
