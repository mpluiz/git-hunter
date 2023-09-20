import { Mapper } from '@/application/mappers/mapper.ts'
import { Repository } from '@/domain/entities/repository.ts'

export class RepositoryMap extends Mapper {
  static toDomain(raw: any): Repository {
    return Repository.create({
      id: raw.id,
      name: raw.name,
      language: raw.language,
      description: raw.description,
      fullName: raw.full_name,
      stars: raw.stargazers_count,
      repositoryUrl: raw.html_url
    })
  }
}
