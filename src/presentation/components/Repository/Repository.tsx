import { Link } from 'react-router-dom'
import { ArrowRightIcon, ExternalLinkIcon, StarFilledIcon } from '@radix-ui/react-icons'
import { ComponentProps, Text } from '@/presentation/components'
import { RepositoryProps } from '@/domain/entities/repository.ts'

import '@/presentation/components/Repository/Repository.scss'

export interface RepositoryComponentProps extends ComponentProps<HTMLDivElement> {
  repository: RepositoryProps
  current?: boolean
}

export function Repository({ repository, current = false }: RepositoryComponentProps) {
  return (
    <div className="repository">
      <Text className="repository__title" size="lg" weigth="semi-bold">
        {current && repository.name}
        {!current && <Link to={`/repositories/${repository.name}/details`}>{repository.name}<ArrowRightIcon /></Link>}
      </Text>
      <Text>{repository.description}</Text>
      <div className="repository__footer">
        <Text className="star"><StarFilledIcon /> {repository.stars}</Text>
        {repository.language && <Text>| {repository.language}</Text>}
        <Text className="external-link">
          <Link target="_blank" to={repository.repositoryUrl}>| Github<ExternalLinkIcon/></Link>
        </Text>
      </div>
    </div>
  )
}
