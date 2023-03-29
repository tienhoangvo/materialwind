import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import {
  Icon,
  Badge,
  TextButton,
  AssistChip,
  FilterChip,
} from '@/lib/components'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const ChipsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Chips</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="Chips"
          description="Chips help people enter information, make selections, filter content, or trigger actions"
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Assist chip</h3>
              <h4 className="title-small">Outlined</h4>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip>Enabled</AssistChip>
                <AssistChip disabled>Disabled</AssistChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip icon={<Icon name="local_taxi" />}>
                  Enabled
                </AssistChip>
                <AssistChip
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </AssistChip>
              </menu>
              <h4 className="title-small">Elevated</h4>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip elevated>Enabled</AssistChip>
                <AssistChip
                  elevated
                  disabled
                >
                  Disabled
                </AssistChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                >
                  Enabled
                </AssistChip>
                <AssistChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </AssistChip>
              </menu>
            </section>

            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filter chip</h3>
              <h4 className="title-small">Outlined - Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip>Enabled</FilterChip>
                <FilterChip disabled>Disabled</FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip icon={<Icon name="local_taxi" />}>
                  Enabled
                </FilterChip>
                <FilterChip
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <h4 className="title-small">Outlined - Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip selected>Enabled</FilterChip>
                <FilterChip
                  disabled
                  selected
                >
                  Disabled
                </FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip
                  icon={<Icon name="local_taxi" />}
                  selected
                >
                  Enabled
                </FilterChip>
                <FilterChip
                  icon={<Icon name="local_taxi" />}
                  disabled
                  selected
                >
                  Disabled
                </FilterChip>
              </menu>
              <h4 className="title-small">Elevated - Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip elevated>Enabled</FilterChip>
                <FilterChip
                  elevated
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                >
                  Enabled
                </FilterChip>
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <h4 className="title-small">Elevated - Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip elevated>Enabled</FilterChip>
                <FilterChip
                  elevated
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                >
                  Enabled
                </FilterChip>
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Assist chip</h3>
              <h4 className="title-small">Outlined</h4>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip>Enabled</AssistChip>
                <AssistChip disabled>Disabled</AssistChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip icon={<Icon name="local_taxi" />}>
                  Enabled
                </AssistChip>
                <AssistChip
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </AssistChip>
              </menu>
              <h4 className="title-small">Elevated</h4>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip elevated>Enabled</AssistChip>
                <AssistChip
                  elevated
                  disabled
                >
                  Disabled
                </AssistChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <AssistChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                >
                  Enabled
                </AssistChip>
                <AssistChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </AssistChip>
              </menu>
            </section>

            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Filter chip</h3>
              <h4 className="title-small">Outlined - Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip>Enabled</FilterChip>
                <FilterChip disabled>Disabled</FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip icon={<Icon name="local_taxi" />}>
                  Enabled
                </FilterChip>
                <FilterChip
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <h4 className="title-small">Outlined - Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip selected>Enabled</FilterChip>
                <FilterChip
                  disabled
                  selected
                >
                  Disabled
                </FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip
                  icon={<Icon name="local_taxi" />}
                  selected
                >
                  Enabled
                </FilterChip>
                <FilterChip
                  icon={<Icon name="local_taxi" />}
                  disabled
                  selected
                >
                  Disabled
                </FilterChip>
              </menu>
              <h4 className="title-small">Elevated - Unselected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip elevated>Enabled</FilterChip>
                <FilterChip
                  elevated
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                >
                  Enabled
                </FilterChip>
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <h4 className="title-small">Elevated - Selected</h4>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip elevated>Enabled</FilterChip>
                <FilterChip
                  elevated
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                >
                  Enabled
                </FilterChip>
                <FilterChip
                  elevated
                  icon={<Icon name="local_taxi" />}
                  disabled
                >
                  Disabled
                </FilterChip>
              </menu>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

ChipsPage.getLayout = page => <Layout>{page}</Layout>

export default ChipsPage
