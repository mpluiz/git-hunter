import { useState } from 'react'
import { BaseButton, BaseContainer, ComponentProps, Loader, Repository, Text } from '@/presentation/components'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { RepositoryProps } from '@/domain/entities/repository.ts'
import '@/presentation/components/RepositoryList/RepositoriesList.scss'

export interface RepositoriesListProps extends ComponentProps<HTMLDivElement> {
  fetchRepositories: (sort: string) => Promise<void>
  repositories?: RepositoryProps[]
  loading?: boolean
}

export function RepositoriesList({ fetchRepositories, repositories, loading = false }: RepositoriesListProps) {
  const [sort, setSort] = useState<'desc' | 'asc'>('desc')

  function handleSort() {
    const changeSort = sort === 'desc' ? 'asc' : 'desc'
    setSort(changeSort)

    return changeSort
  }

  return (
    <BaseContainer className="repository-list" role="list">
      <div className="repository-list__actions">
        <BaseButton onClick={() => fetchRepositories(handleSort())}>
          <CaretSortIcon />
        </BaseButton>
      </div>

      {loading && <Text className="repository-list__loading" size="xl">Carregando <Loader size="lg"/></Text>}

      {(repositories && !loading) && repositories.map(repository => (
        <Repository key={repository.id} repository={repository}/>
      ))}
    </BaseContainer>
  )
}
