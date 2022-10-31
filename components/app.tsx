import { Suspense } from 'react'

import { AppProviders } from '../context/app-providers'
import { Loader } from './Loader'

export const App = ({ children }: any) => {
  return (
    <AppProviders>
      <Suspense fallback={<Loader />}>
        <div className='flex flex-col justify-center items-center'>
          {children}
        </div>
      </Suspense>
    </AppProviders>
  )
}
