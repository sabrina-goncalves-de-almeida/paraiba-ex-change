import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../screens/Home/Home";
import CriarConta from "../screens/CriarConta/CriarConta";
import Login from "../screens/Login/Login";
import Teste from "../screens/Teste/Teste";
import Main from "../screens/Main/Main";

const RoutesApp = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element={<Home />}   path="/" exact />
           <Route element={<Login />}  path="/login" />
           <Route element={<CriarConta />}   path="/criar-conta" />
           <Route element={<Main />}   path="/main" />
           <Route element={<Teste />}   path="/teste/:id" />
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesApp;