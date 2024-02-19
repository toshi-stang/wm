import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/marimo.svg" alt="marimo Logo" className={styles.logo} />
      </footer>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Marimo, LLC. All Rights Reserved.</p>
      </div>
    </>
  )
}