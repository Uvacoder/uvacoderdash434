import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

import { iAppState, useAppStore } from '../core/store'

const LayoutAuthenticated = dynamic(
  () => import('../components/Layout/Authenticated')
)
const SectionMain = dynamic(() => import('../components/Section/SectionMain'))

const Home = () => {
  const darkMode = useAppStore((state: iAppState) => state.darkMode)
  const { t } = useTranslation()
  return (
    <SectionMain className='flex justify-between items-center flex-col'>
      <div className='font-bold text-3xl p-3'>{t('welcome')}</div>
      <svg
        className='relative w-full h-[30vh] mb-[0px] min-h[100px] max-h[150px]'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='gentle-wave'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className='parallax'>
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='0'
            fill={darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(59,130,246,0.7)'}
          />
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='3'
            fill={darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(59,130,246,0.5)'}
          />
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='5'
            fill={darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(59,130,246,0.3)'}
          />
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='7'
            fill={darkMode ? '#fff' : 'rgb(59,130,246)'}
          />
        </g>
      </svg>
    </SectionMain>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Home
