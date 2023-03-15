import Layout from '@/components/Layout'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Materialwind</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <header>
        <h1 className="text-xl font-semibold">Materialwind</h1>
      </header>
      <section>
        <h3 className=" text-lg font-semibold">three words</h3>
        <p>forty-six words</p>
        <p>forty-four words</p>
      </section>
      <section>
        <h3 className=" text-lg font-semibold">seven words</h3>
        <p>sixty-eight words</p>
        <p>forty-four words</p>
      </section>
    </>
  )
}

Home.getLayout = page => <Layout>{page}</Layout>

export default Home