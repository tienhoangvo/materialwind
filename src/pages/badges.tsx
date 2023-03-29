import ComponentContent from '@/components/ComponentContent'
import ComponentContentTheme from '@/components/ComponentContentTheme'
import ComponentHeader from '@/components/ComponentHeader'
import ComponentLayout from '@/components/ComponentLayout'
import Layout from '@/components/Layout'
import { Icon, Badge, TextButton } from '@/lib/components'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const BadgesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Badges</title>
      </Head>
      <ComponentLayout>
        <ComponentHeader
          heading="Badges"
          description="Badges convey dynamic information, such as counts or status. A badge can include labels or numbers."
        />
        <ComponentContent>
          <ComponentContentTheme theme="light">
            <section className="grid grid-cols-1 gap-3">
              <menu className="flex gap-3 flex-wrap">
                <Badge>
                  <Icon name="chat_bubble" />
                </Badge>
                <Badge label="1">
                  <Icon name="chat_bubble" />
                </Badge>
                <Badge label="99">
                  <Icon name="chat_bubble" />
                </Badge>
                <Badge label="999+">
                  <Icon name="chat_bubble" />
                </Badge>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <Badge>
                  <Icon name="notifications" />
                </Badge>
                <Badge label="1">
                  <Icon name="notifications" />
                </Badge>
                <Badge label="99">
                  <Icon name="notifications" />
                </Badge>
                <Badge label="999+">
                  <Icon name="notifications" />
                </Badge>
              </menu>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge label='9' />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge label='99' />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge label='999+' />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
          <ComponentContentTheme theme="dark">
            <section className="grid grid-cols-1 gap-3">
              <menu className="flex gap-3 flex-wrap">
                <Badge>
                  <Icon name="chat_bubble" />
                </Badge>
                <Badge label="1">
                  <Icon name="chat_bubble" />
                </Badge>
                <Badge label="99">
                  <Icon name="chat_bubble" />
                </Badge>

                <Badge label="999+">
                  <Icon name="chat_bubble" />
                </Badge>
              </menu>
              <menu className="flex gap-3 flex-wrap">
                <Badge>
                  <Icon name="notifications" />
                </Badge>
                <Badge label="1">
                  <Icon name="notifications" />
                </Badge>
                <Badge label="99">
                  <Icon name="notifications" />
                </Badge>
                <Badge label="999+">
                  <Icon name="notifications" />
                </Badge>
              </menu>
              <menu className="flex gap-3 flex-wrap flex-col">
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge label='9' />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge label='99' />
                </li>
                <li className='flex '>
                  <TextButton>News</TextButton>
                  <Badge label='999+' />
                </li>
              </menu>
            </section>
          </ComponentContentTheme>
        </ComponentContent>
      </ComponentLayout>
    </>
  )
}

BadgesPage.getLayout = page => <Layout>{page}</Layout>

export default BadgesPage
