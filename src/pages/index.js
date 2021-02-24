import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'
import LivoButton from  '../components/LivoButton'

const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Account | Livo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <div className="hero-body pt-4">
          <p className="title has-text-weight-bold">
            Account
          </p>
        </div>
      </section>
      <div className="container p-5">
        <form action="">
          <div className="columns">
            <div className="column is-full-mobile is-two-thirds-desktop">
              <div className="columns">
                <div className="column is-full-mobile is-full has-text-centered ">
                    <img width="150" src="/profile-pic.png" alt="profile-pic"/>
                </div>
              </div>
              <div className="columns">
                <div className="column is-full-mobile is-two-thirds-desktop">
                  <input className="input is-rounded" type="email" placeholder="Email"/>
                </div>
                <div className="column">
                  <input className="input is-rounded" type="text" placeholder="Brand Name"/>
                </div>
              </div>
              <div className="columns">
                <div className="column is-full-mobile is-two-thirds-desktop">
                  <input className="input is-rounded" type="text" placeholder="Name"/>
                </div>
                <div className="column">
                  <input className="input is-rounded" type="number" placeholder="Phone"/>
                </div>
              </div>
              <div className="columns">
                <div className="column is-full-mobile is-two-thirds-desktop">
                  <input className="input is-rounded" type="text" placeholder="RIB"/>
                </div>
                <div className="column">
                  <input className="input is-rounded" type="text" placeholder="Bank Name"/>
                </div>
              </div>
              <div className="columns">
                <div className="column is-half is-full-mobile">
                  <div className="select is-rounded is-fullwidth">
                    <select>
                      <option>City</option>
                      <option>Casabalanca</option>
                    </select>
                  </div>
                </div>
                <div className="column is-half is-full-mobile">
                  <div className="select is-rounded is-fullwidth">
                    <select>
                      <option>Zone</option>
                      <option>Ben M'sick</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-full">
                  <LivoButton type="success" text="Save Changes" expanded />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  )
}
export default Home