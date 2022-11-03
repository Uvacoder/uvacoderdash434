import type { ReactElement } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import LayoutAuthenticated from '../../components/Layout/Authenticated'

const DetailsPage = () => {
  const { query } = useRouter()
  const { t } = useTranslation()
  return (
    <div className='bg-gradient-to-r from-[#543ab7] to-[#00acc1] text-white'>
      <div
        className='flex justify-between items-center flex flex-col'
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <h1 className='font-bold text-3xl p-3'>{t('dynamic-route')}</h1>
        <pre className='code'>{JSON.stringify(query, null, 2)}</pre>
        <div></div>
      </div>
    </div>
  )
}

DetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DetailsPage
