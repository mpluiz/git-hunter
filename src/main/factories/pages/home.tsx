import { HomePage } from '@/presentation/pages'
import { makeGetUserUseCase } from '@/main/factories/usecases'

export function MakeHomePage() {
  const usecase = makeGetUserUseCase()
  return <HomePage getUser={usecase}/>
}
