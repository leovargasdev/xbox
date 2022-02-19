import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <img src="logo.svg" alt="" />

    <h4>© Microsoft 2022</h4>
    <a href="https://twitch.tv/leovargasdev" target="_blank" rel="noreferrer">
      Todos os direitos reservados
    </a>
  </footer>
)
