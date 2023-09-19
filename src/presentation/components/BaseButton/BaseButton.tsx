import { ReactNode } from 'react'
import classNames from 'classnames'
import { ComponentProps } from '@/presentation/components/core'
import { Text } from '@/presentation/components/Text'
import '@/presentation/components/BaseButton/BaseButton.scss'

export interface BaseButtonProps extends ComponentProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  disabled?: boolean
}

export function BaseButton({
  children,
  className,
  type = 'button',
  variant = 'primary',
  disabled = false,
  icon,
  ...others
}: BaseButtonProps) {
  return (
    <button
      className={classNames('base-button', { [`base-button--${variant}`]: variant }, className)}
      type={type}
      disabled={disabled}
      {...others}
    >
      <Text size="md" color={variant === 'primary' ? 'black' : 'white'}>{children}</Text>
      <div role="img" className="base-button__icon">{icon}</div>
    </button>
  )
}
