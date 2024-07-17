import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import PaginaBase from "paginas/PaginaBase";
import Modal from 'react-modal';
import { useState } from "react";
import NovoVideo from "paginas/NovoVideo";
import { CategoriasProvider } from "context/CategoriasContext";

function AppRoutes() {

  return (
    <BrowserRouter>
      <CategoriasProvider>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
                <Route index element={<Inicio />} />
                <Route path="novovideo" element={<NovoVideo/>}/>
            </Route>
        </Routes>
      </CategoriasProvider>
    </BrowserRouter>
    
  );
}

export default AppRoutes;


