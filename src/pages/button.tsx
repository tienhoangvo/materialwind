import Layout from '@/components/Layout'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const ButtonPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Button</title>
      </Head>
      <article className="rounded-3xl bg-white overflow-hidden grid]">
        <header className="p-[52px_52px_70px] bg-purple-100">
          <h1 className="leading-[94px] text-[80px]">Buttons</h1>
          <p className="text-lg leading-6">
            Buttons help people take actions, such as sending an email, sharing
            a document, or liking a comment
          </p>
        </header>
        <section className='p-[70px] grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-3'>
          <section className='border bg-[#fffbff] py-3 px-6 rounded-2xl text-[#1d1b1e]'>
            <h2>Light</h2>
            <section>
              <h3>Filled buttons</h3>
              <menu>
                <button>Enabled</button>
                <button>Hovered</button>
                <button>Focused</button>
                <button>Pressed</button>
                <button disabled>Enabled</button>
              </menu>
              <menu>
                <button>Enabled</button>
                <button>Hovered</button>
                <button>Focused</button>
                <button>Pressed</button>
                <button disabled>Enabled</button>
              </menu>
            </section>
          </section>
          <section className='border bg-[#1d1b1e] py-3 px-6 rounded-2xl text-[#fffbff]'>
            <h2>Dark</h2>
            <section>
              <h3>Filled buttons</h3>
              <menu>
                <button>Enabled</button>
                <button>Hovered</button>
                <button>Focused</button>
                <button>Pressed</button>
                <button disabled>Enabled</button>
              </menu>
              <menu>
                <button>Enabled</button>
                <button>Hovered</button>
                <button>Focused</button>
                <button>Pressed</button>
                <button disabled>Enabled</button>
              </menu>
            </section>
          </section>
        </section>
      </article>
    </>
  )
}

ButtonPage.getLayout = page => <Layout>{page}</Layout>

export default ButtonPage
