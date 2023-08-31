import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error404 } from "./containers/errors/Error404.jsx";
import { FullClientLayout } from "./hocs/layouts/FullClientLayout.jsx";
import {
  Admin,
  CarritoCompras,
  Contactenos,
  Eventos,
  Home,
  Login,
  Menu,
  Nosotros,
  Restaurantes,
} from "./containers/pages/";
import ScrollToTop from "./ScrollToTop/index.jsx";
import React, { useState } from "react";
import { GuardedRoute } from "./routes/GuardedRoute"
import { useSelector } from "react-redux";

function App() {

  const LOGIN_ROUTE = '/';

  const {currentAuthenticatedUser,token}  = useSelector(state => state.globalCommon);

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route element={<FullClientLayout />}>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactenos" element={<Contactenos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
        </Route>
        <Route path="/carrito-compras" element={<CarritoCompras />} />
        {/* Authenticated Routes */}
        <Route
          element={
            <GuardedRoute
              isRouteAccessible={ typeof token === 'string' && token?.trim().length !== 0}
              redirectRoute={LOGIN_ROUTE}
            />
          }
        >
          <Route path="/admin/" element={<Admin />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
