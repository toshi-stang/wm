import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A Tale of Nancy Lobster-Legs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <img src="/boat.svg" alt="boat logo" className="hlogo" />

        <div className="topnav">
          <a href="#">AHOY</a>
          <a href="#">BOOTY</a>
          <a href="#">CLAP OF THUNDER</a>
          <a href="#">WALK THE PLANK</a>
        </div>

        <div className="hero-image"></div>

        <Header title="Nancy Lobster-Legs" />

        <div className="newspaper">
          Prow scuttle  provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest  grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway.
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
          Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack  tea cup ballast Blimey lee snow crow's nest. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
        </div>

        <div className="row">
          <div className="column">
            <img src="/crab.png" alt="crab" />
            <img src="/fish1.png" alt="fish1" />
            <img src="/gull.png" alt="gull"/>
            <img src="/ship.png" alt="ship"/>
          </div>

          <div className="column">
            <img src="/fish2.png" alt="fish2" />
            <img src="/horse.png" alt="horse" />
            <img src="/octo.png" alt="octo" />
            <img src="/whale.png" alt="whale" />
          </div>

          <div className="column">
            <img src="/jelly.png" alt="jelly" />
            <img src="/fish3.png" alt="fish3" />
            <img src="/shark.png" alt="shark" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
