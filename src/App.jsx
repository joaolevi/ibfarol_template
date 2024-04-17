import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import CultoOnline from "./pages/CultoOnline";
import ForgotPassword from "./pages/ForgotPassword";
import Donations from "./pages/Donations";
import Ministerios from "./pages/Ministerios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Unauthorized from "./pages/Unauthorized";
import UnverifiedAccount from "./pages/UnverifiedAccount";
import VerifyEmail from "./pages/VerifyEmail";
import TornarMembro from "./pages/TornarMembro";
import GaleriaFotos from "./pages/GaleriaFotos";
import Perfil from "./pages/Perfil";
import Admin from "./pages/Admin";

import ConfirmacaoPagamento from "./pages/ConfirmacaoPagamento";
import PagamentoPendente from "./pages/PagamentoPendente";
import CadastroConta from "./pages/CadastroConta";
import ConfirmacaoEmail from "./pages/ConfirmacaoEmail";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/tornarmembro" element={<TornarMembro />} />
            <Route path="/galeria" element={<GaleriaFotos />} />
            <Route path="/cultoonline" element={<CultoOnline />} />
            {/* <Route path="/subscribe" element={<SubscribeToEvent />} /> */}
            <Route path="/confpag" element={<ConfirmacaoPagamento />} />
            <Route path="/pagamentopendente" element={<PagamentoPendente />} />
            <Route path="/cadastro" element={<CadastroConta />} />
            <Route path="/confirmacaoemail" element={<ConfirmacaoEmail />} />
          </Route>

          <Route path="/Admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/unverified-account" element={<UnverifiedAccount />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
};

export default App;
