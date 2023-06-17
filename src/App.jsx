import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import {MainCart } from "./pages/cart";
import { Login } from "./pages/login";
import { Admin } from "./pages/admin";
import "./global.css";


function App() {
  const [login, setLogin] = React.useState(localStorage.getItem("login") || "");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<MainCart />} />
      <Route
        path="/admin"
        element={
          !login ? <Login login={login} setLogin={setLogin} /> : <Admin />
        }
      />
    </Routes>
  );
}

export default App;
