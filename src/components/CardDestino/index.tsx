import Link from "next/link";
import Image from "next/image";
import { Destino } from "@/types/destino";
import styles from "./CardDestino.module.css"

type Props = {
    destino: Destino
}

export default function CardDestino({ destino }: Props) {
    return (
        <Link href={`/destinos/${destino.id}`} className={styles.card}>
            <div className={styles.imagemWrapper}>
                <Image
                    src={destino.imageUrl}
                    alt={destino.nome}
                    fill
                    className={styles.imagem}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className={styles.pais}>{destino.pais}</span>    
            </div>
            <div className={styles.info}>
                <h2 className={styles.nome}>{destino.nome}</h2>
                <p className={styles.descricao}>{destino.descricao}</p>
                <span className={styles.verMais}>Ver destino →</span>
            </div>
        </Link>
    )
}