import React, { ReactNode, useState } from 'react'

import { mdiClose, mdiDotsVertical } from '@mdi/js'

import { containerMaxW } from '../../core/config'
import { MenuNavBarItem } from '../../interfaces'
import BaseIcon from '../Icon/BaseIcon'
import NavBarItemPlain from './NavBarItemPlain'
import NavBarMenuList from './NavBarMenuList'

type Props = {
  menu: MenuNavBarItem[]
  className: string
  children: ReactNode
}

export default function NavBar({ menu, className = '', children }: Props) {
  const [isMenuNavBarActive, setIsMenuNavBarActive] = useState(false)

  const handleMenuNavBarToggleClick = () => {
    setIsMenuNavBarActive(!isMenuNavBarActive)
  }

  return (
    <nav
      className={`${className} top-0 inset-x-0 fixed bg-white h-16 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800`}
    >
      <div className={`flex lg:items-stretch ${containerMaxW}`}>
        <div className='flex flex-1 items-stretch h-16'>{children}</div>
        <div className='flex-none items-stretch flex h-16 lg:hidden'>
          <NavBarItemPlain onClick={handleMenuNavBarToggleClick}>
            <BaseIcon
              path={isMenuNavBarActive ? mdiClose : mdiDotsVertical}
              size='24'
            />
          </NavBarItemPlain>
        </div>
        <div
          className={`${
            isMenuNavBarActive ? 'block' : 'hidden'
          } max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-16 left-0 bg-white shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800`}
        >
          <NavBarMenuList menu={menu} />
        </div>
      </div>
    </nav>
  )
}
