import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const ConfirmacaoEmail = () => {

  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Seja bem-vindo!" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <div className="mb-8 mt-10 text-center">
        <h2 className="mb-6 text-2xl font-bold">Que bom ter você conosco!</h2>
        <p className="mb-2 text-[15px] text-[#777]">Um link para confirmação do email de cadastro da conta foi enviado ao seu email.</p>
        <p className="mb-2 text-[15px] text-[#777]">Por favor, verifique sua caixa de entrada ou spam e confirme seu cadastro.</p>
    </div>
    </main>
  );
};

export default ConfirmacaoEmail;
