import { BrowserRouter } from 'react-router-dom'
import { Router } from '@/presentation/routes/Router.tsx'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}
