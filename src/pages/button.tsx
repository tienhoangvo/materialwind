import Layout from '@/components/Layout'
import { OutlinedButton, TextButton } from '@/lib/components/buttons'

import ElevatedButton from '@/lib/components/buttons/ElevatedButton'
import FilledButton from '@/lib/components/buttons/FilledButton'
import FilledTonalButton from '@/lib/components/buttons/FilledTonalButton'
import Icon from '@/lib/components/Icon'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const ButtonPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Button</title>
      </Head>
      <article className="overflow-hidden grid] rounded-xl bg-surface-light-1 bg-opacity-hovered">
        <header className="p-[52px_52px_70px] bg-primary-80 text-test bg-schemes-light-primary text-schemes-light-onPrimary">
          <h1 className="display-large">Buttons</h1>
          <p className="body-medium">
            Buttons help people take actions, such as sending an email, sharing
            a document, or liking a comment
          </p>
        </header>
        <section className="p-[70px] grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-10">
          <section className="light bg-[#fffbff] p-8 rounded-2xl text-[#1d1b1e] flex flex-col gap-8 rounded-lg">
            <h2 className="title-large">Light</h2>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Elevated</h3>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton>Enabled</ElevatedButton>
                <ElevatedButton disabled>Disabled</ElevatedButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton icon={<Icon name='favorite'/>}>Enabled</ElevatedButton>
                <ElevatedButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </ElevatedButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled</h3>
              <menu className="flex gap-3 flex-wrap">
                <FilledButton>Enabled</FilledButton>
                <FilledButton disabled>Disabled</FilledButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilledButton icon={<Icon filled name="settings"/>}>Enabled</FilledButton>
                <FilledButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </FilledButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled tonal</h3>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalButton>Enabled</FilledTonalButton>
                <FilledTonalButton disabled>Disabled</FilledTonalButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalButton icon={<Icon filled name="settings"/>}>Enabled</FilledTonalButton>
                <FilledTonalButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </FilledTonalButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Outlined buttons</h3>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedButton>Enabled</OutlinedButton>
                <OutlinedButton disabled>Disabled</OutlinedButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedButton icon={<Icon filled name="settings"/>}>Enabled</OutlinedButton>
                <OutlinedButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </OutlinedButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Text buttons</h3>
              <menu className="flex gap-3 flex-wrap">
                <TextButton>Enabled</TextButton>
                <TextButton disabled>Disabled</TextButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <TextButton icon={<Icon filled name="settings"/>}>Enabled</TextButton>
                <TextButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </TextButton>
              </menu>
            </section>
          </section>
          <section className="dark border bg-[#1d1b1e] p-8 rounded-2xl text-[#fffbff] flex flex-col gap-8 rounded-lg">
            <h2 className='title-large'>Dark</h2>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Elevated</h3>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton>Enabled</ElevatedButton>
                <ElevatedButton disabled>Disabled</ElevatedButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton icon={<Icon filled name="settings"/>}>Enabled</ElevatedButton>
                <ElevatedButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </ElevatedButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled</h3>
              <menu className="flex gap-3 flex-wrap">
                <FilledButton>Enabled</FilledButton>
                <FilledButton disabled>Disabled</FilledButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilledButton icon={<Icon filled name="settings"/>}>Enabled</FilledButton>
                <FilledButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </FilledButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled tonal</h3>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalButton>Enabled</FilledTonalButton>
                <FilledTonalButton disabled>Disabled</FilledTonalButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalButton icon={<Icon filled name="settings"/>}>Enabled</FilledTonalButton>
                <FilledTonalButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </FilledTonalButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Outlined buttons</h3>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedButton>Enabled</OutlinedButton>
                <OutlinedButton disabled>Disabled</OutlinedButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedButton icon={<Icon filled name="settings"/>}>Enabled</OutlinedButton>
                <OutlinedButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </OutlinedButton>
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Text buttons</h3>
              <menu className="flex gap-3 flex-wrap">
                <TextButton>Enabled</TextButton>
                <TextButton disabled>Disabled</TextButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <TextButton icon={<Icon filled name="settings"/>}>Enabled</TextButton>
                <TextButton
                  icon={<Icon filled name="settings"/>}
                  disabled
                >
                  Disabled
                </TextButton>
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
