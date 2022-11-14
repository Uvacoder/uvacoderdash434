import '../styles/main.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  // eslint-disable-next-line no-unused-vars
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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
