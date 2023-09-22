import * as RAvatar from '@radix-ui/react-avatar'
import { Text } from '@/presentation/components'
import '@/presentation/components/Avatar/Avatar.scss'

interface AvatarProps {
  src?: string
  fallback: string
  delayMs?: number
}

export function Avatar({ src, fallback, delayMs = 600 }: AvatarProps) {
  return (
    <RAvatar.Root className="avatar">
      <RAvatar.Image className="avatar__image" src={src} alt="avatar-image" />
      <RAvatar.Fallback className="avatar__fallback" delayMs={delayMs}>
        <Text size="md" weigth="bold">{fallback}</Text>
      </RAvatar.Fallback>
    </RAvatar.Root>
  )
}
