import classNames from 'classnames'
import { ComponentProps } from '@/presentation/components'
import '@/presentation/components/BaseContainer/BaseContainer.scss'

interface BaseContainerProps extends ComponentProps<HTMLDivElement> {
  variant?: 'primary' | 'secondary'
}

export function BaseContainer({ children, variant = 'primary', className, ...others }: BaseContainerProps) {
  return (
    <div
      className={classNames('base-container', `base-container--${variant}`, className)}
      {...others}
    >
      {children}
    </div>
  )
}
