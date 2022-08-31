import { ReactNode, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HashRouter as Router } from 'react-router-dom'

import { ErrorBoundary } from '../shared/ErrorBoundary'
// import translation catalog
import './i18next.config'

type AppProvidersProps = {
  pageProps?: any
  children: ReactNode
}

export function AppProviders({ pageProps, children }: AppProvidersProps) {
  // ensures that data is not shared between users
  // ref: https://react-query.tanstack.com/guides/ssr
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 20,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <ErrorBoundary>
        <Router>{children}</Router>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
