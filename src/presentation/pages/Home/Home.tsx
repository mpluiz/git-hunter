import { FormEvent, useState } from 'react'
import { GetUserUseCase } from '@/application/usecases'
import { useNavigate } from 'react-router-dom'
import { AppLogo, BaseButton, BaseContainer, TextField, Toast } from '@/presentation/components'
import '@/presentation/pages/Home/Home.scss'

export interface HomePageProps {
  getUser: GetUserUseCase
}

export function HomePage({ getUser }: HomePageProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [toast, setToast] = useState(false)
  const [error, setError] = useState({ title: '', description: '' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const response = await getUser.execute({ username: user })
    setLoading(false)

    if (response.isFailure()) {
      setError({ title: response.value.name, description: response.value.message })
      setToast(true)
      return false
    }

    return navigate(`/users/${user}/details`)
  }

  return (
    <>
      <AppLogo />
      <BaseContainer className="home-page">
        <form className="home-page__content" onSubmit={handleSubmit}>
          <TextField
            name="user"
            placeholder="Digite o username do Github"
            maxLength={255}
            value={user}
            onChange={(event) => setUser(event.currentTarget.value)}
          />
          <BaseButton type="submit" size="lg" loading={loading} onClick={() => setToast(false)}>Buscar</BaseButton>
        </form>

        <Toast
          variant="danger"
          title={error.title}
          description={error.description}
          open={toast}
          setOpen={setToast}
        />
      </BaseContainer>
    </>
  )
}
