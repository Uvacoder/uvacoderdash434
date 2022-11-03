import React, { ReactNode } from 'react'

import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
} from '../../core/colors'
import { initialStyleState } from '../../core/initialState'
import { BgKey } from '../../interfaces'
// import { useAppSelector } from '../src/stores/hooks'

type Props = {
  bg: BgKey
  children: ReactNode
}

export default function SectionFullScreen({ bg, children }: Props) {
  // const darkMode = useAppSelector((state) => state.style.darkMode)
  const darkMode = initialStyleState.darkMode

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
