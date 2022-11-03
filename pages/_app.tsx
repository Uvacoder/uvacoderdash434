import type { ReactElement, ReactNode } from 'react'

import Head from 'next/head'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '../styles/main.css'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
