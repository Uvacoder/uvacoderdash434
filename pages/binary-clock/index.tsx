import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const Clock = dynamic(() => import('../../components/BinaryClock'))
const LayoutAuthenticated = dynamic(
  () => import('../../components/Layout/Authenticated')
)
const SectionMain = dynamic(
  () => import('../../components/Section/SectionMain')
)

const BinaryClock = () => {
  const { t } = useTranslation()
  return (
    <SectionMain className='flex justify-between items-center flex-col'>
      <div className='font-bold text-3xl p-3'>{t('world-clock')}</div>
      <Clock />
      <div></div>
    </SectionMain>
  )
}

BinaryClock.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default BinaryClock
