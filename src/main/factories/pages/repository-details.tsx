import { RepositoryDetailsPage } from '@/presentation/pages'
import { makeGetRepositoryUseCase } from '@/main/factories/usecases'

export function MakeRepositoryDetailsPage() {
  const usecase = makeGetRepositoryUseCase()
  return <RepositoryDetailsPage getRepository={usecase} />
}
