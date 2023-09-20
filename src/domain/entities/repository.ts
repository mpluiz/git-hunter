import { Entity } from '@/domain/entities/entity.ts'

export interface RepositoryProps {
  id: number
  name: string
  fullName: string
  stars: number
  language: string
  description?: string
  repositoryUrl?: string
}

export class Repository extends Entity<RepositoryProps> {
  static create(props: RepositoryProps): Repository {
    return new Repository(props)
  }

  get name(): string {
    return this.props.name
  }
}
