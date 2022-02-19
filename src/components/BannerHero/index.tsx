import { Header } from 'components/Header'

import styles from './styles.module.scss'

export const BannerHero = () => (
  <div className={styles.container}>
    <Header />
    <h1>Xbox series X</h1>
    <div className={styles.content}>
      <h2>pedido antecipado</h2>
      {/* <img src="xbox.png" alt="Imagem do xbox series X" /> */}
    </div>
  </div>
)
