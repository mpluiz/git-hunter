import classNames from 'classnames'
import { ComponentProps } from '@/presentation/components/core'
import { BaseContainer } from '@/presentation/components/BaseContainer'
import '@/presentation/components/CardListItem/CardListItem.scss'

type CardListItemProps = ComponentProps<HTMLDivElement>

export function CardListItem({ children, className, ...others }: CardListItemProps) {
  return (
    <BaseContainer>
      <div className={classNames('card-list-item', className)} role="listitem" {...others}>
        {children}
      </div>
    </BaseContainer>
  )
}
