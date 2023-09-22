import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainRouter } from '@/main/routes/router.tsx'

import '@/presentation/assets/styles/normalize.css'
import '@/presentation/assets/styles/global.css'
import '@/presentation/assets/styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
)
