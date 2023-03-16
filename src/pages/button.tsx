import Layout from '@/components/Layout'

import ElevatedButton from '@/lib/components/buttons/ElevatedButton'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const ButtonPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Button</title>
      </Head>
      <article className="overflow-hidden grid] shadow-4 rounded-xl bg-surface-light-1 bg-opacity-hovered">
        <header className="p-[52px_52px_70px] bg-primary-80 text-test bg-schemes-light-primary text-schemes-light-onPrimary">
          <h1 className="display-large">Buttons</h1>
          <p className="body-medium">
            Buttons help people take actions, such as sending an email, sharing
            a document, or liking a comment
          </p>
        </header>
        <section className="p-[70px] grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-3">
          <section className="border bg-[#fffbff] py-3 px-6 rounded-2xl text-[#1d1b1e]">
            <h2 className="title-large">Light</h2>
            <section className="grid grid-cols-1 gap-2">
              <h3 className="title-medium">Elevated</h3>
              <menu className="flex gap-4 flex-wrap">
                <ElevatedButton>Enabled</ElevatedButton>
                <ElevatedButton disabled>Disabled</ElevatedButton>
              </menu>
              <menu className="flex gap-4 flex-wrap">
                <ElevatedButton icon="😀">Enabled</ElevatedButton>
                <ElevatedButton
                  icon="😀"
                  disabled
                >
                  Disabled
                </ElevatedButton>
              </menu>
            </section>
          </section>
          <section className="border bg-[#1d1b1e] py-3 px-6 rounded-2xl text-[#fffbff]">
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
