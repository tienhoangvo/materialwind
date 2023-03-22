import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import { ExtendedFAB } from '@/lib/components'
import {Icon} from '@/lib/components'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'

const ExtendedFABPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Extended FAB | Matarialwind</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="Extended FAB"
          description="Extended FABs help people take primary actions. They're wider than FABs t accommodate a text label and larger target area."
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Extended FAB</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <ExtendedFAB icon={<Icon name="edit" />}>Primary</ExtendedFAB>
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <ExtendedFAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  >
                    Secondary
                  </ExtendedFAB>
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <ExtendedFAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  >
                    Tertiary
                  </ExtendedFAB>
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <ExtendedFAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  >
                    Surface
                  </ExtendedFAB>
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Extended FAB</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <ExtendedFAB icon={<Icon name="edit" />}>Primary</ExtendedFAB>
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <ExtendedFAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  >
                    Secondary
                  </ExtendedFAB>
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <ExtendedFAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  >
                    Tertiary
                  </ExtendedFAB>
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <ExtendedFAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  >
                    Surface
                  </ExtendedFAB>
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

ExtendedFABPage.getLayout = page => <Layout>{page}</Layout>

export default ExtendedFABPage
