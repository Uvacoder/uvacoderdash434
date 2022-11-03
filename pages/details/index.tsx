import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const LayoutAuthenticated = dynamic(
  () => import('../../components/Layout/Authenticated')
)
const SectionMain = dynamic(
  () => import('../../components/Section/SectionMain')
)

const DetailsPage = () => {
  const { query } = useRouter()
  const { t } = useTranslation()
  return (
    <SectionMain className='flex justify-between items-center flex flex-col'>
      <h1 className='font-bold text-3xl p-3'>{t('dynamic-route')}</h1>
      <pre className='code'>{JSON.stringify(query, null, 2)}</pre>
      <div></div>
    </SectionMain>
  )
}

DetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DetailsPage
