import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Invenotry | Livo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Invenotry</h1>
    </DefaultLayout>
  )
}
export default Home