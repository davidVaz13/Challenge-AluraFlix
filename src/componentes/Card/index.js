import ModalEditar from 'componentes/ModalEditar'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';



function Card({card, expandida=false, categorias}){

    
    const [showModal, setShowModal] = useState(false);

    const onOpen = () => setShowModal(true);
    const onClose = () => setShowModal(false);

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${card.id}`}>
                <img src={card.capa} alt={card.titulo} className={styles.capa} />
                <h2>{card.titulo}</h2>
            </Link>
            <div className={styles.containerFotos}>
                <button>
                    <img src='./imagens/icone_lixeira.png' alt='Icone para excluir Card'/>
                    Excluir
                </button>
                {!expandida && <button aria-hidden={expandida} onClick={onOpen}>
                    <img src='./imagens/icone_editar.png' alt='Icone para editar Card'/>
                    Editar
                </button>}
                <ModalEditar show={showModal} onClose={onClose} categorias={categorias}/>
                  
            </div>
        </div>
    )
}

export default Card

