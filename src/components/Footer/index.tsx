import styles from './Footer.module.css'

export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.texto}>
                    © {anoAtual} Portal Viagens — Feito com Next.js
                </p>
            </div>
        </footer>
    )
}