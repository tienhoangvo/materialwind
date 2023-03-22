import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import { FilledIconButton, FilledTonalIconButton, Icon, OutlinedIconButton, StandardIconButton } from '@/lib/components'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'

const IconButtonsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Icon buttons | Materialwind</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="Icon buttons"
          description="Icon buttons help people take supplementary actions with a single tab."
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledIconButton icon={<Icon name="settings" />} />
                <FilledIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <FilledIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <FilledIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled tonal</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalIconButton icon={<Icon name="settings" />} />
                <FilledTonalIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <FilledTonalIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <FilledTonalIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Outlined</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedIconButton icon={<Icon name="settings" />} />
                <OutlinedIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <OutlinedIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <OutlinedIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Standard</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <StandardIconButton icon={<Icon name="settings" />} />
                <StandardIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <StandardIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <StandardIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <StandardIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <StandardIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledIconButton icon={<Icon name="settings" />} />
                <FilledIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <FilledIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <FilledIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filled tonal</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalIconButton icon={<Icon name="settings" />} />
                <FilledTonalIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <FilledTonalIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilledTonalIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <FilledTonalIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Outlined</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedIconButton icon={<Icon name="settings" />} />
                <OutlinedIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <OutlinedIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <OutlinedIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <OutlinedIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Standard</h3>
              <h4 className="title-small">Default</h4>
              <menu className="flex gap-3 flex-wrap">
                <StandardIconButton icon={<Icon name="settings" />} />
                <StandardIconButton
                  disabled
                  icon={<Icon name="settings" />}
                />
              </menu>
              <h4 className="title-small">Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <StandardIconButton
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
                <StandardIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="selected"
                />
              </menu>
              <h4 className="title-small">Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <StandardIconButton
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
                <StandardIconButton
                  disabled
                  icon={<Icon name="settings" />}
                  toggle="unselected"
                />
              </menu>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

IconButtonsPage.getLayout = page => <Layout>{page}</Layout>

export default IconButtonsPage
