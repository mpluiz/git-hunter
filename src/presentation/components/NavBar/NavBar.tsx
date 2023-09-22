import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { BaseButton, BaseContainer, ComponentProps, Text } from '@/presentation/components'
import '@/presentation/components/NavBar/NavBar.scss'
import { UserProps } from '@/domain/entities/user.ts'

export interface NavBarProps extends ComponentProps<HTMLDivElement> {
  currentUser: UserProps
}

export function NavBar({ currentUser }: NavBarProps) {
  const navigate = useNavigate()

  return (
    <BaseContainer className="nav-bar" role="navigation">
      <div className="nav-bar__actions">
        <BaseButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon/>
        </BaseButton>

        <Link to="/">
          <BaseButton>
            <HomeIcon/>
          </BaseButton>
        </Link>

        <NavLink to={`/users/${currentUser.userName}/details`}>
          <BaseButton>
            <PersonIcon />
          </BaseButton>
        </NavLink>

      </div>

      <Text>GIT HUNTER</Text>
    </BaseContainer>
  )
}
