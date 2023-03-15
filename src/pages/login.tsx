import Layout from '@/components/Layout'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <form>
        <label>username</label>
        <input />
      </form>
    </>
  )
}

Login.getLayout = page => <Layout>{page}</Layout>

export default Login
