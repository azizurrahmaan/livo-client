import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'

const Pickups = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Pickups | Livo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <div className="hero-body pt-4">
          <p className="title has-text-weight-bold">
            Pickups
          </p>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column is-full has-text-centered">
            <img src="/under-construction.svg" width="300" alt="under-construction"/>
            <p className="has-text-weight-medium">This Page is under construction.</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Pickups