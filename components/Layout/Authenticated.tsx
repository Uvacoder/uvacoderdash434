import React, { ReactNode, useEffect, useState } from 'react'

import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import dynamic from 'next/dynamic'

import menuAside from '../../core/menuAside'
import menuNavBar from '../../core/menuNavBar'
import { useAppStore, iAppState } from '../../core/store'
import { App } from './app'

const AsideMenu = dynamic(() => import('../AsideMenu/AsideMenu'))
const FooterBar = dynamic(() => import('../Footer/FooterBar'))
const BaseIcon = dynamic(() => import('../Icon/BaseIcon'))
const NavBar = dynamic(() => import('../Nav/NavBar'))
const NavBarItemPlain = dynamic(() => import('../Nav/NavBarItemPlain'))

type Props = {
  children: ReactNode
}

export default function LayoutAuthenticated({ children }: Props) {
  const setUser = useAppStore((state: iAppState) => state.setUser)
  const darkMode = useAppStore((state: iAppState) => state.darkMode)

  useEffect(() => {
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      avatar:
        'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
    })
  })

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)

  const layoutAsidePadding = 'xl:pl-60'

  return (
    <App>
      <div
        className={`${
          darkMode ? 'dark' : ''
        } overflow-hidden lg:overflow-visible`}
      >
        <div
          className={`${layoutAsidePadding} ${
            isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
          } pt-16 min-h-screen w-screen transition-position lg:w-auto bg-white dark:bg-slate-800 dark:text-slate-100`}
        >
          <NavBar
            menu={menuNavBar}
            className={`${layoutAsidePadding} ${
              isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
            }`}
          >
            <NavBarItemPlain
              display='flex lg:hidden'
              onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
            >
              <BaseIcon
                path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger}
                size='24'
              />
            </NavBarItemPlain>
            <NavBarItemPlain
              display='hidden lg:flex xl:hidden'
              onClick={() => setIsAsideLgActive(true)}
            >
              <BaseIcon path={mdiMenu} size='24' />
            </NavBarItemPlain>
          </NavBar>
          <AsideMenu
            isAsideMobileExpanded={isAsideMobileExpanded}
            isAsideLgActive={isAsideLgActive}
            menu={menuAside}
            onAsideLgClose={() => setIsAsideLgActive(false)}
          />
          {children}
          <FooterBar>
            Code on{` `}
            <a
              href='https://github.com/polpenaloza/react-me.com'
              target='_blank'
              rel='noreferrer'
              className='text-blue-600 text-xs md:text-sm'
            >
              GitHub
            </a>
          </FooterBar>
        </div>
      </div>
    </App>
  )
}
