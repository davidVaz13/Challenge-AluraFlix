import { Link } from 'react-router-dom'
import styles from './Rodape.module.css'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link>
                <img src='./imagens/logo_aluraflix.png' alt='Logo da AluraFlix' />
            </Link>
        </footer>
    )
}

export default Rodape