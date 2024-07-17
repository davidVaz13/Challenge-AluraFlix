import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const CategoriasContext = createContext();
CategoriasContext.displayName = "Categorias"

export const CategoriasProvider = ({children}) => {

    const [data, setData] = useState(null)

    const [categorias, setCategorias] = useState ([
        {
            id: uuidv4(),
            nome: 'Front End',
            cor: '#57C278'
        },
        {
            id: uuidv4(),
            nome: 'Back End',
            cor: '#82CFFA'
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#A6D157'
        },
        ]);

        return (
            <CategoriasContext.Provider value={{
                categorias,
                data, setData
            }}>
                {children}
            </CategoriasContext.Provider>
        )
}