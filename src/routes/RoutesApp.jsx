import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import CriarConta from "../screens/CriarConta/CriarConta";
import Login from "../screens/Login/Login";
import Main from "../screens/Main/Main";
import Favorites from "../screens/Favorites/Favorites";
import { AuthProvider } from "../context/AuthContext";
import Info from "../screens/Info/Info";
import Checkout from "../screens/Checkout/Checkout";
import ShoppingCart from "../screens/ShoppingCart/ShoppingCart";

const RoutesApp = () => {
   return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}   path="/" exact />
                    <Route element={<Login />}  path="/login" />
                    <Route element={<Favorites /> }  path="/favorites" />
                    <Route element={<CriarConta />}   path="/criar-conta" />
                    <Route element={<Info />}   path="/info/:id" />
                    <Route element={<Checkout />} path="/checkout" />
                    <Route element={<ShoppingCart />} path="/shopping-cart" />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
   )
}

export default RoutesApp;
