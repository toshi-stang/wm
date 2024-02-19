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
        <div className="hero-image"></div>
        <Header title="Nancy Lobster-Legs" />
        <div className="newspaper">
          Prow scuttle  provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest  grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway.
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
          Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack  tea cup ballast Blimey lee snow crow's nest. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
        </div>
      </main>

      <Footer />
    </div>
  )
}
