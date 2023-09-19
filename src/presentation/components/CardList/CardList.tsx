import { ComponentProps } from '@/presentation/components/core'
import { BaseContainer } from '@/presentation/components/BaseContainer'
import '@/presentation/components/CardList/CardList.scss'
import { CardListItem } from '@/presentation/components/CardListItem'

interface item {
  name: string
}

interface CardListProps extends ComponentProps<HTMLDivElement> {
  items: item[]
}

export function CardList({ items }: CardListProps) {
  return (
    <BaseContainer className="card-list" variant="secondary" role="list">
      { items.map((item, i) => (
        <CardListItem key={i}>{item.name}</CardListItem>
      ))}
    </BaseContainer>
  )
}
