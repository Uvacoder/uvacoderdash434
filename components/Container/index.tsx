import { ReactNode } from 'react'

import classnames from 'classnames/dedupe'

interface iContainer {
  classNames?: string | { [key: string]: any }
  children: ReactNode
}

export const Container = ({ classNames, children }: iContainer) => {
  const computedClassNamesContainer = classnames([
    'flex flex-col h-[80vh] w-[100vw] justify-stretch items-center',
    classNames,
  ])
  return <div className={computedClassNamesContainer}>{children}</div>
}
