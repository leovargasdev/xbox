import Head from 'next/head'

import { BannerHero } from 'components/BannerHero'
import { Info } from 'components/Info'
import { Games } from 'components/Games'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>xBox</title>
      </Head>

      <BannerHero />
      <Info />
      <Games />
    </div>
  )
}
