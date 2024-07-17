import Card from 'componentes/Card';
import styles from './Categorias.module.css'
import cards from './cards.json'
import { useContext, useEffect, useState } from 'react';
import { CategoriasContext } from 'context/CategoriasContext';

function Categorias({titulo, cor, categorias}) {

    const dados = useContext(CategoriasContext)

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
      if (dados.loading) {
        return <div>Loading...</div>;
      }
    
      if (dados.error) {
        return <div>Error: {dados.error.message}</div>;
      }
    
  

    return (
        <section className={styles.container}>
            <h2 className={styles.titulo} style={{backgroundColor: cor}}>{titulo}</h2>
            <div className={styles.containerCategorias}>  
                {dados.data.map((card) => <Card card={card} categorias={categorias}/>)} 
            </div>         
        </section>
    )
}

export default Categorias
