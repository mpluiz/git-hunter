import { BaseTypography } from '@/presentation/components/BaseTypography'
import { ComponentProps } from '@/presentation/components/core'
import '@/presentation/components/Text/Text.scss'

interface TextProps extends ComponentProps<HTMLParagraphElement> {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  weigth?: 'regular' | 'medium' | 'semi-bold' | 'bold';
}

export function Text({ children, size, weigth = 'regular' }: TextProps) {
  return <BaseTypography className={`text text--${size} text--${weigth}`}>{children}</BaseTypography>
}
