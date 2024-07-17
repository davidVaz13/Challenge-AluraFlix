import Cabecalho from "componentes/Cabecalho"
import Container from "componentes/Container"
import Rodape from "componentes/Rodape"
import { Outlet } from "react-router-dom"
import styles from './PaginaBase.module.css'

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Container>
                <Outlet />
            </Container>
            <Rodape />
        </main>
    )
}

export default PaginaBase