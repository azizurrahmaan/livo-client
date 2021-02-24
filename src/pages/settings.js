import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'

const Settings = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Settings | Livo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Settings</h1>
    </DefaultLayout>
  )
}
export default Settings