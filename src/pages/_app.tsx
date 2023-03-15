import { GetLayout } from '@/components/Layout'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps as NextAppProps } from 'next/app'

import { ReactElement, ReactNode, useEffect, useState } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout
}

type AppProps = NextAppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppProps) {

  return Component.getLayout ? Component.getLayout(<Component {...pageProps} />) : <Component {...pageProps} />

}
