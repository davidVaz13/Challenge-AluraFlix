import Banner from 'componentes/Banner'
import styles from './Inicio.module.css'
import Categorias from 'componentes/Categorias'
import { useContext } from 'react'
import { CategoriasContext, CategoriasProvider } from 'context/CategoriasContext'

function Inicio() {

    const categorias = useContext(CategoriasContext)
        
    return (
        <>
           <Banner video={"https://www.youtube.com/embed/y_Hs1bgkT5Q"}/>
           <section className={styles.colecaoCards}> 
                {categorias.map((categoria) => <Categorias titulo={categoria.nome} cor={categoria.cor} categorias={categorias}/>)}
           </section>
           
           
        </>
    )
}

export default Inicio

