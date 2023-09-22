import classNames from 'classnames'
import { BaseTypography, ComponentProps } from '@/presentation/components'
import '@/presentation/components/Text/Text.scss'

interface TextProps extends ComponentProps<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  weigth?: 'regular' | 'medium' | 'semi-bold' | 'bold'
  color?: 'white' | 'black' | 'grey' | 'danger'
}

export function Text({
  children,
  className,
  size = 'md',
  weigth = 'regular',
  color = 'white',
  ...others
}: TextProps) {
  return (
    <BaseTypography
      className={classNames(`text text--${size} text--${weigth} text--color-${color}`, className)}
      {...others}
    >
      {children}
    </BaseTypography>
  )
}
