import React, { ReactNode } from 'react'

import { initialStyleState } from '../../core/initialState'
// import { useAppSelector } from '../../src/stores/hooks'
import { App } from './app'

type Props = {
  children: ReactNode
}

export default function LayoutGuest({ children }: Props) {
  // const darkMode = useAppSelector((state) => state.style.darkMode)
  const darkMode = initialStyleState.darkMode

  return (
    <App>
      <div className={darkMode ? 'dark' : ''}>
        <div className='bg-white dark:bg-slate-800 dark:text-slate-100'>
          {children}
        </div>
      </div>
    </App>
  )
}
