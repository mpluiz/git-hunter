import { BaseTypography } from '@/presentation/components/BaseTypography'
import { ComponentProps } from '@/presentation/components/core'
import '@/presentation/components/Text/Text.scss'

interface TextProps extends ComponentProps<HTMLParagraphElement> {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  weigth?: 'regular' | 'medium' | 'semi-bold' | 'bold'
  color?: 'white' | 'black' | 'grey' | 'danger'
}

export function Text({ children, size, weigth = 'regular', color = 'white', ...others }: TextProps) {
  return (
    <BaseTypography className={`text text--${size} text--${weigth} text--color-${color}`} {...others}>
      {children}
    </BaseTypography>
  )
}
