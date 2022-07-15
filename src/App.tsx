import { lazy, Suspense } from 'react'

import { HashRouter, Routes, Route } from 'react-router-dom'

import { Loader } from './shared/loader'
import './App.css'
const BinaryClock = lazy(() => import('./routes/binary-clock'))
const Home = lazy(() => import('./routes/home'))

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/binary-clock' element={<BinaryClock />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
