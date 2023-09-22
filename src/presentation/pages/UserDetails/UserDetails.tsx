import { useCallback, useContext, useEffect, useState } from 'react'
import { UserContext } from '@/presentation/hooks/context/user.ts'
import { RepositoryProps } from '@/domain/entities/repository.ts'
import { UserProps } from '@/domain/entities/user.ts'
import { FetchRepositoriesUseCase } from '@/application/usecases'
import { NavBar, Profile, RepositoriesList } from '@/presentation/components'
import '@/presentation/pages/UserDetails/UserDetails.scss'

export interface UserDetailsPageProps {
  fetchRepositories: FetchRepositoriesUseCase
}

export function UserDetailsPage({ fetchRepositories }: UserDetailsPageProps) {
  const { getCurrentUser } = useContext(UserContext)
  const [repositories, setRepositories] = useState<RepositoryProps[]>()
  const [currentUser] = useState<UserProps>(getCurrentUser())
  const [loading, setLoading] = useState(false)

  const handleFetchRepositories = useCallback(async (sort = 'desc') => {
    setLoading(true)

    const response = await fetchRepositories.execute({
      username: currentUser.userName, sort
    })

    if (response.isSuccess() && response.value.repositories) {
      const repositoriesMapped = response.value.repositories.map(repository => repository.toValue())
      setRepositories(repositoriesMapped)
    }
    setLoading(false)
  }, [currentUser, fetchRepositories])

  useEffect(() => {
    handleFetchRepositories().catch(() => {
      // TODO: handler possible error
    })
  }, [handleFetchRepositories])

  return (
    <div className="user-details-page">
      <div className="user-details-page__left-side">
        <NavBar currentUser={currentUser}/>
        {currentUser && <Profile user={currentUser}/>}
      </div>
      <RepositoriesList
        fetchRepositories={handleFetchRepositories}
        repositories={repositories}
        loading={loading}
      />
    </div>
  )
}
