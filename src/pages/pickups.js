import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Pickups | Livo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Pickups</h1>
    </DefaultLayout>
  )
}
export default Home