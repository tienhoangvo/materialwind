import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import { ExtendedFAB, SegmentedButton } from '@/lib/components'
import { Icon } from '@/lib/components'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'

const SegmentedButtonsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Segmented buttons | Matarialwind</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="Segmented buttons"
          description="Segmented buttons help people select options, switch views, or sort elements."
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Segmented buttons</h3>
              <SegmentedButton>
                <SegmentedButton.Segment selected>
                  Enabled
                </SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
              </SegmentedButton>

              <SegmentedButton>
                <SegmentedButton.Segment
                  selected
                  selectedIcon={<Icon name="check" />}
                >
                  Enabled
                </SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
              </SegmentedButton>

              <SegmentedButton>
                <SegmentedButton.Segment
                  selected
                  selectedIcon={<Icon name="check" />}
                >
                  <Icon name="motorcycle"/>
                </SegmentedButton.Segment>
                <SegmentedButton.Segment><Icon name="directions_walk"/></SegmentedButton.Segment>
                <SegmentedButton.Segment><Icon name="train"/></SegmentedButton.Segment>
                <SegmentedButton.Segment><Icon name="directions_car"/></SegmentedButton.Segment>
              </SegmentedButton>

              <SegmentedButton>
                <SegmentedButton.Segment
                  selected
                  selectedIcon={<Icon name="check" />}
                  icon={<Icon name="favorite" />}
                >
                  Favorites
                </SegmentedButton.Segment>
                <SegmentedButton.Segment icon={<Icon name="trending_up" />}>
                  Trending
                </SegmentedButton.Segment>
                <SegmentedButton.Segment icon={<Icon name="bookmark" />}>
                  Saved
                </SegmentedButton.Segment>
              </SegmentedButton>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <h3 className="title-medium">Segmented buttons</h3>
              <SegmentedButton>
                <SegmentedButton.Segment selected>
                  Enabled
                </SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
              </SegmentedButton>

              <SegmentedButton>
                <SegmentedButton.Segment
                  selected
                  selectedIcon={<Icon name="check" />}
                >
                  Enabled
                </SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
                <SegmentedButton.Segment>Enabled</SegmentedButton.Segment>
              </SegmentedButton>
              <SegmentedButton>
                <SegmentedButton.Segment
                  selected
                  selectedIcon={<Icon name="check" />}
                >
                  <Icon name="motorcycle"/>
                </SegmentedButton.Segment>
                <SegmentedButton.Segment><Icon name="directions_walk"/></SegmentedButton.Segment>
                <SegmentedButton.Segment><Icon name="train"/></SegmentedButton.Segment>
                <SegmentedButton.Segment><Icon name="directions_car"/></SegmentedButton.Segment>
              </SegmentedButton>

              <SegmentedButton>
                <SegmentedButton.Segment
                  selected
                  selectedIcon={<Icon name="check" />}
                  icon={<Icon name="favorite" />}
                >
                  Favorites
                </SegmentedButton.Segment>
                <SegmentedButton.Segment icon={<Icon name="trending_up" />}>
                  Trending
                </SegmentedButton.Segment>
                <SegmentedButton.Segment icon={<Icon name="bookmark" />}>
                  Saved
                </SegmentedButton.Segment>
              </SegmentedButton>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

SegmentedButtonsPage.getLayout = page => <Layout>{page}</Layout>

export default SegmentedButtonsPage
