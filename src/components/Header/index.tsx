import { useState } from 'react'
import styles from './styles.module.scss'

export const Header = () => {
  const [toggleNavigation, setToggleNavigation] = useState<boolean>(false)

  return (
    <header className={styles.container}>
      <img src="logo.svg" alt="" />

      <nav
        className={`${styles.navigation} ${
          toggleNavigation ? styles.active : ''
        }`}
      >
        <ul>
          <li>visão geral</li>
          <li>jogos</li>
          <li>galeria</li>
          <li>unbox</li>
        </ul>
        <button type="button" className={styles.button}>
          ver disponibilidade
        </button>
      </nav>

      <button
        type="button"
        onClick={() => setToggleNavigation(state => !state)}
        className={`${styles.toggle} ${
          toggleNavigation ? styles['toggle-active'] : ''
        }`}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
