import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import {
  OutlinedButton,
  TextButton,
  ElevatedButton,
  FilledButton,
  FilledTonalButton,
} from '@/lib/components/buttons/commonButtons'
import { Icon } from '@/lib/components'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'

const ButtonPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Button</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="Buttons"
          description="Buttons help people take actions, such as sending an email, sharing
            a document, or liking a comment"
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Elevated</h3>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton>Enabled</ElevatedButton>
                <ElevatedButton disabled>Disabled</ElevatedButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton icon={<Icon name="add" />}>
                  Enabled
                </ElevatedButton>
                <ElevatedButton
                  icon={<Icon name="add" />}
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
                <FilledButton icon={<Icon name="add" />}>Enabled</FilledButton>
                <FilledButton
                  icon={<Icon name="add" />}
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
                <FilledTonalButton icon={<Icon name="add" />}>
                  Enabled
                </FilledTonalButton>
                <FilledTonalButton
                  icon={<Icon name="add" />}
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
                <OutlinedButton icon={<Icon name="add" />}>
                  Enabled
                </OutlinedButton>
                <OutlinedButton
                  icon={<Icon name="add" />}
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
                <TextButton icon={<Icon name="add" />}>Enabled</TextButton>
                <TextButton
                  icon={<Icon name="add" />}
                  disabled
                >
                  Disabled
                </TextButton>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Elevated</h3>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton>Enabled</ElevatedButton>
                <ElevatedButton disabled>Disabled</ElevatedButton>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <ElevatedButton icon={<Icon name="favorite" />}>
                  Enabled
                </ElevatedButton>
                <ElevatedButton
                  icon={<Icon name="add" />}
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
                <FilledButton icon={<Icon name="add" />}>Enabled</FilledButton>
                <FilledButton
                  icon={<Icon name="add" />}
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
                <FilledTonalButton icon={<Icon name="add" />}>
                  Enabled
                </FilledTonalButton>
                <FilledTonalButton
                  icon={<Icon name="add" />}
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
                <OutlinedButton icon={<Icon name="add" />}>
                  Enabled
                </OutlinedButton>
                <OutlinedButton
                  icon={<Icon name="add" />}
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
                <TextButton icon={<Icon name="add" />}>Enabled</TextButton>
                <TextButton
                  icon={<Icon name="add" />}
                  disabled
                >
                  Disabled
                </TextButton>
              </menu>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

ButtonPage.getLayout = page => <Layout>{page}</Layout>

export default ButtonPage
