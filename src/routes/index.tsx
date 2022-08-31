import { lazy } from 'react'

import { Route, Routes } from 'react-router-dom'

const BinaryClock = lazy(() => import('./binary-clock'))
const Home = lazy(() => import('./home'))

const routes = [
  { component: Home, path: '/' },
  { component: BinaryClock, path: 'binary-clock' },
]

export const MyRoutes = () => {
  return (
    <Routes>
      {routes.map((route: any) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        )
      })}
    </Routes>
  )
}
