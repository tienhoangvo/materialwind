import Link from 'next/link'
import { useRouter, RouterEvent } from 'next/router'
import { ReactElement, ReactNode, useEffect } from 'react'
import Navigation from './Navigation'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="p-2 col-[1_/_-1] bg-schemes-light-primary text-schemes-light-onPrimary sticky top-0 z-10 shadow-2">
        <Link href="/" className="text-2xl font-bold">Materialwind</Link>
      </header>
      <Navigation />
      <main className="p-8 col-[2_/_-1] bg-green-200">{children}</main>
      {/* <aside className="col-[3_/_4] bg-orange-200 w-[200px]">Aside</aside> */}
      <footer className="p-2 col-[1_/_-1] bg-slate-200">Footer</footer>
    </div>
  )
}

export type GetLayout = (page: ReactElement) => ReactNode

export default Layout
