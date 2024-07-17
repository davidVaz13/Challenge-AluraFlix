import styles from './ListaSuspensa.module.css'

const ListaSuspensa = ({ categorias,  nome, aoAlterado, obrigatorio = false}) => {
    return (
    <div className={styles.listaSuspensa}>
        <label>Categoria</label>
        <select required={obrigatorio} value={nome}>
            <option />
            {categorias.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
    )
}

export default ListaSuspensa