import React, { ReactNode, useEffect, useState } from 'react'

import { iAppState, useAppStore } from '../../core/store'
import { App } from './app'

type Props = {
  children: ReactNode
}

export default function LayoutGuest({ children }: Props) {
  const [isHydrated, setIsHydrated] = useState(false)
  const darkMode = useAppStore((state: iAppState) => state.darkMode)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return <div />

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
