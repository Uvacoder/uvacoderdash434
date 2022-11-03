import type { ReactElement } from 'react'

import { useTranslation } from 'react-i18next'

import Clock from '../../components/Binary'
import LayoutAuthenticated from '../../components/Layout/Authenticated'

const BinaryClock = () => {
  const { t } = useTranslation()
  return (
    <div className='bg-[#27272c] text-white'>
      <div
        className='flex justify-between items-center flex flex-col'
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <div className='font-bold text-3xl p-3'>{t('world-clock')}</div>
        <Clock />
        <div></div>
      </div>
    </div>
  )
}

BinaryClock.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default BinaryClock
