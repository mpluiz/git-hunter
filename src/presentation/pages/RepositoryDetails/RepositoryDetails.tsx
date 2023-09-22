import { useParams } from 'react-router-dom'
import { GetRepositoryUseCase } from '@/application/usecases'

import '@/presentation/pages/RepositoryDetails/RepositoryDetails.scss'

export interface RepositoryDetailsPageProps {
  getRepository: GetRepositoryUseCase
}

export function RepositoryDetailsPage({ getRepository }: RepositoryDetailsPageProps) {
  const { repository } = useParams()

  async function execute() {
    return getRepository.execute({ name: `mpluiz/${repository}` ?? '' })
  }

  console.log(execute())

  return <h1>Repository Details</h1>
}
