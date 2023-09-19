import { ComponentProps } from '@/presentation/components/core'
import '@/presentation/components/BaseTypography/BaseTypography.scss'

type BaseTypographyProps = ComponentProps<HTMLParagraphElement>

export function BaseTypography({ children }: BaseTypographyProps) {
  return (
    <p className={'base-typography'}>
      {children}
    </p>
  )
}
