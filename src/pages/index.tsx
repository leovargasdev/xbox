import Head from 'next/head'

import { BannerHero } from 'components/BannerHero'
import { Info } from 'components/Info'
import { Games } from 'components/Games'
import { Questions } from 'components/Questions'
import { Footer } from 'components/Footer'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xbox</title>
      </Head>

      <BannerHero />
      <Info />
      <Games />
      <Questions />
      <Footer />
    </div>
  )
}
