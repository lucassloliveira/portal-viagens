import Layout from "@/components/Layout";
import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export default function Destinos() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.cabecalho}>
                    <h1 className={styles.titulo}>Destinos Turísticos</h1>
                    <p className={styles.subtitulo}>
                        Escolha seu próximo destino e comece a planejar sua aventura
                    </p>
                </div>
                <div className={styles.grid}>
                {destinos.map((destino) => (
                    <CardDestino key={destino.id} destino={destino} />
                ))}
                </div>
            </div>
        </Layout>
    )
}