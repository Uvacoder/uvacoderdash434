import React, { ReactNode } from 'react'

import { containerMaxW } from '../../core/config'
import BaseLevel from '../Base/BaseLevel'
import JustboilLogo from '../JustBoil/Logo'

type Props = {
  children: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <BaseLevel>
        <div className='text-center md:text-left mb-6 md:mb-0'>
          <b>
            &copy;{year},{` `}
            <a
              target={'_blank'}
              href='https://twitter.com/polpenaloza'
              rel='noopener noreferrer'
            >
              @polpenaloza
            </a>
            .
          </b>
          {` `}
          {children}
        </div>
        <div className='md:py-2'>
          <a
            className='flex items-center'
            href='https://polpenaloza.com'
            rel='noreferrer'
            target='_blank'
          >
            <span className='font-bold text-xs pr-2'>Mady with: </span>
            <JustboilLogo className='w-auto h-8 md:h-6' />
          </a>
        </div>
      </BaseLevel>
    </footer>
  )
}
