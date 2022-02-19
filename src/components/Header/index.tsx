import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <img src="logo.svg" alt="" />

    <nav className={styles.navigation}>
      <ul>
        <li>visão geral</li>
        <li>jogos</li>
        <li>galeria</li>
        <li>unbox</li>
      </ul>
    </nav>

    <button type="button" className={styles.button}>
      ver disponibilidade
    </button>
  </header>
)
