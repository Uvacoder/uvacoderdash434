import React, { useState } from 'react'
import type { ReactElement } from 'react'

import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiMonitorCellphone,
  mdiReload,
} from '@mdi/js'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { sampleChartData } from '../components/Charts/config'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import { Client, Transaction } from '../interfaces'

const BaseButton = dynamic(() => import('../components/Button/BaseButton'))
const CardBox = dynamic(() => import('../components/Card/CardBox'))
const CardBoxClient = dynamic(() => import('../components/Card/CardBoxClient'))
const CardBoxTransaction = dynamic(
  () => import('../components/Card/CardBoxTransaction')
)
const CardBoxWidget = dynamic(() => import('../components/Card/CardBoxWidget'))
const ChartLineSample = dynamic(() => import('../components/Charts/LineSample'))
const NotificationBar = dynamic(
  () => import('../components/Notification/NotificationBar')
)
const SectionMain = dynamic(() => import('../components/Section/SectionMain'))
const SectionTitleLineWithButton = dynamic(
  () => import('../components/Section/SectionTitleLineWithButton')
)
const TableSampleClients = dynamic(
  () => import('../components/Table/TableSampleClients')
)
const LayoutAuthenticated = dynamic(
  () => import('../components/Layout/Authenticated')
)

const Dashboard = () => {
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()

  const clientsListed = clients.slice(0, 4)

  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()

    setChartData(sampleChartData())
  }

  return (
    <>
      <Head>
        <title>Dashboard - polpenaloza.com</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title='Overview'
          main
        >
          <BaseButton
            href='https://github.com/justboil/admin-one-react-tailwind'
            target='_blank'
            icon={mdiGithub}
            label='Star on GitHub'
            color='contrast'
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>
          <CardBoxWidget
            trendLabel='12%'
            trendType='up'
            trendColor='success'
            icon={mdiAccountMultiple}
            iconColor='success'
            number={512}
            label='Clients'
          />
          <CardBoxWidget
            trendLabel='16%'
            trendType='down'
            trendColor='danger'
            icon={mdiCartOutline}
            iconColor='info'
            number={7770}
            numberPrefix='$'
            label='Sales'
          />
          <CardBoxWidget
            trendLabel='Overflow'
            trendType='warning'
            trendColor='warning'
            icon={mdiChartTimelineVariant}
            iconColor='danger'
            number={256}
            numberSuffix='%'
            label='Performance'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <div className='flex flex-col justify-between'>
            {transactions?.map((transaction: Transaction) => (
              <CardBoxTransaction
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </div>
          <div className='flex flex-col justify-between'>
            {clientsListed?.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div>

        <SectionTitleLineWithButton icon={mdiChartPie} title='Trends overview'>
          <BaseButton
            icon={mdiReload}
            color='whiteDark'
            onClick={fillChartData}
          />
        </SectionTitleLineWithButton>

        <CardBox className='mb-6'>
          {chartData && <ChartLineSample data={chartData} />}
        </CardBox>

        <SectionTitleLineWithButton icon={mdiAccountMultiple} title='Clients' />

        <NotificationBar color='info' icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Dashboard
