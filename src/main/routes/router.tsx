import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContext } from '@/presentation/hooks/context/user.ts'
import { getCurrentUser } from '@/main/adapters/user/current-user.ts'
import { MakeHomePage, MakeRepositoryDetailsPage, MakeUserDetailsPage } from '@/main/factories/pages'

export function MainRouter() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ getCurrentUser }}>

        <Routes>
          <Route path="/" element={<MakeHomePage />} />
          <Route path="/users/:user/details" element={<MakeUserDetailsPage />} />
          <Route path="/repositories/:repository/details" element={<MakeRepositoryDetailsPage />} />
        </Routes>

      </UserContext.Provider>
    </BrowserRouter>
  )
}
