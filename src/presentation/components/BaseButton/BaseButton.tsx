import { ReactNode } from 'react'
import classNames from 'classnames'
import { ComponentProps } from '@/presentation/components/core'
import { Text } from '@/presentation/components/Text'
import '@/presentation/components/BaseButton/BaseButton.scss'
import { Loader } from '@/presentation/components/Loader'

export interface BaseButtonProps extends ComponentProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg',
  icon?: ReactNode
  loading?: boolean
  disabled?: boolean
}

export function BaseButton({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  ...others
}: BaseButtonProps) {
  return (
    <button
      className={classNames(`base-button base-button--${variant} base-button--size-${size}`, className)}
      type={type}
      disabled={disabled || loading}
      {...others}
    >
      <Text size="md" color={variant === 'primary' ? 'black' : 'white'}>{children}</Text>
      {loading && <Loader size={size} />}
      {(icon && !loading) && <div role="img" className="base-button__icon">{icon}</div>}
    </button>
  )
}
