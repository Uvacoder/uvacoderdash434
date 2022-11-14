import { mdiMinus, mdiPlus } from '@mdi/js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { getButtonColor } from '../../core/colors'
import { iAppState, useAppStore } from '../../core/store'
import { MenuAsideItem } from '../../interfaces'
import BaseIcon from '../Icon/BaseIcon'
import AsideMenuList from './AsideMenuList'

type Props = {
  item: MenuAsideItem
  isDropdownList?: boolean
}

const AsideMenuItem = ({ item, isDropdownList = false }: Props) => {
  const [isLinkActive, setIsLinkActive] = useState(false)
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const styleState = useAppStore((state: iAppState) => state.style)

  const asideMenuItemStyle = styleState.asideMenuItemStyle
  const asideMenuDropdownStyle = styleState.asideMenuDropdownStyle
  const asideMenuItemActiveStyle = styleState.asideMenuItemActiveStyle

  const activeClassAddon =
    !item.color && isLinkActive ? asideMenuItemActiveStyle : ''

  const { asPath, isReady } = useRouter()

  useEffect(() => {
    if (item.href && isReady) {
      const linkPathName = new URL(item.href, location.href).pathname

      const activePathname = new URL(asPath, location.href).pathname

      setIsLinkActive(linkPathName === activePathname)
    }
  }, [item.href, isReady, asPath])

  const asideMenuItemInnerContents = (
    <>
      {item.icon && (
        <BaseIcon
          path={item.icon}
          className={`flex-none ${activeClassAddon}`}
          w='w-16'
          size='18'
        />
      )}
      <span
        className={`grow text-ellipsis line-clamp-1 ${
          item.menu ? '' : 'pr-12'
        } ${activeClassAddon}`}
      >
        {item.label}
      </span>
      {item.menu && (
        <BaseIcon
          path={isDropdownActive ? mdiMinus : mdiPlus}
          className={`flex-none ${activeClassAddon}`}
          w='w-12'
        />
      )}
    </>
  )

  const componentClass = [
    'flex cursor-pointer',
    isDropdownList ? 'py-3 px-6 text-sm' : 'py-3',
    item.color
      ? getButtonColor(item.color, false, true)
      : `${asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`,
  ].join(' ')

  return (
    <li>
      {item.href && (
        <Link
          passHref
          href={item.href}
          target={item.target}
          className={componentClass}
        >
          {asideMenuItemInnerContents}
        </Link>
      )}
      {!item.href && (
        <div
          className={componentClass}
          onClick={() => setIsDropdownActive(!isDropdownActive)}
        >
          {asideMenuItemInnerContents}
        </div>
      )}
      {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`${asideMenuDropdownStyle} ${
            isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden'
          }`}
          isDropdownList
        />
      )}
    </li>
  )
}

export default AsideMenuItem
