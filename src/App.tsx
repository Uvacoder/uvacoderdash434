import { Suspense } from 'react'

import { AppProviders } from './context/app-providers'
import { MyRoutes } from './routes'
import { Loader } from './shared/Loader'
import './App.css'

export default function App() {
  return (
    <AppProviders>
      <Suspense fallback={<Loader />}>
        <MyRoutes />
      </Suspense>
    </AppProviders>
  )
}
