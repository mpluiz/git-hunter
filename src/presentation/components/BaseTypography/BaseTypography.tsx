import classNames from 'classnames'
import { ComponentProps } from '@/presentation/components/core'
import '@/presentation/components/BaseTypography/BaseTypography.scss'

type BaseTypographyProps = ComponentProps<HTMLParagraphElement>

export function BaseTypography({ children, className, ...others }: BaseTypographyProps) {
  return <p className={classNames('base-typography', className)} {...others}>{children}</p>
}
