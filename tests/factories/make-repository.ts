import { Repository, RepositoryProps } from '@/domain/entities/repository.ts'

export function makeRepository(override: Partial<RepositoryProps> = {}): Repository {
  const repository = Repository.create({
    id: 1,
    name: 'valid-repository-name',
    fullName: 'valid-name/valid-repository-name',
    stars: 0,
    repositoryUrl: 'https://fake-repository-url.com',
    language: 'valid-language-name',
    ...override
  })

  return repository
}
