import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import { FAB, LargeFAB, SmallFAB } from '@/lib/components'
import {Icon} from '@/lib/components'

import Head from 'next/head'
import { NextPageWithLayout } from '../_app'

const FABPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>FAB</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="FAB"
          description="The FAB represents the most important action on a screen. It puts key actions within reach."
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">FAB</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <FAB icon={<Icon name="edit" />} />
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <FAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  />
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <FAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  />
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <FAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">FABs</h3>
              <menu className="flex gap-3 flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <FAB icon={<Icon name="edit" />} />
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <FAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  />
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <FAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  />
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <FAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Large FABs</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <LargeFAB icon={<Icon name="edit" />} />
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <LargeFAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  />
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <LargeFAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  />
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <LargeFAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
            <h3 className="title-medium">Large FABs</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <LargeFAB icon={<Icon name="edit" />} />
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <LargeFAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  />
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <LargeFAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  />
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <LargeFAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>

          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Small FABs</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <SmallFAB icon={<Icon name="edit" />} />
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <SmallFAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  />
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <SmallFAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  />
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <SmallFAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
            <h3 className="title-medium">Small FABs</h3>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li>
                  <strong className="title-small">primary</strong>
                  <SmallFAB icon={<Icon name="edit" />} />
                </li>
                <li>
                  <strong className="title-small">secondary</strong>
                  <SmallFAB
                    icon={<Icon name="edit" />}
                    color="secondary"
                  />
                </li>
                <li>
                  <strong className="title-small">tertiary</strong>
                  <SmallFAB
                    icon={<Icon name="edit" />}
                    color="tertiary"
                  />
                </li>
                <li>
                  <strong className="title-small">surface</strong>
                  <SmallFAB
                    icon={<Icon name="edit" />}
                    color="surface"
                  />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

FABPage.getLayout = page => <Layout>{page}</Layout>

export default FABPage
