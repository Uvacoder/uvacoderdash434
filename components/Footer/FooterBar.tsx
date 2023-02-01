import React, { ReactNode } from 'react'

import { containerMaxW } from '../../core/config'
import BaseLevel from '../Base/BaseLevel'
import JustboilLogo from '../JustBoil/Logo'

type Props = {
  children?: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className={`p-2 ${containerMaxW}`}>
      <BaseLevel mobile>
        <div className='text-center text-xs md:text-sm md:text-left md:mb-0'>
          <b>
            &copy;{year},{` `}
            <a
              target={'_blank'}
              href='https://twitter.com/VaLandscapes'
              rel='noopener noreferrer'
            >
              @VaLandscapes
            </a>
          </b>
          {children}
        </div>
        <div className='md:py-2'>
          <a
            className='flex items-center'
            href='https://justboil.me'
            rel='noreferrer'
            target='_blank'
          >
            <span className='font-bold text-xs md:text-sm pr-2'>
              Mady with:{' '}
            </span>
            <JustboilLogo className='w-auto h-6 md:h-4' />
          </a>
        </div>
      </BaseLevel>
    </footer>
  )
}
