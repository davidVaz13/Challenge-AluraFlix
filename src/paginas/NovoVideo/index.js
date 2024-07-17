import Campo from 'componentes/Campo'
import styles from './NovoVideo.module.css'
import Botao from 'componentes/Botao'
import { useContext, useEffect, useState } from 'react'
import { CategoriasContext } from 'context/CategoriasContext'

function NovoVideo({aoAlterado}) {

    const dados = useContext(CategoriasContext)

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const limpaForm = (evento) => {
        evento.preventDefault()
        document.getElementById('forme').reset()
    }

    async function criaVideo(titulo, descricao, url, imagem) {
        const conexao = await fetch("http://localhost:3000/cards", {
            method: "POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                descricao: descricao,
                url: url,
                imagem: imagem
            })
        });
        if (!conexao.ok) {
            throw new Error("Não foi possível enviar o vídeo");
        }    
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    }

    

    useEffect(() => {
        fetch('http://localhost:3000/cards')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            dados.setData(data);
            dados.setLoading(false);
          })
          .catch((error) => {
            dados.setError(error);
            dados.setLoading(false);
          });
      }, []);
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {dados.error.message}</div>;
      }
    

    const categorias = useContext(CategoriasContext)

    return (
        <section className={styles.container}>
            <h1>Novo Vídeo</h1>
            <form className={styles.formulario} id='forme'>
                <h2 className={{ color: '#2271D1' }}>Criar Card:</h2>
                <Campo label='Título' placeholder='O que é react' obrigatorio={true} >
                </Campo>
                <div>
                    <h2 className={styles.tag}>Categoria</h2>
                    <select onChange={evento => aoAlterado(evento.target.value)} className={styles.seletor}placeholder="Categoria">
                        {categorias.map((categoria) => <option>{categoria.nome}</option>)}
                    </select>
                </div>
                <Campo label='Imagem' placeholder='https://www.google.com/url....' obrigatorio={true} >
                </Campo>
                <Campo label='Video' placeholder='"https://www.youtube.com/watch?v=y_Hs1bgkT5Q&ab_channel=noizy' obrigatorio={true} >
                </Campo>
                <Campo label='Descrição' placeholder='É um video que fala sobre ...' obrigatorio={true} >
                </Campo>
                <div>
                    <Botao onClick={criarVideo()}>
                        Guardar
                    </Botao>
                    <Botao onClick={limpaForm}>
                        Limpar
                    </Botao>
                </div>
            </form>
        </section>
    )
}

export default NovoVideo