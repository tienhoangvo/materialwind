import Layout from "@/components/Layout"
import {Icon} from "@/lib/components/icon"
import Head from "next/head"
import { NextPageWithLayout } from "./_app"

const NotFoundPage:NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <h1 className='display-medium flex items-center gap-2'><Icon name="magic_exchange" className="display-small"/><span>Comming soon...</span></h1>
    </>
  )
}

NotFoundPage.getLayout = (page) => <Layout>{page}</Layout>

export default NotFoundPage