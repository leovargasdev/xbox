import Head from 'next/head'

import styles from 'styles/home.module.scss'
import { BannerHero } from 'components/BannerHero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>xBox</title>
      </Head>

      <BannerHero />

      <section>
        <h1>olar</h1>
      </section>

      <div style={{ width: '100%' }}>images images images images</div>
    </div>
  )
}
