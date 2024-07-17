import styles from './Botao.module.css'

function Botao({children}) {
    return (
        <button>
            {children}
        </button>
    )
}

export default Botao