import classnames from 'classnames/dedupe'
import React, { ReactNode } from 'react'

import { containerMaxW } from '../../core/config'

type Props = {
  children: ReactNode
  className?: string
}

export default function SectionMain({ children, className }: Props) {
  const computedClasses = classnames([
    'p-2 overflow-auto flex-1 flex flex-col',
    containerMaxW,
    className,
  ])

  return (
    <section
      className={computedClasses}
      style={{ height: 'calc(100vh - 120px)' }}
    >
      {children}
    </section>
  )
}
