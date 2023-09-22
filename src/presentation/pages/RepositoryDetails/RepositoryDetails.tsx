import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetRepositoryUseCase } from '@/application/usecases'
import { UserContext } from '@/presentation/hooks/context/user.ts'
import { RepositoryProps } from '@/domain/entities/repository.ts'
import { BaseContainer, Loader, NavBar, Repository, Text } from '@/presentation/components'
import '@/presentation/pages/RepositoryDetails/RepositoryDetails.scss'

export interface RepositoryDetailsPageProps {
  getRepository: GetRepositoryUseCase
}

export function RepositoryDetailsPage({ getRepository }: RepositoryDetailsPageProps) {
  const { repository = '' } = useParams()
  const { getCurrentUser } = useContext(UserContext)
  const [currentRepository, setCurrentRepository] = useState<RepositoryProps>()
  const [loading, setLoading] = useState(false)

  const handleGetRepository = useCallback(async () => {
    setLoading(true)
    const repositoryFullName = `${getCurrentUser().userName}/${repository}`
    const response = await getRepository.execute({ name: repositoryFullName })

    if (response.isSuccess() && response.value.repository) {
      setCurrentRepository(response.value.repository.toValue())
    }
    setLoading(false)
  }, [repository, getRepository, getCurrentUser])

  useEffect(() => {
    handleGetRepository().catch(() => {
      // TODO: handler possible error
    })
  }, [handleGetRepository])

  console.log(currentRepository)

  return (
    <BaseContainer className="repository-details-page">
      <NavBar currentUser={getCurrentUser()} />
      {loading && <Text className="repository-list__loading" size="xl">Carregando <Loader size="lg"/></Text>}
      {currentRepository && <Repository repository={currentRepository} current />}
    </BaseContainer>
  )
}
