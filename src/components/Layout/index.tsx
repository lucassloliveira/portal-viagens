import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from './Layout.module.css';

type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
} 