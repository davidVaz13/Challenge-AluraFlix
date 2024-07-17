import styled from "styled-components"
import React, { useContext } from 'react';
import Select from "react-select";
import { CategoriasContext } from "context/CategoriasContext";
import Campo from "componentes/Campo";
import Botao from "componentes/Botao";





const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DialogEstilizado = styled.div`
    position: absolute;
    top: 20px;
    background-color: #03122F;
    padding: 0;
    border: 0;
    width: 80vw;
    height: 95vh;
    display: flex;
    justify-content: center;
    
    button.excluir{
        position: absolute;
        top: 20px;
        right: 60px;
        background: transparent;
        border: 0;
    }
`

const ContainerTags = styled.div`
    width: 650px;
    height: 10%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Tags = styled.h3`
    margin: 0;
    text-align: start;
    font-size: 20px;
    font-weight: 600;
    color: white;
`

const Botoes = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`



const ModalEditar = ({ show, onClose}) => {

    const limpaForm = (evento) => {
        evento.preventDefault()
        document.querySelector('.formulario').reset()
    }

    const categorias = useContext(CategoriasContext)


    if (!show) return null

    return (
        <>
            <Overlay onClick={onClose}>
                <DialogEstilizado onClick={(e) => e.stopPropagation()}>
                    <button
                        formMethod="dialog"
                        className="excluir"
                        onClick={onClose}
                    >
                        <img src="./imagens/fechar.png" alt="Botao de fechar edição" />
                    </button>
                    <form className="formulario">
                        <h2 style={{color: '#2271D1'}}>Editar Card:</h2>
                        <Campo label='Título' placeholder='O que é react' obrigatorio={true} >
                        </Campo>
                        <ContainerTags>
                            <Tags>Categoria</Tags>
                            <select placeholder="Categoria">
                                {categorias.map((categoria) => <option>{categoria.nome}</option>)}
                            </select>
                        </ContainerTags>
                        <Campo label='Imagem' placeholder='https://www.google.com/url....' obrigatorio={true} >
                        </Campo>
                        <Campo label='Video' placeholder='"https://www.youtube.com/watch?v=y_Hs1bgkT5Q&ab_channel=noizy' obrigatorio={true} >
                        </Campo>
                        <Campo label='Descrição' placeholder='É um video que fala sobre ...' obrigatorio={true} >
                        </Campo>
                        <Botoes>
                            <Botao>
                                Guardar
                            </Botao>
                            <Botao onClick={limpaForm}>
                                Limpar
                            </Botao>
                        </Botoes>
                    </form>
                </DialogEstilizado>
            </Overlay>
        </>
    )


}


export default ModalEditar