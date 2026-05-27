import Layout from "@/components/Layout"
import Link from "next/link"
import styles from './page.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.titulo}>
            Explore o Mundo com a gente ✈️
          </h1>
          <p className={styles.subtitulo}>
            Descubra destinos incríveis, culturas únicas e experiências inesquecíveis. Sua próxima aventura começa aqui.
          </p>
          <Link href="/destinos" className={styles.botao}>
            Ver Destinos
          </Link>
        </div>
      </section>
    </Layout>
  )
}