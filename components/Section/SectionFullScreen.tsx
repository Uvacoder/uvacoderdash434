import React, { ReactNode } from 'react'

import {
  gradientBgDark,
  gradientBgPinkRed,
  gradientBgPurplePink,
} from '../../core/colors'
import { iAppState, useAppStore } from '../../core/store'
import { BgKey } from '../../interfaces'
// import { useAppSelector } from '../src/stores/hooks'

type Props = {
  bg: BgKey
  children: ReactNode
}

export default function SectionFullScreen({ bg, children }: Props) {
  const darkMode = useAppStore((state: iAppState) => state.darkMode)

  let componentClass = 'flex min-h-screen items-center justify-center '

  if (darkMode) {
    componentClass += gradientBgDark
  } else if (bg === 'purplePink') {
    componentClass += gradientBgPurplePink
  } else if (bg === 'pinkRed') {
    componentClass += gradientBgPinkRed
  }

  return <div className={componentClass}>{children}</div>
}
