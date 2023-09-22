import { UserDetailsPage } from '@/presentation/pages'
import { makeFetchRepositoriesUseCase } from '@/main/factories/usecases'

export function MakeUserDetailsPage() {
  const usecase = makeFetchRepositoriesUseCase()
  return <UserDetailsPage fetchRepositories={usecase} />
}
