import { destinos } from "@/data/destinos";
import Layout from "@/components/Layout";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

type Props = {
    params: Promise<{ id:string }>
}

// Cada página de destino terá seu prórpio <title> e <metadescription>
export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const destino = destinos.find((d) => d.id === id);

    if (!destino) return {}

    return {
        title: `${destino.nome} - Portal Viagens`,
        description: destino.descricao,
    }
}

// Renderiza a página de destino em tempo de build
export async function generateStaticParams() {
    return destinos.map((destino) => ({
        id: destino.id,
    }))
}

export default async function DetalheDestino({ params }: Props) {
    const { id } = await params;
    const destino = destinos.find((d) => d.id === id);

    if (!destino) {
        notFound();
    }

    return (
        <Layout>
            <div className={styles.container}>
                <Link href="/destinos" className={styles.voltar}>
                    ← Voltar para destinos
                </Link>

                <div className={styles.imagemWrapper}>
                    <Image
                        src={destino.imageUrl}
                        alt={destino.nome}
                        fill
                        className={styles.imagem}
                        sizes="100vw"
                        priority
                    />
                    <div className={styles.overlay}>
                        <span className={styles.pais}>{destino.pais}</span>
                        <h1 className={styles.nome}>{destino.nome}</h1>
                    </div>    
                </div>

                <div className={styles.conteudo}>
                    <div className={styles.descricaoBox}>
                        <h2 className={styles.secaoTitulo}>Sobre o destino</h2>
                        <p className={styles.descricao}>{destino.descricao}</p>
                    </div>

                    <div className={styles.destaqueBox}>
                        <h2 className={styles.secaoTitulo}>Pontos turísticos</h2>
                        <ul className={styles.list}>
                            {destino.destaque.map((ponto) => (
                                <li key={ponto} className={styles.item}>
                                    📍 {ponto}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}