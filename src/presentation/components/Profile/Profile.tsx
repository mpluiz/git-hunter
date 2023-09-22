import { Link } from 'react-router-dom'
import { CopyIcon, ExternalLinkIcon, PersonIcon } from '@radix-ui/react-icons'
import { Avatar, BaseButton, BaseContainer, ComponentProps, Text } from '@/presentation/components'
import { UserProps } from '@/domain/entities/user.ts'
import '@/presentation/components/Profile/Profile.scss'

export interface ProfileProps extends ComponentProps<HTMLDivElement> {
  user: UserProps
}

export function Profile({ user, className }: ProfileProps) {
  return (
    <BaseContainer className={`profile ${className}`}>
      <Avatar src={user.avatarUrl} fallback={user.name.charAt(0)}></Avatar>
      <Text className="profile__title" size="xl">{user.name}</Text>

      <div className="profile__status">
        <Text><PersonIcon/> Followers: {user.followers} ·</Text>
        <Text>Following: {user.following}</Text>
      </div>

      <Text>{user.bio}</Text>
      <Text>{user.email}</Text>
      <div className="profile__actions">
        <Link target="_blank" to={user.profileUrl}>
          <BaseButton icon={<ExternalLinkIcon/>}>
            Perfil
          </BaseButton>
        </Link>

        <BaseButton
          icon={<CopyIcon/>}
          onClick={() => navigator.clipboard.writeText(user.email ?? '')}
        >
          Email
        </BaseButton>
      </div>

    </BaseContainer>
  )
}
