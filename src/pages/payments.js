import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Payments | Livo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Payments</h1>
    </DefaultLayout>
  )
}
export default Home