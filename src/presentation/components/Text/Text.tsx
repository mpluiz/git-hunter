import { BaseTypography } from '@/presentation/components/BaseTypography'
import { ComponentProps } from '@/presentation/components/core'
import '@/presentation/components/Text/Text.scss'

interface TextProps extends ComponentProps<HTMLParagraphElement> {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}

export function Text({ children, size }: TextProps) {
  return <BaseTypography className={`text text--${size}`}>{children}</BaseTypography>
}
