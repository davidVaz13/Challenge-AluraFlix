import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import CabecalhoLink from 'componentes/CabecalhoLink'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="/" className={styles.logo}>
                <img  src='./imagens/logo_aluraflix.png' alt='Logo da AluraFlix' />
            </Link>
            <nav className={styles.container}>
                <CabecalhoLink to="/">Home</CabecalhoLink>
                <CabecalhoLink to="/novovideo">Novo Vídeo</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho