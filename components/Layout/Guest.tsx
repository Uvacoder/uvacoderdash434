import React, { ReactNode } from 'react'

import { useAppStore, iAppState } from '../../core/store'
import { App } from './app'

type Props = {
  children: ReactNode
}

export default function LayoutGuest({ children }: Props) {
  const darkMode = useAppStore((state: iAppState) => state.darkMode)

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
